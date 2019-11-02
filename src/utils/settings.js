const font = {
    baseFontSize: '18px',
    baseLineHeight: 1.33,
    bodyFontFamily: ['Adobe Caslon Pro', 'Georgia', 'serif'],
    altFontFamily: ['Avenir Next', 'Helvetica', 'sans-serif']
}

const colors = {
    white: "#fcf9f9",
    black: "#0c0421",
    dark: "#25234c",
    primary: "#7869e5",
    secondary: "#ffd8d",
    error: "#ce2e8f",
    gradient: "linear-gradient(136deg, #3023AE 0%, #C96DD8 100%)",
    rgb: {
        white: "252, 249, 249",
        black: "12, 4, 33",
        dark: "37, 35, 75",
        primary: "120, 105, 299",
        secondary: "255, 216, 221",
        error: "206, 46, 143"
    }
};

const vars = {
  layout: {
      gap: 24,
      maxContentWidth: 1440
  },
  transition: {
      base: 0.3
  },
};

export { colors, font, vars };