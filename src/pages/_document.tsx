import Document, { Html, Head, Main, NextScript } from 'next/document'
let GA_TRACKING_ID = 'UA-134274140-1'
if (process.env.NODE_ENV !== 'production') GA_TRACKING_ID = ''
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}');
      `,
            }}
          />
        </>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
