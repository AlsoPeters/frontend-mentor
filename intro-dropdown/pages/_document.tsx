import Document, { Html, Head, Main, NextScript } from 'next/document';

import favicon from '../public/favicon.ico';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />

        <body className='font-epilogue'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
