// src/gatsby-plugin-awesome/theme.js
import { theme as defaultTheme } from "@chakra-ui/core"

let theme = {}
let breakpoints = ["30em", "48em", "62em", "80em", "90em", "100em"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
breakpoints.xxl = breakpoints[4];
breakpoints.xxxl = breakpoints[5];

theme = {
    ...defaultTheme,
    colors: {
        ...defaultTheme.colors,
        brand: {
            "primary": "#0E90EE",
            "1": "#E0E0DB",
            "2": "#ED1C24",
            "3":"#323232",
            "4":"#EEEEE8"
        }
    },
    fonts: {
        ...defaultTheme.fonts,
        body: "Hind, sans-serif",
        heading: "Roboto, sans-serif",
        mono: "Source Sans Pro",
    },
    breakpoints
}

export default theme