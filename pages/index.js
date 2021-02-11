import Layout from '../components/layout/Layout';
import { getEmojiList } from '../libs/sheets';

// width: 100%;
// line-height: 1.8rem;
// font-size: 1.2rem;
// color: var(--color-black);
// border-radius: var(--border-radius-md);
// border: 2px solid var(--color-gray-3);
// background: var(--color-gray-2);
// outline: none;

// border-color: rgba(var(--color-brand-rgb),.5);
// background: var(--color-gray-0);

export default function IndexPage({ emojis }) {
	return (
		<Layout>
			<input
				className="w-full text-xl rounded-md border-2 border-solid outline-none bg-gray-200 border-gray-300 text-black focus:bg-gray-50 focus:border-gray-200 p-3"
				placeholder="🔎 Search for an Emoji"
			/>
			{emojis[0].title}
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
