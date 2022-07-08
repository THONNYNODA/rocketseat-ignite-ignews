import Document, { Html, Main, Head, NextScript } from "next/document";

export default class MyyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Poppins:wght@400;600&family=Roboto:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
  <link rel="shortcut icon" href="/favicon.png" type="image/png" />
  <title>Ignews</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
