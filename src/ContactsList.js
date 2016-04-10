import React from 'react';
import Contact from './Contact';

class ContactsList extends React.Component {
	constructor() {
		super();
		this.state = {
			search: 'Level Up'
		};
	}

	updateSearch(event) {
		// console.log(event.target.value);
		this.setState({search: event.target.value});
	}

	render() {
		
		return (
			<div>
				<input type="text" 
					value={this.state.search} 
					onChange={this.updateSearch.bind(this)} />
				<ul>
					{this.props.contacts.map( (contact) => {
						return <Contact contact={contact} key={contact.id} />
					})}
				</ul>
			</div>
		)
	}
}

export default ContactsList;