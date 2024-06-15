import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "darkBg" : "lightBg",
        color: props.colorMode === "dark" ? "lightColor" : "darkColor",
      },
    }),
  },
  colors: {
    lightBg: "#fffffa", // Background color for light mode
    lightColor: "#fffffa", // Text color for light mode
    darkBg: "#242424", // Background color for dark mode
    darkColor: "#242424", // Text color for dark mode
  },
});

export default theme;
