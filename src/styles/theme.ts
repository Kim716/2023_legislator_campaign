import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    sm: false;
    lg: false;
    xs: false;
    md: false;
    xl: false;
    mobile: true;
    tablet: true;
    desktop: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    textPrimary: Palette["primary"];
    textSecondary: Palette["primary"];
    bgPrimary: Palette["primary"];
    bgSecondary: Palette["primary"];
  }

  interface PaletteOptions {
    textPrimary?: PaletteOptions["primary"];
    textSecondary?: PaletteOptions["primary"];
    bgPrimary?: PaletteOptions["primary"];
    bgSecondary?: PaletteOptions["primary"];
  }
}

const fontFamily = [
  "Noto Sans TC",
  "Inter",
  "PingFang TC",
  "Microsoft JhengHei",
  "Arial",
  "sans-serif",
].join(",");

let theme = createTheme({
  breakpoints: {
    values: {
      mobile: 576,
      tablet: 768,
      desktop: 1400,
    },
  },
  palette: {
    primary: {
      main: "#DA7D4A",
    },
    textPrimary: {
      main: "#334155",
      light: "#e2e8f0",
    },
    textSecondary: {
      main: "#64748B",
    },
    bgPrimary: {
      main: "#FDFCFB",
    },
    bgSecondary: {
      main: "#F7ECE1",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      *,
      *::after,
      *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        scroll-behavior: smooth;
      }
      `,
    },
  },
});

theme = createTheme({
  ...theme,
  typography: {
    allVariants: {
      fontFamily: fontFamily,
      color: theme.palette.textPrimary.main,
      lineHeight: 1.5,
    },
    h1: {
      fontSize: 40,
      fontWeight: 700,
      mobile: { fontSize: 32 },
    },
    h2: {
      fontSize: 32,
      fontWeight: 700,
      mobile: { fontSize: 24 },
    },
    h3: {
      fontSize: 28,
      fontWeight: 700,
      mobile: { fontSize: 24 },
    },
    h4: {
      fontSize: 24,
      fontWeight: 700,
      mobile: { fontSize: 24 },
    },
    h5: {
      fontSize: 20,
      fontWeight: 700,
      mobile: { fontSize: 20 },
    },
    h6: {
      fontSize: 16,
      fontWeight: 700,
      mobile: { fontSize: 16 },
    },
  },
});

export { theme };
