# Buy Notes

[![Build Status](https://travis-ci.org/akashnimare/foco.svg?branch=master)](https://travis-ci.org/akashnimare/foco)
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/akashnimare/foco?branch=master&svg=true)](https://ci.appveyor.com/project/akashnimare/foco/branch/master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

<h1 align="center">
  <br>
  <img src="https://github.com/akashnimare/foco/blob/master/app/img/foco.png" alt="Buy Notes" width="160">
</h1>

<h4 align="center">A desktop menubar app based on <a href="https://buynotes.co" target="_blank">Electron</a>.</h4>

Buy Notes is a cross-platform desktop app :computer: which runs in menubar.
Buy Notes boosts your productivity :rocket: by creating perfect productive environment.
It has the best sounds for getting work done :raised_hands:.

# Demo

👉 Watch it <a href="https://www.youtube.com/watch?v=6SG2Mjpv8YE">here</a>.
<br>

[![Watch demo](https://cloud.githubusercontent.com/assets/2263909/18597112/0622a3b0-7c6a-11e6-897d-13f0aa36b6e4.png)](https://www.youtube.com/watch?v=6SG2Mjpv8YE)

<img src="https://j.gifs.com/BBqE8Y.gif">

## Installation

[fr]: https://github.com/akashnimare/foco/releases

### OS X

1. Download [Buy Notes-osx.x.x.x.dmg][fr] or [Buy Notes-osx.x.x.x.zip][fr]
2. Open or unzip the file and drag the app into the `Applications` folder
3. Done!

### Windows

coming soon :stuck_out_tongue_closed_eyes:

### Linux

_Ubuntu, Debian 8+ (deb package):_

1. Download [Buy Notes-linux.x.x.x.deb][fr]
2. Double click and install, or run `dpkg -i Buy Notes-linux.x.x.x.deb` in the terminal
3. Start the app with your app launcher or by running `foco` in a terminal

### For developers

Clone the source locally:

```sh
$ git clone https://github.com/akashnimare/foco/
$ cd foco
```

If you're on Debian or Ubuntu, you'll also need to install
`nodejs-legacy`:

Use your package manager to install `npm`.

```sh
$ sudo apt-get install npm nodejs-legacy
```

Install project dependencies:

```sh
$ npm install
```

Start the app:

```sh
$ npm start
```

### Build installers

Build app for OSX

```sh
$ npm run build:osx
```

Build app for Linux

```sh
$ npm run build:linux
```

## Features

- [x] Offline support
- [x] Cross-platform
- [x] Awesome sounds
- [x] No singup/login required
- [ ] Auto launch
- [ ] Auto updates

## Usage

<kbd>Command/ctrl + R</kbd> - Reload

<kbd>command + q</kbd> - Quit App (while window is open).

## Built with

- [Electron](https://electron.atom.io)
- [Menubar](https://github.com/maxogden/menubar)

## Related

- [zulip-electron](https://github.com/zulip/zulip-electron)

## License

MIT © [Akash Nimare](http://akashnimare.in)
