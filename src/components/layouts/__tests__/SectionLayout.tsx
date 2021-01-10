import { render } from '@testing-library/react';

import { SectionLayout } from '../SectionLayout';

describe('components/layouts/SectionLayout', () => {
  it('should render with title', () => {
    const { container } = render(<SectionLayout title="test" />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      ._eCjziG {
        padding-top: var(--space-1);
      }

      ._biNDPZ {
        padding-right: 0;
      }

      ._gvDHwS {
        padding-bottom: var(--space-1);
      }

      ._bpFbKm {
        padding-left: 0;
      }

      ._bpzGvB {
        margin-top: var(--space-1);
      }

      ._jBsEwG {
        margin-right: 0;
      }

      ._iQYLqR {
        margin-bottom: var(--space-1);
      }

      ._haSFSd {
        margin-left: 0;
      }

      ._JcngB {
        background-color: transparent;
      }

      ._cwBzYf {
        text-align: left;
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

      ._gULBu {
        background-image: linear-gradient(180deg, rgba(61,61,61,0.1) 0%, rgba(0,0,0,1) 50%, rgba(61,61,61,0.1) 100%);
      }

      ._jBnBDx {
        margin-left: 0px;
      }

      ._jtlYiP {
        width: 100%;
      }

      ._jefWVX {
        height: 1px;
      }

      ._kpTYNP {
        position: absolute;
      }

      ._gIRPyO {
        top: 2rem;
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

      ._hdIsSp {
        font-size: var(--fontSizes-3);
      }

      ._gTXaLY {
        position: relative;
      }

      ._hBxDci {
        z-index: 2;
      }

      ._iomPtK {
        background-image: linear-gradient(90deg, rgba(251, 245, 245, 1) 90%, rgba(251, 245, 245, 0.8) 95%, rgba(251,245,245,0) 100%);
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

      ._eAgUIx {
        margin-bottom: 0px;
      }

      <section
        class="_hBxDci _cwBzYf _JcngB _gTXaLY _jtlYiP _haSFSd _iQYLqR _jBsEwG _bpzGvB _bpFbKm _gvDHwS _biNDPZ _eCjziG scid-PJLV"
      >
        <h1
          class="_eAgUIx _flLrYC _ikSLYP _dpsWWy _jKvetE _cTdvuC _jGjIJW _iomPtK _hBxDci _gTXaLY _hdIsSp _cftqkj _bbeIee _dIMaoJ _bVGvky scid-fmHILy"
        >
          test
        </h1>
        <div
          class="_gIRPyO _kpTYNP _jefWVX _jtlYiP _dIMaoJ _bVGvky _eAgUIx _jBnBDx _gULBu _jwHRMi _kWMOdy _oojmp _dOZjFp scid-blmtcy"
          data-orientation="horizontal"
          data-radix-separator=""
          role="none"
        />
      </section>
    `);
  });

  it('should render with children', () => {
    const { container } = render(
      <SectionLayout title="Test">
        <div>test child</div>
      </SectionLayout>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      ._eCjziG {
        padding-top: var(--space-1);
      }

      ._biNDPZ {
        padding-right: 0;
      }

      ._gvDHwS {
        padding-bottom: var(--space-1);
      }

      ._bpFbKm {
        padding-left: 0;
      }

      ._bpzGvB {
        margin-top: var(--space-1);
      }

      ._jBsEwG {
        margin-right: 0;
      }

      ._iQYLqR {
        margin-bottom: var(--space-1);
      }

      ._haSFSd {
        margin-left: 0;
      }

      ._JcngB {
        background-color: transparent;
      }

      ._cwBzYf {
        text-align: left;
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

      ._gULBu {
        background-image: linear-gradient(180deg, rgba(61,61,61,0.1) 0%, rgba(0,0,0,1) 50%, rgba(61,61,61,0.1) 100%);
      }

      ._jBnBDx {
        margin-left: 0px;
      }

      ._jtlYiP {
        width: 100%;
      }

      ._jefWVX {
        height: 1px;
      }

      ._kpTYNP {
        position: absolute;
      }

      ._gIRPyO {
        top: 2rem;
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

      ._hdIsSp {
        font-size: var(--fontSizes-3);
      }

      ._gTXaLY {
        position: relative;
      }

      ._hBxDci {
        z-index: 2;
      }

      ._iomPtK {
        background-image: linear-gradient(90deg, rgba(251, 245, 245, 1) 90%, rgba(251, 245, 245, 0.8) 95%, rgba(251,245,245,0) 100%);
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

      ._eAgUIx {
        margin-bottom: 0px;
      }

      <section
        class="_hBxDci _cwBzYf _JcngB _gTXaLY _jtlYiP _haSFSd _iQYLqR _jBsEwG _bpzGvB _bpFbKm _gvDHwS _biNDPZ _eCjziG scid-PJLV"
      >
        <h1
          class="_eAgUIx _flLrYC _ikSLYP _dpsWWy _jKvetE _cTdvuC _jGjIJW _iomPtK _hBxDci _gTXaLY _hdIsSp _cftqkj _bbeIee _dIMaoJ _bVGvky scid-fmHILy"
        >
          Test
        </h1>
        <div
          class="_gIRPyO _kpTYNP _jefWVX _jtlYiP _dIMaoJ _bVGvky _eAgUIx _jBnBDx _gULBu _jwHRMi _kWMOdy _oojmp _dOZjFp scid-blmtcy"
          data-orientation="horizontal"
          data-radix-separator=""
          role="none"
        />
        <div>
          test child
        </div>
      </section>
    `);
  });
});
