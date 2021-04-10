const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const luxon = require('luxon');

const fsA = {
    mkdir: promisify(fs.mkdir),
    readdir: promisify(fs.readdir),
    readFile: promisify(fs.readFile),
    writeFile: promisify(fs.writeFile),
}

function convertTimestamp(tickRate, t){
    let r = parseInt(t.replace(/[^0-9]/g, ''));
    r = Math.round(r / (tickRate / 1000));
    return luxon.Duration.fromMillis(r).toFormat('hh:mm:ss,SSS');
}

main();
async function main(){
    try { await fsA.mkdir('output'); }
    catch{}

    const files = await fsA.readdir('.');
    for(let file of files){
        if(!file.endsWith('.xml'))
            continue;

        try {
            const xml = (await fsA.readFile(file)).toString();
            const $ = cheerio.load(xml, { xmlMode: true });

            const tickRate = $('tt').attr('ttp:tickRate');

            let lines = [];
            let index = 1;
            for(let p of $('p').get()){
                const begin = convertTimestamp(tickRate, $(p).attr('begin'));
                const end = convertTimestamp(tickRate, $(p).attr('end'));

                const time = `${begin} --> ${end}`;
                const text = $(p).children().get().map(x => $(x).is('br') ? '\n' : ($(x).is('span') ? $(x).text() : '')).join('');
                lines.push(`${index++}\n${time}\n${text}`)
            }

            const srt = lines.join('\n\n');
            const output_fname = file.substr(0, file.length - 4) + '.srt';
            await fsA.writeFile(path.join('output', output_fname), srt);

            console.log(`Successfully converted '${file}' to '${output_fname}'.`);
        }
        catch(ex){
            console.error(`Failed to convert '${file}'. Stack:`);
            console.error(ex);
        }
    }
}