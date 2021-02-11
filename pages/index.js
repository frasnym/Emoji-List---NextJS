import EmojiList from '../components/emoji-list/EmojiList';
import Layout from '../components/layout/Layout';
import { getEmojiList } from '../libs/sheets';

export default function IndexPage({ emojis }) {
	return (
		<Layout>
			<input
				className="w-full text-xl rounded-md border-2 border-solid outline-none bg-gray-200 border-gray-300 text-black focus:bg-gray-50 focus:border-gray-200 p-3"
				placeholder="🔎 Search for an Emoji"
			/>
			<EmojiList emojis={emojis} />
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
