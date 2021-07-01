import { createMuiTheme } from "@material-ui/core/styles";

const MutualProps = {
    palette:{
        primary:{
            light: '#eaa45d',
            main : '#f0b01f',
            dark : '#c68441',
            contrastText:"#fff"
        },
        secondary: {
            main : '#00284e',
        }
    },
    typography: {
        fontFamily: "'Montserrat', sans-serif",
        textTransform: "none",
        button: {
          textTransform: 'none'
        }
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          ashger: 1300,
          xl: 1920,
        },
      },
}

const ltrTheme = createMuiTheme({
    direction:"ltr",
    ...MutualProps
});

const rtlTheme = createMuiTheme({
    direction:"rtl",
    ...MutualProps
});

const ThemeUtilities = { ltrTheme, rtlTheme };
export default ThemeUtilities;
