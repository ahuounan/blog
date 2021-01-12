import * as SeparatorRaw from "@radix-ui/react-separator";

import { styled } from "@stitches.config";

export const Separator = styled(SeparatorRaw.Root, {
  background:
    "linear-gradient(180deg, rgba(61,61,61,0.1) 0%, rgba(0,0,0,1) 50%, rgba(61,61,61,0.1) 100%)",
  margin: "0",
  borderRadius: "30%",
  variants: {
    orientation: {
      vertical: {
        width: 1,
        height: "$2"
      },
      horizontal: {
        height: 1,
        width: "100%",
        margin: 0
      }
    }
  }
});
