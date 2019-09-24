import { css } from 'styled-components';

export const sizes = {
  xl: 1700,
  large: 1200,
  desktop: 992,
  tablet: 768,
};

const getEmSize = (label) => sizes[label] / 16;

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`@media (min-width: ${getEmSize(label)}em){${css(...args)}}`;
  return accumulator;
}, {});
