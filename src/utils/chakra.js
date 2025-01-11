import { extendTheme } from "@chakra-ui/react";

const colors = {
  text: {
    light: {
      primary: "rgba(28, 28, 28, 1)",
      secondary: "rgba(28, 28, 28, 0.4)",
      muted: "rgba(28, 28, 28, 0.2)",
    },
    dark: {
      primary: "rgba(255, 255, 255, 1)",
      secondary: "rgba(255, 255, 255, 0.4)",
      muted: "rgba(255, 255, 255, 0.2)",
    },
  },
};

export const chakraTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors,
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "2.5rem",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "light" ? "white" : "#1C1C1C",
        color:
          props.colorMode === "light"
            ? "text.light.primary"
            : "text.dark.primary",
        fontSize: "sm",
      },
      p: {
        color:
          props.colorMode === "light"
            ? "text.light.primary"
            : "text.dark.primary",
        lineHeight: "20px",
      },
      span: {
        color:
          props.colorMode === "light"
            ? "text.light.primary"
            : "text.dark.primary",
        lineHeight: "20px",
      },
      div: {
        color:
          props.colorMode === "light"
            ? "text.light.primary"
            : "text.dark.primary",
        lineHeight: "20px",
      },
    }),
  },
});
