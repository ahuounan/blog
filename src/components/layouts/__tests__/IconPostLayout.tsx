import { render } from "@testing-library/react";

import { IconPostLayout } from "../IconPostLayout";

describe("components/layouts/IconPostLayout", () => {
  it("should render with no props", () => {
    const { container } = render(<IconPostLayout />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      ._eCjziG {
        padding-top: var(--space-1);
      }

      ._bOBbkJ {
        padding-right: var(--space-1);
      }

      ._gvDHwS {
        padding-bottom: var(--space-1);
      }

      ._bznSbm {
        padding-left: var(--space-1);
      }

      ._dIMaoJ {
        margin-top: 0px;
      }

      ._bVGvky {
        margin-right: 0px;
      }

      ._eAgUIx {
        margin-bottom: 0px;
      }

      ._jBnBDx {
        margin-left: 0px;
      }

      ._jtlYiP {
        width: 100%;
      }

      ._JcngB {
        background-color: transparent;
      }

      ._cwBzYf {
        text-align: left;
      }

      ._gTXaLY {
        position: relative;
      }

      ._caMoBK {
        background-color: inherit;
      }

      ._hBxDci {
        z-index: 2;
      }

      <div
        class="_hBxDci _cwBzYf _JcngB _gTXaLY _jtlYiP _jBnBDx _eAgUIx _bVGvky _dIMaoJ _bznSbm _gvDHwS _bOBbkJ _eCjziG scid-PJLV"
      >
        <div
          class="_hBxDci _caMoBK _gTXaLY scid-PJLV"
        />
      </div>
    `);
  });

  it("should render with children", () => {
    const { container } = render(
      <IconPostLayout>
        <div>child</div>
      </IconPostLayout>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      ._eCjziG {
        padding-top: var(--space-1);
      }

      ._bOBbkJ {
        padding-right: var(--space-1);
      }

      ._gvDHwS {
        padding-bottom: var(--space-1);
      }

      ._bznSbm {
        padding-left: var(--space-1);
      }

      ._dIMaoJ {
        margin-top: 0px;
      }

      ._bVGvky {
        margin-right: 0px;
      }

      ._eAgUIx {
        margin-bottom: 0px;
      }

      ._jBnBDx {
        margin-left: 0px;
      }

      ._jtlYiP {
        width: 100%;
      }

      ._JcngB {
        background-color: transparent;
      }

      ._cwBzYf {
        text-align: left;
      }

      ._gTXaLY {
        position: relative;
      }

      ._caMoBK {
        background-color: inherit;
      }

      ._hBxDci {
        z-index: 2;
      }

      <div
        class="_hBxDci _cwBzYf _JcngB _gTXaLY _jtlYiP _jBnBDx _eAgUIx _bVGvky _dIMaoJ _bznSbm _gvDHwS _bOBbkJ _eCjziG scid-PJLV"
      >
        <div
          class="_hBxDci _caMoBK _gTXaLY scid-PJLV"
        >
          <div>
            child
          </div>
        </div>
      </div>
    `);
  });
});
