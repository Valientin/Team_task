import React from 'react';
import { connect } from 'react-redux';

import './items.css';

import { title, description } from './strings';

export class Items extends React.Component {
	componentDidMount() {
        this.props.userActions.ShowItems()
    }
	render(){
		  return (
            <ul>
                {this.props.items.map((item) => (
                    <Fragment key={item.id}>
                      <li>{item.title}</li>
                    </Fragment>
                ))}
            </ul>
        );
	}
}