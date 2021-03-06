import { fireEvent, render } from "@testing-library/react";

import { PostLayout } from "../PostLayout";

describe("components/layouts/PostLayout", () => {
  it("should render with no props", () => {
    const { container } = render(<PostLayout />);

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

      ._jtlYiP {
        width: 100%;
      }

      ._JcngB {
        background-color: transparent;
      }

      ._cwBzYf {
        text-align: left;
      }

      ._kpTYNP {
        position: absolute;
      }

      ._jfTurm {
        border-top-width: 2px;
      }

      ._hYbLMd {
        border-right-width: 2px;
      }

      ._czVPNi {
        border-bottom-width: 2px;
      }

      ._khlBMi {
        border-left-width: 2px;
      }

      ._kROsiw {
        border-top-style: solid;
      }

      ._bGUEHj {
        border-right-style: solid;
      }

      ._hiyybE {
        border-bottom-style: solid;
      }

      ._lyLPc {
        border-left-style: solid;
      }

      ._jJXwlh {
        border-top-color: #232323;
      }

      ._jZNXFm {
        border-right-color: #232323;
      }

      ._jYdgBR {
        border-bottom-color: #232323;
      }

      ._kAjplh {
        border-left-color: #232323;
      }

      ._fFNDJY {
        opacity: 0.75;
      }

      ._ininOE {
        top: var(--space-3);
      }

      ._kNZnbK {
        bottom: var(--space-1);
      }

      ._kNPsCO {
        left: 0px;
      }

      ._iOSeYB {
        right: 0px;
      }

      ._jiZlBo {
        border-bottom-left-radius: var(--radii-2);
      }

      ._gAMqEM {
        border-top-left-radius: var(--radii-2);
      }

      ._fcWgon {
        border-top-right-radius: var(--radii-2);
      }

      ._zFAlf {
        border-bottom-right-radius: var(--radii-2);
      }

      ._gvjqlg {
        z-index: 0;
      }

      ._jBnBDx {
        margin-left: 0px;
      }

      ._GgRDj {
        font-size: var(--fontSizes-1);
      }

      ._caMoBK {
        background-color: inherit;
      }

      ._bGjOBv {
        padding-top: var(--space-0);
      }

      ._biNDPZ {
        padding-right: 0;
      }

      ._kQvRKx {
        padding-bottom: var(--space-2);
      }

      ._bpFbKm {
        padding-left: 0;
      }

      ._jECbrP {
        min-height: var(--sizes-1);
      }

      ._bxwpIW {
        display: block;
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

      ._gTXaLY {
        position: relative;
      }

      ._hBxDci {
        z-index: 2;
      }

      ._Inna-d {
        background-color: var(--colors-paperWhite);
      }

      ._jGjIJW {
        display: inline-block;
      }

      ._cTdvuC {
        padding-top: 0;
      }

      ._jKvetE {
        padding-right: var(--space-0);
      }

      ._dpsWWy {
        padding-bottom: 0;
      }

      ._ikSLYP {
        padding-left: var(--space-0);
      }

      ._flLrYC {
        margin-left: calc(var(--space-0) * -1);
      }

      <div
        class="_hBxDci _cwBzYf _JcngB _gTXaLY _jtlYiP _jBnBDx _eAgUIx _bVGvky _dIMaoJ _bznSbm _gvDHwS _bOBbkJ _eCjziG scid-PJLV"
      >
        <h1
          class="_flLrYC _ikSLYP _dpsWWy _jKvetE _cTdvuC _jGjIJW _Inna-d _hBxDci _gTXaLY _gqrczQ _cftqkj _bbeIee _dIMaoJ _bVGvky _eAgUIx scid-fmHILy"
        />
        <p
          class="_bxwpIW _jECbrP _bpFbKm _kQvRKx _biNDPZ _bGjOBv _hBxDci _caMoBK _gTXaLY _GgRDj _cftqkj _bbeIee _dIMaoJ _bVGvky _eAgUIx _jBnBDx scid-fmHILy"
        >
           
        </p>
        <div
          class="_gvjqlg _zFAlf _fcWgon _gAMqEM _jiZlBo _iOSeYB _kNPsCO _kNZnbK _ininOE _fFNDJY _Inna-d _kAjplh _jYdgBR _jZNXFm _jJXwlh _lyLPc _hiyybE _bGUEHj _kROsiw _khlBMi _czVPNi _hYbLMd _jfTurm _kpTYNP scid-PJLV"
        />
      </div>
    `);
  });

  it("should render with title", () => {
    const { container } = render(<PostLayout title="Test" />);

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

      ._jtlYiP {
        width: 100%;
      }

      ._JcngB {
        background-color: transparent;
      }

      ._cwBzYf {
        text-align: left;
      }

      ._kpTYNP {
        position: absolute;
      }

      ._jfTurm {
        border-top-width: 2px;
      }

      ._hYbLMd {
        border-right-width: 2px;
      }

      ._czVPNi {
        border-bottom-width: 2px;
      }

      ._khlBMi {
        border-left-width: 2px;
      }

      ._kROsiw {
        border-top-style: solid;
      }

      ._bGUEHj {
        border-right-style: solid;
      }

      ._hiyybE {
        border-bottom-style: solid;
      }

      ._lyLPc {
        border-left-style: solid;
      }

      ._jJXwlh {
        border-top-color: #232323;
      }

      ._jZNXFm {
        border-right-color: #232323;
      }

      ._jYdgBR {
        border-bottom-color: #232323;
      }

      ._kAjplh {
        border-left-color: #232323;
      }

      ._fFNDJY {
        opacity: 0.75;
      }

      ._ininOE {
        top: var(--space-3);
      }

      ._kNZnbK {
        bottom: var(--space-1);
      }

      ._kNPsCO {
        left: 0px;
      }

      ._iOSeYB {
        right: 0px;
      }

      ._jiZlBo {
        border-bottom-left-radius: var(--radii-2);
      }

      ._gAMqEM {
        border-top-left-radius: var(--radii-2);
      }

      ._fcWgon {
        border-top-right-radius: var(--radii-2);
      }

      ._zFAlf {
        border-bottom-right-radius: var(--radii-2);
      }

      ._gvjqlg {
        z-index: 0;
      }

      ._jBnBDx {
        margin-left: 0px;
      }

      ._GgRDj {
        font-size: var(--fontSizes-1);
      }

      ._caMoBK {
        background-color: inherit;
      }

      ._bGjOBv {
        padding-top: var(--space-0);
      }

      ._biNDPZ {
        padding-right: 0;
      }

      ._kQvRKx {
        padding-bottom: var(--space-2);
      }

      ._bpFbKm {
        padding-left: 0;
      }

      ._jECbrP {
        min-height: var(--sizes-1);
      }

      ._bxwpIW {
        display: block;
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

      ._gTXaLY {
        position: relative;
      }

      ._hBxDci {
        z-index: 2;
      }

      ._Inna-d {
        background-color: var(--colors-paperWhite);
      }

      ._jGjIJW {
        display: inline-block;
      }

      ._cTdvuC {
        padding-top: 0;
      }

      ._jKvetE {
        padding-right: var(--space-0);
      }

      ._dpsWWy {
        padding-bottom: 0;
      }

      ._ikSLYP {
        padding-left: var(--space-0);
      }

      ._flLrYC {
        margin-left: calc(var(--space-0) * -1);
      }

      <div
        class="_hBxDci _cwBzYf _JcngB _gTXaLY _jtlYiP _jBnBDx _eAgUIx _bVGvky _dIMaoJ _bznSbm _gvDHwS _bOBbkJ _eCjziG scid-PJLV"
      >
        <h1
          class="_flLrYC _ikSLYP _dpsWWy _jKvetE _cTdvuC _jGjIJW _Inna-d _hBxDci _gTXaLY _gqrczQ _cftqkj _bbeIee _dIMaoJ _bVGvky _eAgUIx scid-fmHILy"
        >
          Test
        </h1>
        <p
          class="_bxwpIW _jECbrP _bpFbKm _kQvRKx _biNDPZ _bGjOBv _hBxDci _caMoBK _gTXaLY _GgRDj _cftqkj _bbeIee _dIMaoJ _bVGvky _eAgUIx _jBnBDx scid-fmHILy"
        >
           
        </p>
        <div
          class="_gvjqlg _zFAlf _fcWgon _gAMqEM _jiZlBo _iOSeYB _kNPsCO _kNZnbK _ininOE _fFNDJY _Inna-d _kAjplh _jYdgBR _jZNXFm _jJXwlh _lyLPc _hiyybE _bGUEHj _kROsiw _khlBMi _czVPNi _hYbLMd _jfTurm _kpTYNP scid-PJLV"
        />
      </div>
    `);
  });

  it("should render with component children", () => {
    const { container } = render(
      <PostLayout title="Test">
        <div>test child</div>
      </PostLayout>
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

      ._jtlYiP {
        width: 100%;
      }

      ._JcngB {
        background-color: transparent;
      }

      ._cwBzYf {
        text-align: left;
      }

      ._kpTYNP {
        position: absolute;
      }

      ._jfTurm {
        border-top-width: 2px;
      }

      ._hYbLMd {
        border-right-width: 2px;
      }

      ._czVPNi {
        border-bottom-width: 2px;
      }

      ._khlBMi {
        border-left-width: 2px;
      }

      ._kROsiw {
        border-top-style: solid;
      }

      ._bGUEHj {
        border-right-style: solid;
      }

      ._hiyybE {
        border-bottom-style: solid;
      }

      ._lyLPc {
        border-left-style: solid;
      }

      ._jJXwlh {
        border-top-color: #232323;
      }

      ._jZNXFm {
        border-right-color: #232323;
      }

      ._jYdgBR {
        border-bottom-color: #232323;
      }

      ._kAjplh {
        border-left-color: #232323;
      }

      ._fFNDJY {
        opacity: 0.75;
      }

      ._ininOE {
        top: var(--space-3);
      }

      ._kNZnbK {
        bottom: var(--space-1);
      }

      ._kNPsCO {
        left: 0px;
      }

      ._iOSeYB {
        right: 0px;
      }

      ._jiZlBo {
        border-bottom-left-radius: var(--radii-2);
      }

      ._gAMqEM {
        border-top-left-radius: var(--radii-2);
      }

      ._fcWgon {
        border-top-right-radius: var(--radii-2);
      }

      ._zFAlf {
        border-bottom-right-radius: var(--radii-2);
      }

      ._gvjqlg {
        z-index: 0;
      }

      ._jBnBDx {
        margin-left: 0px;
      }

      ._caMoBK {
        background-color: inherit;
      }

      ._bGjOBv {
        padding-top: var(--space-0);
      }

      ._biNDPZ {
        padding-right: 0;
      }

      ._kQvRKx {
        padding-bottom: var(--space-2);
      }

      ._bpFbKm {
        padding-left: 0;
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

      ._gTXaLY {
        position: relative;
      }

      ._hBxDci {
        z-index: 2;
      }

      ._Inna-d {
        background-color: var(--colors-paperWhite);
      }

      ._jGjIJW {
        display: inline-block;
      }

      ._cTdvuC {
        padding-top: 0;
      }

      ._jKvetE {
        padding-right: var(--space-0);
      }

      ._dpsWWy {
        padding-bottom: 0;
      }

      ._ikSLYP {
        padding-left: var(--space-0);
      }

      ._flLrYC {
        margin-left: calc(var(--space-0) * -1);
      }

      <div
        class="_hBxDci _cwBzYf _JcngB _gTXaLY _jtlYiP _jBnBDx _eAgUIx _bVGvky _dIMaoJ _bznSbm _gvDHwS _bOBbkJ _eCjziG scid-PJLV"
      >
        <h1
          class="_flLrYC _ikSLYP _dpsWWy _jKvetE _cTdvuC _jGjIJW _Inna-d _hBxDci _gTXaLY _gqrczQ _cftqkj _bbeIee _dIMaoJ _bVGvky _eAgUIx scid-fmHILy"
        >
          Test
        </h1>
        <div
          class="_bpFbKm _kQvRKx _biNDPZ _bGjOBv _hBxDci _caMoBK _gTXaLY scid-PJLV"
        >
          <div>
            test child
          </div>
        </div>
        <div
          class="_gvjqlg _zFAlf _fcWgon _gAMqEM _jiZlBo _iOSeYB _kNPsCO _kNZnbK _ininOE _fFNDJY _Inna-d _kAjplh _jYdgBR _jZNXFm _jJXwlh _lyLPc _hiyybE _bGUEHj _kROsiw _khlBMi _czVPNi _hYbLMd _jfTurm _kpTYNP scid-PJLV"
        />
      </div>
    `);
  });

  it("should render with string children", () => {
    const { container } = render(<PostLayout title="Test">test string</PostLayout>);

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

      ._jtlYiP {
        width: 100%;
      }

      ._JcngB {
        background-color: transparent;
      }

      ._cwBzYf {
        text-align: left;
      }

      ._kpTYNP {
        position: absolute;
      }

      ._jfTurm {
        border-top-width: 2px;
      }

      ._hYbLMd {
        border-right-width: 2px;
      }

      ._czVPNi {
        border-bottom-width: 2px;
      }

      ._khlBMi {
        border-left-width: 2px;
      }

      ._kROsiw {
        border-top-style: solid;
      }

      ._bGUEHj {
        border-right-style: solid;
      }

      ._hiyybE {
        border-bottom-style: solid;
      }

      ._lyLPc {
        border-left-style: solid;
      }

      ._jJXwlh {
        border-top-color: #232323;
      }

      ._jZNXFm {
        border-right-color: #232323;
      }

      ._jYdgBR {
        border-bottom-color: #232323;
      }

      ._kAjplh {
        border-left-color: #232323;
      }

      ._fFNDJY {
        opacity: 0.75;
      }

      ._ininOE {
        top: var(--space-3);
      }

      ._kNZnbK {
        bottom: var(--space-1);
      }

      ._kNPsCO {
        left: 0px;
      }

      ._iOSeYB {
        right: 0px;
      }

      ._jiZlBo {
        border-bottom-left-radius: var(--radii-2);
      }

      ._gAMqEM {
        border-top-left-radius: var(--radii-2);
      }

      ._fcWgon {
        border-top-right-radius: var(--radii-2);
      }

      ._zFAlf {
        border-bottom-right-radius: var(--radii-2);
      }

      ._gvjqlg {
        z-index: 0;
      }

      ._jBnBDx {
        margin-left: 0px;
      }

      ._GgRDj {
        font-size: var(--fontSizes-1);
      }

      ._caMoBK {
        background-color: inherit;
      }

      ._bGjOBv {
        padding-top: var(--space-0);
      }

      ._biNDPZ {
        padding-right: 0;
      }

      ._kQvRKx {
        padding-bottom: var(--space-2);
      }

      ._bpFbKm {
        padding-left: 0;
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

      ._gTXaLY {
        position: relative;
      }

      ._hBxDci {
        z-index: 2;
      }

      ._Inna-d {
        background-color: var(--colors-paperWhite);
      }

      ._jGjIJW {
        display: inline-block;
      }

      ._cTdvuC {
        padding-top: 0;
      }

      ._jKvetE {
        padding-right: var(--space-0);
      }

      ._dpsWWy {
        padding-bottom: 0;
      }

      ._ikSLYP {
        padding-left: var(--space-0);
      }

      ._flLrYC {
        margin-left: calc(var(--space-0) * -1);
      }

      <div
        class="_hBxDci _cwBzYf _JcngB _gTXaLY _jtlYiP _jBnBDx _eAgUIx _bVGvky _dIMaoJ _bznSbm _gvDHwS _bOBbkJ _eCjziG scid-PJLV"
      >
        <h1
          class="_flLrYC _ikSLYP _dpsWWy _jKvetE _cTdvuC _jGjIJW _Inna-d _hBxDci _gTXaLY _gqrczQ _cftqkj _bbeIee _dIMaoJ _bVGvky _eAgUIx scid-fmHILy"
        >
          Test
        </h1>
        <h1
          class="_bpFbKm _kQvRKx _biNDPZ _bGjOBv _hBxDci _caMoBK _gTXaLY _GgRDj _cftqkj _bbeIee _dIMaoJ _bVGvky _eAgUIx _jBnBDx scid-fmHILy"
        >
          test string
        </h1>
        <div
          class="_gvjqlg _zFAlf _fcWgon _gAMqEM _jiZlBo _iOSeYB _kNPsCO _kNZnbK _ininOE _fFNDJY _Inna-d _kAjplh _jYdgBR _jZNXFm _jJXwlh _lyLPc _hiyybE _bGUEHj _kROsiw _khlBMi _czVPNi _hYbLMd _jfTurm _kpTYNP scid-PJLV"
        />
      </div>
    `);
  });

  it("should respond to click event", () => {
    const handleClick = jest.fn();

    const { container } = render(
      <PostLayout title="Test" onClick={handleClick}>
        <div>test child</div>
      </PostLayout>
    );
    expect(container.firstChild).not.toBeNull();
    fireEvent.click(container.firstChild as ChildNode, { button: 1 });
    expect(handleClick).toHaveBeenCalled();
  });
});
