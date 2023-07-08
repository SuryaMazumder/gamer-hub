import React from "react";
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark'
}

const theme = extendTheme({ config })
export default theme;
