import Head from 'next/head';
import React from 'react';
import Header from './header/Header';

export default function Layout(props) {
	return (
		<>
			<Head>
				<title>Emoji List - FrasNym</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<Header />
			<div className="w-screen h-screen flex content-center items-center bg-gray-50">
				<div className="m-auto shadow-lg sm:rounded-3xl p-3 sm:p-20 lg:w-4/5">
					{props.children}
				</div>
			</div>
		</>
	);
}
