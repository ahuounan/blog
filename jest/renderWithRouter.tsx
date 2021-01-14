import { render, RenderResult } from "@testing-library/react";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import { NextRouter } from "next/router";

type DefaultParams = Parameters<typeof render>;
type RenderUI = DefaultParams[0];
type RenderOptions = DefaultParams[1];

function createRouter() {
  const basePath = "/";
  let path = "/";

  const router: NextRouter = ({
    push: jest.fn((url: string) => {
      path = url;
      return Promise.resolve(true);
    }),
    pathname: path,
    replace: jest.fn((url: string) => {
      path = url;
      return Promise.resolve(true);
    }),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn(() => Promise.resolve()),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn()
    },
    isFallback: false,
    route: path,
    asPath: path,
    basePath,
    query: {}
  } as unknown) as NextRouter;

  return router;
}

window.scrollTo = jest.fn();
export const router = createRouter();

export function renderWithRouter(ui: RenderUI, options?: RenderOptions): RenderResult {
  const wrapper = ({ children }) => (
    <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
  );
  return render(ui, { wrapper, ...options });
}
