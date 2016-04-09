import React from 'react';

class ContactsList extends React.Component {
	render() {
		
		return (
			<ul>
				<li>
					{this.props.contacts.name} 
					<h4>{this.props.contacts.phone}</h4>
				</li>
			</ul>
		)
	}
}

export default ContactsList;