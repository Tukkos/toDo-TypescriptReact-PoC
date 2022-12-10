import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

type Props = {
    children: ReactNode,
};

const fontSizes: any = [18, 22, 100]
fontSizes.bodySmall = fontSizes[0]
fontSizes.bodyMedium = fontSizes[1]
fontSizes.title = fontSizes[2];

const primary = `#3B8F32`;
const secondary = `#27835D`;
const terciary = `#F0CE89`;

const theme = {
    fontSizes,
    colors: {
        primary,
        secondary,
        terciary,
    },
};

export type ThemeType = typeof theme;

export const Theme = ({ children }: Props) => {
    return (
        <ThemeProvider theme={theme}> {children} </ThemeProvider>
    );
};