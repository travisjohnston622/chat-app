import React, { Component } from 'react';
import Message from './components/Message';
import MessageList from './components/MessageList';
import NewRoomForm from './components/NewRoomForm';
import RoomList from './components/RoomList';
import SendMessageForm from './components/SendMessageForm';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className='app'>
				<MessageList />
				<NewRoomForm />
				<RoomList />
				<SendMessageForm />
			</div>
		);
	}
}

export default App;
