import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.16.13/antd.min.css"
            integrity="sha512-mSAGUPNillU+e5/c6zYp3o5FnPsZ5g2Q1QeixjHL2QMOuV7YN2bI5C5QNHSflxg9UZ7iKj97/+H6M+cWciMDyA=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
