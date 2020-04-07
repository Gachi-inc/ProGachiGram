import {createGlobalStyle} from 'styled-components';

import {CONTENT_WIDTH, MEDIA_BREAK} from '../../constants/layout';

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-accent: hsl(49, 100%, 71%);
    --color-dark: hsl(0, 0%, 10%);
    --color-dark-translucent: hsla(0, 0%, 10%, 0.85);
    --color-light: hsl(70, 0%, 95%);
    --content-width: ${CONTENT_WIDTH}px;
    --font-size-xs: 17px;
    --font-size-s: 18px;
    --font-size-m: 22px;
    --font-size-l: 30px;
    --font-size-xl: 46px;
    --padding: 4%;
  }
  html
  body {
    background-color: var(--color-dark);
    color: var(--color-light);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: var(--font-size-s);
    padding-top: 80px;
    
    @media (max-width: ${MEDIA_BREAK}) {
      font-size: var(--font-size-xs);
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  /* CSS Reset */
  /* Box sizing rules */
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  /* Remove default padding */
  ol[class],
  ul[class] {
    padding: 0;
  }
  /* Remove default margin */
  blockquote,
  body,
  dd,
  dl,
  figcaption,
  figure,
  h1,
  h2,
  h3,
  h4,
  li,
  ol[class],
  p,
  ul[class] {
    margin: 0;
  }
  /* Set core body defaults */
  body {
    line-height: 1.5;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }
  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }
  /* Make images easier to work with */
  img {
    display: block;
    max-width: 100%;
  }
  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }
  /* Inherit fonts for inputs and buttons */
  button,
  input,
  select,
  textarea {
    font: inherit;
  }
  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }
  }
`;