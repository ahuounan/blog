import { ParsedUrlQuery } from "querystring";

import { GetServerSidePropsContext } from "next";

import { renderWithRouter } from "jest/renderWithRouter";
import MOCK_POSTS from "localDatabase/mockPosts.json";

import BlogPost, { getServerSideProps, Params } from "../[id]";

jest.mock("@controllers/posts");

describe("components/pages/blog/[id]", () => {
  describe("BlogPost", () => {
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

  describe("getServerSideProps", () => {
    it("should return the posts generated by PostsController", async () => {
      const mockPost = Object.values(MOCK_POSTS)[0];
      const props = await getServerSideProps({
        params: { id: mockPost.id }
      } as GetServerSidePropsContext<Params & ParsedUrlQuery>);

      expect(props).toEqual({
        props: { id: mockPost.id, post: mockPost }
      });
    });
  });
});
