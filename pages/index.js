import { useState } from 'react';
import EmojiList from '../components/emoji-list/EmojiList';
import Layout from '../components/layout/Layout';
import Emoji from '../components/ui/emoji/Emoji';
import { getEmojiList } from '../libs/sheets';

export default function IndexPage({ emojis }) {
	const [search, setSearch] = useState('');
	const [updatedEmojis, setUpdatedEmojis] = useState(emojis);

	const searchHandler = (event) => {
		const searchedText = event.target.value.toLowerCase();
		setSearch(searchedText);

		if (searchedText.length >= 3) {
			const newEmojis = emojis.filter((e) =>
				(e.short_name + e.descriptions)
					.toLowerCase()
					.includes(searchedText)
			);
			setUpdatedEmojis(newEmojis);
		} else {
			setUpdatedEmojis(emojis);
		}
	};

	return (
		<Layout>
			<p className="text-2xl font-bold mb-2">
				Hi <Emoji symbol="👋" />, this page provides a list of the
				Unicode emoji characters and sequences.
				<br />
				There is <text className="text-green-500">
					{emojis.length}
				</text>{' '}
				emojis available on{' '}
				<text className="text-green-400">v13.1</text>{' '}
				<Emoji symbol="🎉" />
			</p>
			<p className="text-xl font-bold text-gray-500 mb-5">
				You can <b>Select</b> and <b>Copy</b> Emoji by clicking it!
			</p>
			<input
				className="w-full text-xl rounded-md border-2 border-solid outline-none bg-gray-200 border-gray-300 text-black focus:bg-gray-50 focus:border-gray-200 p-3"
				placeholder="🔎 Search for an Emoji"
				value={search}
				onChange={searchHandler}
			/>
			{search.length < 3 && search.length !== 0 ? (
				<span className="text-red-400 font-bold mt-3 inline-block">
					Please enter at least 3 characters to search...
				</span>
			) : null}
			{search.length >= 3 ? (
				<div className="bg-green-400 text-green-100 font-bold mt-3 p-1 inline-block rounded">
					{updatedEmojis.length} Found
				</div>
			) : null}
			<EmojiList emojis={updatedEmojis} />
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
