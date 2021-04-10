# netflix-to-srt

This tool is aimed at enabling translators to research and study how popular movies and shows on Netflix are being translated between a variety of languages.

It shall **NOT** be used for purposes other than research.

### How to use

1. Netflix internally uses .xml files for its contents' subtitles. You'll first need to obtain such files, and how to do that is beyond the scope of this project.

2. Once you have the .xml files, you'll need Node.js installed on your machine. You can [download it here](https://nodejs.org/en/download/).

3. Open the Terminal (if you're on a Mac) or the Command Prompt (if you're on Windows).

4. Now you'll install this tool. This step should only be done once. Type `npm i -g netflix-to-srt` then press Enter.

5. Navigate to the folder where your .xml files are located ([learn how to do that on Windows](https://www.howtogeek.com/659411/how-to-change-directories-in-command-prompt-on-windows-10/) or [how to do that on a Mac](https://www.macworld.com/article/221277/master-the-command-line-navigating-files-and-folders.html)).

6. Now type `netflix-to-srt` and press enter. The tool will do its job and the resulting files will appear inside a new `output` folder.

### Tips

Those steps might look a tad complicated at first, but they can be pretty easy if you learn the basics on how to use the Terminal (on a Mac) or the Command Prompt (on Windows). If you're on Linux, things should work mostly the same way they do on a Mac.

### LICENSE

MIT License

Copyright (c) 2021 Patrick Pissurno

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
