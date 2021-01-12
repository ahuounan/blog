import { renderWithRouter } from "jestUtils/renderWithRouter";

import Blog from "../blog";
import BlogPost from "../blog/[id]";

describe("components/pages", () => {
  describe("Blog", () => {
    it("should render", () => {
      const { container } = renderWithRouter(<Blog posts={[]} />);

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
          class="_fQyOJs _kQbbfG _iOSeYB _fPWUjy _kNPsCO _gRLvIW scid-PJLV"
        >
          <div
            class="_euMrem _kYEQLm _jtlYiP scid-PJLV"
          />
        </div>
      `);
    });
  });

  describe("Blog/[id]", () => {
    it("should render", () => {
      const { container } = renderWithRouter(<BlogPost id={1} post={{}} />);

      expect(container.firstChild).toMatchInlineSnapshot(`
        <div
          class="scid-PJLV"
        >
          Post 
           
        </div>
      `);
    });
  });
});
