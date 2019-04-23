import React from "react";
import Document, {
    Head,
    Main,
    NextScript
  } from "next/document";
  
  class PageDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(
        ctx
      );
      return { ...initialProps };
    }
  
    render() {
      return (
        <html lang="tr">
          <Head />
          <body className="elyface_ssr_body">
            <Main />
            <NextScript />
          </body>
        </html>
      );
    }
  }
  
  export default PageDocument;
  