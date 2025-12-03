import { createGlobalStyle } from "styled-components";



export const GlobalStyle =createGlobalStyle`

:root[data-theme="light"] {
  --text: #080911;
  --background: #fcfdfd;
  --primary: #5f67b9;
  --secondary: #cfa3d7;
  --accent: #c171b2;

 /* Font styles */
  /* --font-family: Varela, serif; */
  /*
    use like:
    font: var(--font-body);
  */
  /* --font-headline-1: normal 700 44px/48px var(--font-family);
  --font-headline-2: normal 700 32px/41px var(--font-family);
  --font-title: normal 700 16px/20px var(--font-family);
  --font-caption: normal 500 12px/15px var(--font-family);
  --font-caption--italic: italic 400 12px/15px var(--font-family);
  --font-body: normal 400 16px/20px var(--font-family); */

  /* Effect styles */
  /*
    use like:
    box-shadow: var(--box-shadow-book);
  */
  --box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.09),
    0 7px 4px -4px rgba(0, 0, 0, 0.07), 0 16px 8px -8px rgba(0, 0, 0, 0.07),
    0 22px 12px -12px rgba(0, 0, 0, 0.07), 0 2px 10px 0 rgba(0, 0, 0, 0.06);

  --box-shadow-hover: 0 6px 11px -2px rgba(0, 0, 0, 0.12),
    0 8px 7px -4px rgba(0, 0, 0, 0.09), 0 17px 11px -8px rgba(0, 0, 0, 0.09),
    0 24px 15px -12px rgba(0, 0, 0, 0.09), 0 4px 15px 0 rgba(0, 0, 0, 0.05);
}

  body {
    margin: 0;
    font-family: var(--font-family);
    background-color: var(--background);
    color: var(--text);
  }

:root[data-theme="dark"] {
  --text: #eeeff7;
  --background: #020303;
  --primary: #464da0;
  --secondary: #54285c;
  --accent: #8e3e7f;
  
  /* Font styles - same as light theme */
  /* --font-family: Varela, serif;
  --font-headline-1: normal 700 44px/48px var(--font-family);
  --font-headline-2: normal 700 32px/41px var(--font-family);
  --font-title: normal 700 16px/20px var(--font-family);
  --font-caption: normal 500 12px/15px var(--font-family);
  --font-caption--italic: italic 400 12px/15px var(--font-family);
  --font-body: normal 400 16px/20px var(--font-family);
} */}
`;