import Layout from '../components/layout/Layout';
import { getEmojiList } from '../libs/sheets';

export default function IndexPage({ emojis }) {
	return (
		<Layout>
			{emojis[0].title}
			input
		</Layout>
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
