const ezoicColors = {
  leftBarBackground: '#1d2225',
  black: '#03080b',
  green: '#5fa624',
  offButtonRed: '#fa444a',
  reducedOpacityGreen: 'rgba(95, 167, 37, 0.36)', // used for large buttons
  darkGreen: '#366611', // pub dash version of ezoic green on selected button
  brightReducedOpacityGreen: '#e6f7d4',
  darkGray: '#a1a1a1',
  tableHeaderGray: '#edeff1',
  backgroundGrey: '#f5f5f5',
  leftBarGrey: '#edeff1',
  shadow: '#cdcdcd',
  cardFooter: '#fafafa',
  isActiveGray: '#d7d7d7',
  greyAlpha: 'rgba(205, 205, 205, 0.5)',
  blue: '#438bca',
  lightBlue: '#daecf7',
  yellow: '#fbbb02',
  orange: '#fe892a',
  darkBlue: '#3366cc',
  purple: '#a059db', // exact complimant of #5fa624
  lightOrange: '#ffca9f',
  darkOrange: '#e57011',
};

const colors = {
  blue: ezoicColors.green,
  darkBlue: ezoicColors.darkBlue,
  mediumBlue: '#005EEA',
  lightBlue: '#0097F6',
  blueTxt: ezoicColors.black,
  blueGradient:
    'linear-gradient(to right top, #306ded, #2f78f1, #3283f3, #3a8ef6, #4598f7)',
  orangeGradient: 'linear-gradient(to bottom right, #F65A1D, #F68E0E)',
  brightGrey: '#9ea7b8',
  lightGrey: '#E3E9F3',
  lightGreyAlpha: 'rgba(0,0,0,0.1)',
  orange: ezoicColors.orange,
  darkOrange: '#F64D0A',
  orangeBorder: 'rgba(255, 0, 0, 0.2)',
  orangeBkgd: 'rgba(255, 0, 0, 0.15)',
  black: '#000000',
  white: '#ffffff',
  green: ezoicColors.green,

  // Specific to inputs
  greyPlaceholder: '#919BAE',
  greyIconBkgd: '#FAFAFB',
  greyIconColor: '#B3B5B9',
  blueBorder: ezoicColors.darkGreen,
  greyToggle: '#CED3DB',

  // Specific to table
  greyHeader: ezoicColors.tableHeaderGray,
  greySubtitle: '#787E8F',
  greyHover: '#F7F8F8',
  greySeparator: '#f1f1f2',

  // Specific to timepicker
  blueIconTxt: '#367CF7',
  blueIconBkgd: '#E8F0FA',

  // Specific to tabs
  greyTabBkgd: '#F2F2F2',
  blueTabBorder: '#1C5DE7',
  greyLink: '#F5F5F5',

  // Specific to button
  button: {
    primary: {
      borderColor: ezoicColors.green,
      color: '#ffffff',
      backgroundColor: ezoicColors.green,
    },
    secondary: {
      borderColor: ezoicColors.darkGreen,
      color: ezoicColors.darkGreen,
      backgroundColor: '#ffffff',
    },
    cancel: {
      borderColor: '#9ea7b8',
      color: '#9ea7b8',
      backgroundColor: 'transparent',
    },
    delete: {
      borderColor: ezoicColors.offButtonRed,
      color: '#ffffff',
      backgroundColor: ezoicColors.offButtonRed,
    },
    success: {
      borderColor: ezoicColors.green,
      color: '#ffffff',
      backgroundColor: ezoicColors.green,
    },
    disabled: {
      borderColor: '#E9EAEB',
      color: '#B4B6BA',
      backgroundColor: '#E9EAEB',
    },
  },
};

export default colors;
