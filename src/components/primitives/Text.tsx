import { styled } from "@stitches.config";

export const Text = styled("p", {
  fontSize: "$1",
  fontWeight: 400,
  fontFamily: "NanumGothic",
  margin: 0,
  padding: 0,

  variants: {
    type: {
      body: {
        fontSize: "$1"
      },
      subHeading: {
        fontSize: "$2"
      },
      heading: {
        fontSize: "$3"
      },
      title: {
        fontSize: "$4"
      }
    }
  }
});
