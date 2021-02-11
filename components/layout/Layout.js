import Head from 'next/head';
import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

export default function Layout(props) {
	return (
		<main className="bg-purple-200">
			<Head>
				<title>Emoji List - FrasNym</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<link rel="shortcut icon" href="/logo.svg" />
			</Head>
			<Header />
			<div className="w-full flex content-center items-center">
				<div className="m-auto shadow-lg sm:rounded-3xl p-3 mb-3 sm:p-20 lg:w-4/5 bg-gray-100">
					{props.children}
					<Footer />
				</div>
			</div>
		</main>
	);
}
