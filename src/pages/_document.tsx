import NextDocument, { DocumentContext, DocumentInitialProps } from 'next/document';
import React from 'react';

import { css } from '@stitches.config';
import { Logger } from 'src/libs/Logger';

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage;

    try {
      let extractedStyles: string[] | undefined;
      ctx.renderPage = () => {
        const { styles, result } = css.getStyles(originalRenderPage);
        extractedStyles = styles;
        return result;
      };

      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}

            {extractedStyles?.map((content, index) => (
              <style key={index} dangerouslySetInnerHTML={{ __html: content }} />
            ))}
          </>
        )
      };
    } catch (e) {
      Logger.log(e);
      return Promise.reject();
    }
  }
}
