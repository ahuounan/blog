import { render } from "@testing-library/react";

import { TabPageLayout } from "../TabPageLayout";

describe("components/layouts/TabPageLayout", () => {
  it("should render with title", () => {
    const { container } = render(<TabPageLayout title="test" />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      ._gRLvIW {
        top: 0px;
      }

      ._kNPsCO {
        left: 0px;
      }

      ._fPWUjy {
        bottom: 0px;
      }

      ._iOSeYB {
        right: 0px;
      }

      ._kQbbfG {
        position: fixed;
      }

      ._fQyOJs {
        z-index: -1;
      }

      <div
        class="_fQyOJs _kQbbfG _iOSeYB _fPWUjy _kNPsCO _gRLvIW scid-PJLV"
      />
    `);
  });

  it("should render without background", () => {
    const { container } = render(
      <TabPageLayout title="Test" navbar={<div>navbar</div>} body={<div>body</div>} />
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      ._gRLvIW {
        top: 0px;
      }

      ._kNPsCO {
        left: 0px;
      }

      ._fPWUjy {
        bottom: 0px;
      }

      ._iOSeYB {
        right: 0px;
      }

      ._kQbbfG {
        position: fixed;
      }

      ._fQyOJs {
        z-index: -1;
      }

      <div
        class="_fQyOJs _kQbbfG _iOSeYB _fPWUjy _kNPsCO _gRLvIW scid-PJLV"
      />
    `);
  });

  it("should render with background", () => {
    const { container } = render(
      <TabPageLayout
        title="Test"
        background={<div>background</div>}
        navbar={<div>navbar</div>}
        body={<div>body</div>}
      />
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      ._gRLvIW {
        top: 0px;
      }

      ._kNPsCO {
        left: 0px;
      }

      ._fPWUjy {
        bottom: 0px;
      }

      ._iOSeYB {
        right: 0px;
      }

      ._kQbbfG {
        position: fixed;
      }

      ._fQyOJs {
        z-index: -1;
      }

      <div
        class="_fQyOJs _kQbbfG _iOSeYB _fPWUjy _kNPsCO _gRLvIW scid-PJLV"
      >
        <div>
          background
        </div>
      </div>
    `);
  });
});
