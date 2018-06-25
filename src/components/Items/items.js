import React from 'react';
import { connect } from 'react-redux';

import './items.css';

class Items extends React.Component {

    componentDidMount(){
        console.log(this.props)
    }

    showItems = (items) => (
        items ?
            items.map((item, i) => (
                <div key={i}>
                    {item.title}
                </div>
            ))
        : null
        )

	render(){
		  return (
            <div>
                {this.showItems(this.props.items)}
            </div>
        );
	}
}

export default Items;