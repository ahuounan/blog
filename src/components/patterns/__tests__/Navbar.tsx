import { fireEvent } from "@testing-library/react";

import { router, renderWithRouter } from "jestUtils/renderWithRouter";

import { routes, Navbar } from "../Navbar";

describe("components/patterns/Navbar", () => {
  it("should render", () => {
    const { container } = renderWithRouter(<Navbar />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      ._exCLGr {
        flex-wrap: wrap;
      }

      ._hgIMBw {
        justify-content: space-between;
      }

      ._bAmpat {
        z-index: 1;
      }

      ._dOZjFp {
        border-bottom-right-radius: 30%;
      }

      ._oojmp {
        border-top-right-radius: 30%;
      }

      ._kWMOdy {
        border-top-left-radius: 30%;
      }

      ._jwHRMi {
        border-bottom-left-radius: 30%;
      }

      ._haSFSd {
        margin-left: 0;
      }

      ._gCpePd {
        margin-bottom: 0;
      }

      ._jBsEwG {
        margin-right: 0;
      }

      ._hKGqKJ {
        margin-top: 0;
      }

      ._gULBu {
        background-image: linear-gradient(180deg, rgba(61,61,61,0.1) 0%, rgba(0,0,0,1) 50%, rgba(61,61,61,0.1) 100%);
      }

      ._jMGfa {
        width: 1px;
      }

      ._bIkOjK:last-child {
        margin-right: calc(var(--space-0) * -1);
      }

      ._krAJqJ:first-child {
        margin-left: calc(var(--space-0) * -1);
      }

      ._ikSLYP {
        padding-left: var(--space-0);
      }

      ._dpsWWy {
        padding-bottom: 0;
      }

      ._cTdvuC {
        padding-top: 0;
      }

      ._jcoIeq {
        white-space: nowrap;
      }

      ._hOSNUN {
        text-decoration: underline;
      }

      ._jBnBDx {
        margin-left: 0px;
      }

      ._GgRDj {
        font-size: var(--fontSizes-1);
      }

      ._fFQvsX {
        height: var(--sizes-2);
      }

      ._jtlYiP {
        width: 100%;
      }

      ._hjpHQY {
        cursor: pointer;
      }

      ._joOXRK {
        transition-property: background;
      }

      ._eGzkFp {
        transition-duration: 0.1s;
      }

      ._buJBFI {
        transition-timing-function: ease-in;
      }

      ._hYAaiy._hYAaiy:hover {
        background-color: var(--colors-transparent);
      }

      ._erQgkq {
        border-bottom-left-radius: var(--radii-0);
      }

      ._gytQBG {
        border-top-left-radius: var(--radii-0);
      }

      ._gBiiYF {
        border-top-right-radius: var(--radii-0);
      }

      ._UqFtx {
        border-bottom-right-radius: var(--radii-0);
      }

      ._jKvetE {
        padding-right: var(--space-0);
      }

      ._JcngB {
        background-color: transparent;
      }

      ._lnbyXT {
        border-top-style: none;
      }

      ._bpgJyA {
        border-right-style: none;
      }

      ._hMQgGL {
        border-bottom-style: none;
      }

      ._cFFZdL {
        border-left-style: none;
      }

      ._djOsGX {
        outline: none;
      }

      ._fXfOg {
        display: flex;
      }

      ._gDrjVA {
        align-items: center;
      }

      ._bBznkm {
        padding-left: 0px;
      }

      ._nkqMy {
        padding-bottom: 0px;
      }

      ._cajaAx {
        padding-right: 0px;
      }

      ._bOkUqu {
        padding-top: 0px;
      }

      ._eAgUIx {
        margin-bottom: 0px;
      }

      ._bVGvky {
        margin-right: 0px;
      }

      ._dIMaoJ {
        margin-top: 0px;
      }

      ._bbeIee {
        font-family: NanumGothic;
      }

      ._cftqkj {
        font-weight: 400;
      }

      ._gqrczQ {
        font-size: var(--fontSizes-2);
      }

      ._iAmHyE {
        margin-left: var(--space-0);
      }

      ._cwBzYf {
        text-align: left;
      }

      ._fZfkrG {
        flex-shrink: 0;
      }

      ._dxHRVl {
        background-color: var(--colors-logoBackground);
      }

      ._cqwUsQ {
        border-bottom-left-radius: 10%;
      }

      ._kIpwxQ {
        border-top-left-radius: 10%;
      }

      ._YTfjP {
        border-top-right-radius: 10%;
      }

      ._jrwqAH {
        border-bottom-right-radius: 10%;
      }

      ._fAhnJC {
        height: var(--sizes-3);
      }

      ._dwaGfn {
        width: var(--sizes-3);
      }

      <nav
        class="_bAmpat _jtlYiP _gDrjVA _hgIMBw _exCLGr _fXfOg scid-PJLV"
      >
        <button
          class="_jKvetE _UqFtx _gBiiYF _gytQBG _erQgkq _hYAaiy _buJBFI _eGzkFp _joOXRK _bOkUqu _nkqMy _bBznkm _JcngB _lnbyXT _bpgJyA _hMQgGL _cFFZdL _hjpHQY scid-bmtVgj"
        >
          <div
            class="_bBznkm _nkqMy _cajaAx _bOkUqu _gDrjVA _fXfOg _djOsGX _cFFZdL _hMQgGL _bpgJyA _lnbyXT _JcngB scid-PJLV"
          >
            <svg
              class="_dwaGfn _fAhnJC _jrwqAH _YTfjP _kIpwxQ _cqwUsQ _dxHRVl _fZfkrG scid-PJLV"
              data-testid="logo"
              enable-background="new 0 0 400 400"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m226.7 44.22c2.95 1.1 5.78 1.58 7.94 3.06 5.76 3.95 11.28 8.27 16.8 12.55 2.52 1.96 4.71 4.34 7.28 6.22 1.33.98 3.24 2.01 4.73 1.83 9.38-1.16 18.75-2.48 28.07-4.11 6.33-1.1 13.04-1.37 17.91-6.67 3.04-3.31 6.44-6.29 9.49-9.59 3.55-3.84 7.39-4.85 11.73-1.56 5.46 4.13 10.53 8.86 16.3 12.48 4.07 2.55 6.18 5.93 7.71 10.38-1.85 1.52-3.63 3.74-5.93 4.74-8.01 3.5-8.83 9.63-7.87 17.32.95 7.52.49 15.21 1.2 22.78 3.11 33.32 1.53 66.72 1.98 100.09.12 8.6.96 17.2.9 25.8-.15 23.26-.34 46.53-1.04 69.78-.4 13.35-7.42 23.77-17.83 31.44-4.34 3.2-10.2 4.48-15.52 6.16-4.25 1.34-6.08-1.6-6.45-5.22-1.32-12.81-7.77-22.2-18.76-28.57-3-1.74-5.05-3.7-3.98-8.19 7.08 0 14.37-.3 21.62.12 4.04.23 5.02-2.82 5.81-4.99 3.93-10.74 6.84-21.69 7.38-33.32.46-9.77 2.51-19.46 3.52-29.22.28-2.66-.63-5.45-1-8.18-.56-4.21-1.49-8.4-1.62-12.62-.5-15.59-.6-31.2-1.14-46.79-.16-4.71-1.82-9.39-1.81-14.09.03-13.79.79-27.58.82-41.37.02-11.26-.54-22.53-.95-33.8-.2-5.52-2.52-7.8-8.01-7.65-14.94.4-29.83 1.16-44.46 4.73-4.85 1.18-6.55 3.48-6.65 8.56-.23 12.71-.93 25.42-1.94 38.09-.84 10.64 4.83 12.18 14.15 11.37 5.46-.47 10.77-2.75 16.23-3.3 4.89-.49 9.9.29 14.85.5.83.03 1.67-.01 2.5 0 1.97.03 5.38-.48 5.65.21 1.08 2.83 1.45 6.02 1.52 9.09.02.86-1.8 2.38-2.94 2.55-6 .9-12.04 1.52-18.07 2.15-9.96 1.04-19.93 1.93-29.87 3.15-1.09.13-2.69 1.91-2.83 3.07-1.2 9.93-2.24 19.88-3.05 29.85-.36 4.47-.07 8.99-.06 13.49.03 6.63 5.27 10.54 11.76 9.16 4.14-.88 8.4-1.28 12.62-1.67 8.02-.75 16.07-1.16 24.07-2.05 6.56-.73 7.81.07 7.5 6.6-.12 2.6-.43 5.28-1.26 7.71-.39 1.15-2.14 2.48-3.37 2.59-6.24.58-12.51.82-18.77 1.1-8.1.37-16.21.53-24.29 1.06-7.77.51-9.54 2.97-10.33 11.22-.94 9.76-1.51 19.7-3.92 29.13-4.2 16.43-10.09 32.35-20.29 46.26-10.22 13.94-20.16 28.09-30.78 41.71-7.88 10.11-18.76 16.08-31.05 19.67-4.34 1.27-8.37 3.58-12.62 5.22-1.36.52-2.95.43-4.43.62-.35-.6-.7-1.2-1.05-1.8 2.39-2.03 4.7-4.16 7.19-6.06 8.7-6.63 17.47-13.18 26.2-19.78.37-.28.57-.79.81-1.22 7.39-13.21 17.17-24.71 26.11-36.83 2.15-2.91 3.01-6.77 4.41-10.22 3.18-7.83 7.15-15.45 9.3-23.55 3.09-11.61 5.24-23.52 7.06-35.41 1.09-7.15.64-14.52 1.17-21.76 1.21-16.24 2.75-32.45 3.83-48.7.3-4.56-1.01-9.21-.76-13.78.39-7.21.78-14.54 2.45-21.52 1.87-7.8 2.22-14.99-.14-22.88-2.97-9.93-3.82-20.48-6.6-30.49-1.93-6.97-3.4-14.48-9.81-19.52-3.89-3.06-2.18-7.44 3.33-9.35 6.11-2.11 6.11-2.11 7.35-7.78z"
                fill="#010103"
              />
              <path
                d="m136.56 31.22c6.97-1.98 12.93-3.55 18.81-5.4 3.9-1.23 7.3-.33 9.48 2.76 1.38 1.96 1.44 4.84 2.09 7.31.48-.08.97-.16 1.45-.24-.28-1.69-.55-3.37-.86-5.26 6.18.18 11.56 3.27 16.9 6.53 1.67 1.02 3.31 2.4 5.14 2.8 4.16.91 4.11 3.12 2.46 6.12-3.99 7.23-8.01 14.43-12 21.66-.36.66-.98 1.79-.73 2.1 3.66 4.54.94 9.02.12 13.57-.44 2.42-.41 4.95-.41 7.43.02 4.76.47 9.48-3.3 13.46-.98 1.04-.33 3.49-.78 5.2-.59 2.26-1.58 4.4-2.28 6.63-.34 1.07-.56 2.22-.54 3.33.01.76.67 1.48.82 2.26.52 2.84-1.5 6.8 2.99 7.9 4.85 1.19 9.68 1.33 14.11-1.85 2.21-1.59 4.97-4.17 7.06-3.82 5.13.86 10.7 2.19 14.84 5.11 6.87 4.84 5.07 12.32-3.41 15.04-5.22 1.68-10.8 2.61-16.28 3.02-6.79.51-13.65.14-20.48.15-.32 0-.65.1-2.05.33-1.55 10.74-3.23 21.8-4.69 32.89-.6 4.56-.95 9.19-.98 13.79-.03 5.24 2.87 6.86 7.76 5.03 4.8-1.79 9.73-3.23 14.56-4.92 2.91-1.02 4.3-2.76 3.8-6.27-.25-1.74 1.11-4.05 2.42-5.47.43-.47 3.15.79 4.57 1.67 4.57 2.84 8.92 6.03 13.54 8.8 4.22 2.53 4.37 6.73 2.71 9.89-4.19 7.95-2.97 16.31-3.5 24.63-1.01 15.83-1.05 31.81-6.58 47.05-.98 2.71-.89 5.8-1.36 8.71-1.32 8.23-8.34 14.15-16.08 13.88-2.69-.09-4.05-.9-3.92-3.76.44-10.11-2.08-11.07-11.5-11.19-10.11-.13-20.24.44-30.35.96-3.21.16-5.52.97-5.62 5.65-.23 10.63-1.58 21.24-2.53 31.86-.22 2.43-.5 4.88-1.05 7.25-1.35 5.83-4.14 9.97-11.12 9.29-1.27-.12-2.75.91-4 1.63-4.29 2.48-6.44 1.49-7.82-3.33-2.33-8.13-2.54-16-.27-24.38 2.32-8.61 2.66-17.74 4.39-26.53.84-4.3 1.69-8.27 1.14-12.83-.67-5.65.84-11.52.67-17.27-.38-12.7-.65-25.46-2.14-38.05-.75-6.28-4.06-12.26-6.29-18.36-.84-2.29-2.01-4.46-2.79-6.76-.92-2.7-2.34-5.61.71-7.95 3.15-2.42 6.11-4.83 10.36-1.4 5.71 4.61 11.74 8.83 17.75 13.04 2.23 1.56 4.65 3.2 7.23 3.85 4.74 1.19 8.22-1.95 8.24-7.05.07-12.66-.07-25.33.09-37.99.04-3.15-1.15-4.83-4.14-4.67-7.73.39-15.47.82-23.17 1.62-8.63.89-17.22 2.13-25.81 3.34-10.34 1.45-20.71 2.76-30.98 4.63-7.02 1.27-9.49-.59-10.11-7.62-.33-3.72-1.59-7.66-3.5-10.87-2.05-3.45-1.69-5.03 2.15-5.21 4.83-.22 9.69.1 14.54.1 2.5 0 5.03.03 7.49-.33 5.47-.78 10.88-2.17 16.38-2.64 10.84-.93 21.71-1.5 32.58-2.01 2.56-.12 5.2.41 7.75.94 7.26 1.51 15.67-4.3 16.73-11.84 1.73-12.31 3.45-24.62 4.94-36.96.33-2.73-.33-5.58-.48-8.37-.15-2.64-.75-5.38-.26-7.9 2.37-12.18-1.96-21.63-11.05-29.49-1.61-1.38-2.49-3.6-3.56-5.22zm16.85 185.16c-.01-.12-.03-.25-.04-.37-3 0-6.25-.74-8.93.19-3.08 1.08-7.76 3.34-8.07 5.59-1.74 12.52-2.55 25.18-3.29 37.81-.39 6.57 2.65 9.39 9.12 9.39 8.39 0 16.6.13 24.87 2.72 7.64 2.39 13.3-2.2 14.72-9.71 1.33-7.06.99-14.45 1.18-21.7.19-6.82-.34-13.69.3-20.46.54-5.82 1.02-6.12-4.83-5.77-8.36.51-16.69 1.52-25.03 2.31z"
                fill="#010103"
              />
            </svg>
            <h1
              class="_cwBzYf _iAmHyE _gqrczQ _cftqkj _bbeIee _dIMaoJ _bVGvky _eAgUIx _bOkUqu _cajaAx _nkqMy _bBznkm scid-fmHILy"
            >
              Alan Hu
            </h1>
          </div>
        </button>
        <div
          class="_gDrjVA _fXfOg scid-PJLV"
        >
          <span
            class="_hOSNUN _jcoIeq _fXfOg _gDrjVA _cTdvuC _jKvetE _dpsWWy _ikSLYP _erQgkq _gytQBG _gBiiYF _UqFtx _joOXRK _eGzkFp _buJBFI _hYAaiy _krAJqJ _bIkOjK scid-estEMA"
          >
            <a
              class="_jtlYiP _fFQvsX _GgRDj _cftqkj _bbeIee _dIMaoJ _bVGvky _eAgUIx _jBnBDx _bOkUqu _cajaAx _nkqMy _bBznkm scid-fmHILy"
              href="/"
            >
              Home
            </a>
          </span>
          <div
            class="_jMGfa _fFQvsX _gULBu _hKGqKJ _jBsEwG _gCpePd _haSFSd _jwHRMi _kWMOdy _oojmp _dOZjFp scid-blmtcy"
            data-orientation="horizontal"
            data-radix-separator=""
            role="none"
          />
          <span
            class="_jcoIeq _fXfOg _gDrjVA _cTdvuC _jKvetE _dpsWWy _ikSLYP _erQgkq _gytQBG _gBiiYF _UqFtx _joOXRK _eGzkFp _buJBFI _hYAaiy _krAJqJ _bIkOjK scid-estEMA"
          >
            <a
              class="_jtlYiP _fFQvsX _GgRDj _cftqkj _bbeIee _dIMaoJ _bVGvky _eAgUIx _jBnBDx _bOkUqu _cajaAx _nkqMy _bBznkm scid-fmHILy"
              href="/resume"
            >
              Resume
            </a>
          </span>
          <div
            class="_jMGfa _fFQvsX _gULBu _hKGqKJ _jBsEwG _gCpePd _haSFSd _jwHRMi _kWMOdy _oojmp _dOZjFp scid-blmtcy"
            data-orientation="horizontal"
            data-radix-separator=""
            role="none"
          />
          <span
            class="_jcoIeq _fXfOg _gDrjVA _cTdvuC _jKvetE _dpsWWy _ikSLYP _erQgkq _gytQBG _gBiiYF _UqFtx _joOXRK _eGzkFp _buJBFI _hYAaiy _krAJqJ _bIkOjK scid-estEMA"
          >
            <a
              class="_jtlYiP _fFQvsX _GgRDj _cftqkj _bbeIee _dIMaoJ _bVGvky _eAgUIx _jBnBDx _bOkUqu _cajaAx _nkqMy _bBznkm scid-fmHILy"
              href="/blog"
            >
              Blog
            </a>
          </span>
          <div
            class="_jMGfa _fFQvsX _gULBu _hKGqKJ _jBsEwG _gCpePd _haSFSd _jwHRMi _kWMOdy _oojmp _dOZjFp scid-blmtcy"
            data-orientation="horizontal"
            data-radix-separator=""
            role="none"
          />
          <span
            class="_jcoIeq _fXfOg _gDrjVA _cTdvuC _jKvetE _dpsWWy _ikSLYP _erQgkq _gytQBG _gBiiYF _UqFtx _joOXRK _eGzkFp _buJBFI _hYAaiy _krAJqJ _bIkOjK scid-estEMA"
          >
            <a
              class="_jtlYiP _fFQvsX _GgRDj _cftqkj _bbeIee _dIMaoJ _bVGvky _eAgUIx _jBnBDx _bOkUqu _cajaAx _nkqMy _bBznkm scid-fmHILy"
              href="/lab"
            >
              Lab
            </a>
          </span>
          <div
            class="_jMGfa _fFQvsX _gULBu _hKGqKJ _jBsEwG _gCpePd _haSFSd _jwHRMi _kWMOdy _oojmp _dOZjFp scid-blmtcy"
            data-orientation="horizontal"
            data-radix-separator=""
            role="none"
          />
          <span
            class="_jcoIeq _fXfOg _gDrjVA _cTdvuC _jKvetE _dpsWWy _ikSLYP _erQgkq _gytQBG _gBiiYF _UqFtx _joOXRK _eGzkFp _buJBFI _hYAaiy _krAJqJ _bIkOjK scid-estEMA"
          >
            <a
              class="_jtlYiP _fFQvsX _GgRDj _cftqkj _bbeIee _dIMaoJ _bVGvky _eAgUIx _jBnBDx _bOkUqu _cajaAx _nkqMy _bBznkm scid-fmHILy"
              href="/contact"
            >
              Contact
            </a>
          </span>
        </div>
      </nav>
    `);
  });

  it("should navigate to home on name click", () => {
    const { getByText } = renderWithRouter(<Navbar />);
    fireEvent.click(getByText("Alan Hu"));

    expect(router.push).toHaveBeenCalledWith("/");
  });

  it("should navigate to home on logo click", () => {
    const { getByTestId } = renderWithRouter(<Navbar />);
    fireEvent.click(getByTestId("logo"));

    expect(router.push).toHaveBeenCalledWith("/");
  });

  for (const route of routes) {
    it("should navigate to each route on click", () => {
      const { getByText } = renderWithRouter(<Navbar />);
      fireEvent.click(getByText(route.label));

      expect(router.push).toHaveBeenCalledWith(route.path, route.path, {});
    });
  }
});
