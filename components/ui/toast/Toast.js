import React from 'react';
import Emoji from '../emoji/Emoji';

export default function Toast({ message, symbol, type }) {
	let bgColor = '';
	let borderColor = '';
	let textColor = '';

	switch (type) {
		case 'success':
			bgColor = 'bg-green-500';
			borderColor = 'border-green-700';
			textColor = 'text-green-500';
			break;

		default:
			break;
	}
	return (
		<div
			className={`flex items-center ${bgColor} border-l-4 ${borderColor} py-2 px-3 shadow-md mb-2 fixed top-0 right-0 mt-5 mr-5 animate-ping`}
		>
			<div className={`${textColor} rounded-full bg-white mr-3`}>
				<Emoji symbol={symbol} />
			</div>
			<div className="text-white max-w-xs mr-5">{message}</div>
		</div>
	);
}
