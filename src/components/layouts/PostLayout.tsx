import { Button } from "@components/primitives/Button";
import { Div } from "@components/primitives/Div";
import { Text } from "@components/primitives/Text";
import { CSSProp } from "@stitches.config";
import { ChildProp } from "libs/types";

interface Props {
  title?: string;
  children?: ChildProp | string;
  img?: string;
  onClick?: () => void;
}
export function PostLayout(props: Props): JSX.Element {
  const { title = "", children, onClick } = props;
  const Component = onClick ? Button : Div;
  const renderChildren = () => {
    if (typeof children === "string") {
      return (
        <Text css={styles.body} as="h1" type="body">
          {children}
        </Text>
      );
    }
    if (children) {
      return <Div css={styles.body}>{children}</Div>;
    }
    return (
      <Text as="p" css={Object.assign({}, styles.body, styles.blank)}>
        {"\0"}
      </Text>
    );
  };

  return (
    <Component css={styles.container} onClick={onClick}>
      <Text css={styles.header} as="h1" type="subHeading">
        {title}
      </Text>
      {renderChildren()}
      <Div css={styles.outline} />
    </Component>
  );
}

const styles: Record<string, CSSProp> = {
  container: {
    padding: "$1",
    margin: 0,
    width: "100%",
    position: "relative",
    background: "transparent",
    textAlign: "left",
    zIndex: 2
  },
  header: {
    position: "relative",
    zIndex: 2,
    background: "$paperWhite",
    display: "inline-block",
    padding: "0 $0",
    marginLeft: "-$0"
  },
  body: {
    position: "relative",
    background: "inherit",
    zIndex: 2,
    padding: "$0 0 $2 0"
  },
  blank: {
    minHeight: "$1",
    display: "block"
  },
  outline: {
    position: "absolute",
    border: "2px solid #232323",
    background: "$paperWhite",
    opacity: 0.75,
    top: "$3",
    bottom: "$1",
    left: 0,
    right: 0,
    borderRadius: "$2",
    zIndex: 0
  }
};
