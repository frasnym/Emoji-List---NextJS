import React, { useState } from 'react';
import Emoji from '../ui/emoji/Emoji';
import Toast from '../ui/toast/Toast';

export default function EmojiList({ emojis }) {
	const [toast, setToast] = useState(null);

	const copyToClipboard = ({ copyText }) => {
		// programatically write data to the clipboard
		navigator.clipboard.writeText(copyText);
		setToast({
			message: `Copied ${copyText} to clipboard`,
			type: 'success',
			symbol: '✔',
		});
		setTimeout(() => setToast(null), 900);
	};

	return (
		<>
			{toast ? <Toast {...toast} /> : null}
			<div className="text-center pt-5">
				{emojis.map((emoji) => {
					return (
						<div
							key={emoji.emojipedia_slug}
							className="inline-block m-2 text-4xl hover: cursor-pointer"
							style={{ width: '100px', height: '100px' }}
							onClick={() =>
								copyToClipboard({ copyText: emoji.browser })
							}
						>
							<div className="text-center flex justify-center items-center rounded-md border-gray-500  border-solid border-2 w-full h-full">
								<Emoji symbol={emoji.browser} />
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
