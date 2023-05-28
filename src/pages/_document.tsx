import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<title>Jarrod Malkovic</title>
					<link
						href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<Main />
				<NextScript />
			</Html>
		);
	}
}

export default MyDocument;
