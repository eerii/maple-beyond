import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

/*
	DOCUMENT
	Here we can add the stuff that would typically fall in index.html
	- Favicon
	- TODO: Metadata for search engines
	- (Matomo Analytics don't work here, we moved them to a separate plugin in _app.tsx)
*/

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
      	const initialProps = await Document.getInitialProps(ctx)
      	return { ...initialProps }
    }
  
    render() {
		return (
			<Html>
			<Head>
				<link rel="icon" href="/favicon.ico"/>
				<meta name="MOOSE" content="Time Banking App"/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
			</Html>
		)
    }
}
  
export default MyDocument