import { TComponentStylesObject, createStyled } from '@stitches/react';

import { ElementType } from 'libs/types';

const scale = ['0.618rem', '1rem', '1.618rem', '2.618rem', '4.236rem'] as const;

const config = {
  tokens: {
    fonts: {
      $primary: 'NanumGothic, sans-serif'
    },
    colors: {
      $hiContrast: 'hsl(206,10%,5%)',
      $loContrast: 'white'
    },
    fontSizes: {
      $0: scale[0],
      $1: scale[1],
      $2: scale[2],
      $3: scale[3],
      $4: scale[4]
    },
    space: {
      $0: scale[0],
      $1: scale[1],
      $2: scale[2],
      $3: scale[3],
      $4: scale[4]
    },
    sizes: {
      $0: scale[0],
      $1: scale[1],
      $2: scale[2],
      $3: scale[3],
      $4: scale[4]
    }
  }
} as const;
export const { styled, css } = createStyled(config);

export type CSSConfig = typeof config;
export type CSSTokens = CSSConfig['tokens'];
export type CSSProp = TComponentStylesObject<CSSConfig>;
export type ScaleValues = ElementType<typeof scale>;
