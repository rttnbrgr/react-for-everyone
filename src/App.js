import React from 'react';
import ContactsList from './ContactsList';

let contacts = [{
	id: 1,
	name: 'Scott Mescudi',
	phone: '555 555 5555'
}, {
	id: 2,
	name: 'Aubrey Graham',
	phone: '555 111 5555'
}, {
	id: 3,
	name: 'Kendrick Duckworth',
	phone: '555 222 5555'
}, {
	id: 4,
	name: 'Sean Carter',
	phone: '555 333 5555'
}, {
	id: 5,
	name: 'Calvin Brodus',
	phone: '555 444 5555'
}]

class App extends React.Component {
	render() {
		
		// console.log( JSON.stringify(contacts, , '/n') );
		console.log( contacts[1] );
		
		return (
			<div>
				<h1>Contacts List</h1>
				<ContactsList contacts={this.props.contacts} />
			</div>
		)
	}
}

React.render(<App contacts={contacts} />, document.getElementById('app'));