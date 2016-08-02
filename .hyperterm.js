module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 14,

    // font family with optional fallbacks
    fontFamily: 'Inconsolata, monospace',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(239,240,165,0.75)',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'BLOCK',

    // color of the text
    foregroundColor: '#f8f5ed',

    // terminal background color
    backgroundColor: '#3d3d3d',

    // border color (window, tabs)
    borderColor: '#777',

    // custom css to embed in the main window
    css: '',

    // custom css to embed in the terminal window
    termCSS: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '6px 6px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#505050',
      red: '#d7a5a4',
      green: '#91ad91',
      yellow: '#e8d7b9',
      blue: '#c6eaff',
      magenta: '#ba90bd',
      cyan: '#9ad6d9',
      white: '#f3f1d9',
      lightBlack: '#7f7f7f',
      lightRed: '#e4b3b2',
      lightGreen: '#d4e894',
      lightYellow: '#eff0a5',
      lightBlue: '#6996bf',
      lightMagenta: '#dcbecd',
      lightCyan: '#9ad6d9',
      lightWhite: '#f8f5ed'
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    shell: ''

    // for advanced config flags please refer to https://hyperterm.org/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [],

  // in development, you can create a directory under
  // `~/.hyperterm_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};
