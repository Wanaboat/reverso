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
            "1": "#256EA3", // Blue
            "2": "#ED1C24", // Red
            "3":"#323232", // Dark gray
            "4":"#EEEEE8", // Mastic Gray
            boat:{
                red:"#EA0201",
                blue:"#2A2FE6",
                gray:"#6D6E6D"
            }
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