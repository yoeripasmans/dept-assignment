import { css } from 'styled-components';

import TekoRegular from './../static/fonts/Teko/Teko-Regular.woff';
import TekoBold from './../static/fonts/Teko/Teko-Bold.woff';

const fontFaces = css`
  @font-face {
    font-family: 'Teko';
    src: url(${TekoRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Teko';
    src: url(${TekoBold}) format('woff');
    font-weight: bold;
    font-style: normal;
  }
`;

export default fontFaces;