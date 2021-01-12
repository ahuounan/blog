import { TComponentStylesObject, createStyled } from "@stitches/react";

import { ElementType } from "libs/types";

// const goldRatioScale = ['0.618rem', '1rem', '1.618rem', '2.618rem', '4.236rem'] as const;
// const majorThirdScale = ['0.8rem', '1rem', '1.25rem', '1.563rem', '1.953rem'] as const;
const majorFourthScale = [
  "0.75rem",
  "1rem",
  "1.333rem",
  "1.777rem",
  "2.369rem",
  "3.157rem"
] as const;
// const tritoneScale = ['0.707rem', '1rem', '1.414rem', '1.999rem', '2.827rem'] as const;
// const perfectFifth = ['0.667rem', '1rem', '1.5rem', '2.25rem', '3.375rem'] as const;
// const majorScale = ['0.75rem', '1rem', '1.25rem', '1.5rem', '2rem'] as const;

const scale = majorFourthScale;

const config = {
  tokens: {
    fonts: {
      $primary: "NanumGothic, sans-serif"
    },
    colors: {
      $background: "#af2725",
      $paperWhite: "rgba(251, 245, 245, 1)",
      $logoBackground: "#f70502",
      $transparent: "rgba(20, 20, 20, 0.05)"
    },
    fontSizes: {
      $0: scale[0],
      $1: scale[1],
      $2: scale[2],
      $3: scale[3],
      $4: scale[4],
      $5: scale[5]
    },
    space: {
      $0: scale[0],
      $1: scale[1],
      $2: scale[2],
      $3: scale[3],
      $4: scale[4],
      $5: scale[5]
    },
    sizes: {
      $0: scale[0],
      $1: scale[1],
      $2: scale[2],
      $3: scale[3],
      $4: scale[4],
      $5: scale[5]
    },
    radii: {
      $0: "1px",
      $1: "2px",
      $2: "4px"
    }
  },
  utils: {
    hoverFdbk: _ => value => ({
      transition: "background 0.1s ease-in",
      ":hover": {
        background: value
      }
    })
  }
} as const;
export const { styled, css } = createStyled(config);
export const stitchesConfig = config;
export type CSSConfig = typeof config;
export type CSSTokens = CSSConfig["tokens"];
export type CSSProp = TComponentStylesObject<CSSConfig>;
export type ScaleValues = ElementType<typeof scale>;
