import React from 'react';
import Emoji from '../ui/emoji/Emoji';

export default function EmojiList({ emojis }) {
	return (
		<div className="text-center pt-5">
			{emojis.map((emoji) => {
				return (
					<div
						key={emoji.emojipedia_slug}
						className="inline-block m-2 text-4xl"
						style={{ width: '100px', height: '100px' }}
					>
						<div className="text-center flex justify-center items-center rounded-md border-gray-500  border-solid border-2 w-full h-full">
							<Emoji symbol={emoji.browser} />
						</div>
					</div>
				);
			})}
		</div>
	);
}
