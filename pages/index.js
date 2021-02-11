import Head from 'next/head';
import { getEmojiList } from '../libs/sheets';

export default function IndexPage({ emojis }) {
	return (
		<>
			<Head>
				<title>Title - FrasNym</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			{emojis[0].title}
		</>
	);
}

export async function getStaticProps(context) {
	const emojis = await getEmojiList();

	return {
		props: {
			emojis: emojis.slice(1, emojis.length), // remove sheet header
		},
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every second
		revalidate: 1, // In seconds
	};
}
