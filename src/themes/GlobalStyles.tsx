import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./Theme";

export const GlobalStyles = createGlobalStyle<{theme: ThemeType}>`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    /* font-family: 'Satisfy', cursive;
    font-family: 'Zilla Slab', serif; */
    body {
        background-color: ${({theme}) => theme.colors.primary};
        display: flex;
        justify-content: center;
    }

    .leafIcon {
        height: 23px;
        width: 23px;
        color: white;
        padding: 0 5px 0 5px;
    }

    .form {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
    }

    .inputBar {
        width: 700px;
        height: 40px;
        border: 2px solid ${({theme}) => theme.colors.terciary};
        border-radius: 5px;
        background: ${({theme}) => theme.colors.primary};
        margin: 5px 10px 5px 0;
        font-size: 20px;
        padding-left: 20px;
        padding-right: 20px;
        
        ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
            color: #d5d5d5;
        }
        :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            color: #d5d5d5;
            opacity:  1;
        }
        ::-moz-placeholder { /* Mozilla Firefox 19+ */
            color: #d5d5d5;
            opacity:  1;
        }
        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: #d5d5d5;
        }
        ::-ms-input-placeholder { /* Microsoft Edge */
            color: #d5d5d5;
        }

        ::placeholder { /* Most modern browsers support this now. */
            color: #d5d5d5;
        }
    }

    .button {
        width: 70px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${({theme}) => theme.colors.primary};
        color: #ffffff;
        font-weight: 400;
        font-size: 20px;
        border: 2px solid ${({theme}) => theme.colors.terciary};
        border-radius: 5px;
    }

    .bold {
        font-weight: 700px;
    }
`;