import { render } from '@testing-library/react';

import { PageLayout } from '../PageLayout';

describe('components/layouts/PageLayout', () => {
  it('should render with no props', () => {
    const { container } = render(<PageLayout title="Test" />);

    expect(container.firstChild).toMatchInlineSnapshot(`null`);
  });

  it('should render with title', () => {
    const { container } = render(<PageLayout title="Test" />);

    expect(container.firstChild).toMatchInlineSnapshot(`null`);
  });

  it('should render with children', () => {
    const { container } = render(
      <PageLayout title="Test">
        <div>test child</div>
      </PageLayout>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div>
        test child
      </div>
    `);
  });
});
