import React from 'react';
import Emoji from '../../ui/emoji/Emoji';

export default function Header() {
	return (
		<header className="bg-purple-500 rounded-lg m-1 flex content-center items-center">
			<div className="m-auto flex content-center items-center">
				<img src="/logo.svg" alt="Logo" className="inline py-3" />
				<div className="text-3xl font-bold ml-5 text-yellow-400">
					<span>Emoji</span>
					<Emoji className="mx-2" symbol="😀" />
					<span>List</span>
				</div>
			</div>
		</header>
	);
}
