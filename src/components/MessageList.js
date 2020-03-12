import React, { Component } from 'react';

const TEST_DATA = [
	{
		senderId: 'johndoe',
		text: 'How are you jane?',
	},
	{
		senderId: 'janedoe',
		text: 'I am well! How about you?',
	},
	{
		senderId: 'johndoe',
		text: 'I am doing well too!',
	},
];
class MessageList extends Component {
	render() {
		return (
			<div className='message-list'>
				{TEST_DATA.map((message, index) => {
					return (
						<div>
							{message.text}
							{message.senderId}
						</div>
					);
				})}
			</div>
		);
	}
}

export default MessageList;
