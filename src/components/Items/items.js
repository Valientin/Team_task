import React from 'react';
import { connect } from 'react-redux';

import './items.css';

import { title, description } from './strings';

export class Items extends React.Component {

	render(){
		return(
			<div className="root-wrapper">
                <div className="left-block">
                    <h1>{title}</h1>
                    <h4>{description}</h4>
                </div>
                <div className="right-block">

                </div>
			</div>
		)
	}
}