import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head />
				<body className="min-h-screen transition-all duration-200 bg-white dark:bg-slate-900">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
