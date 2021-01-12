import { render } from "@testing-library/react";

import { Background } from "../Background";

describe("components/patterns/Background", () => {
  it("should render", () => {
    const { container } = render(<Background />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      ._jtlYiP {
        width: 100%;
      }

      ._kYEQLm {
        height: 100%;
      }

      ._euMrem {
        background-color: var(--colors-background);
      }

      <div
        class="_euMrem _kYEQLm _jtlYiP scid-PJLV"
      />
    `);
  });
});
