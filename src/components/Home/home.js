import React from 'react';
import { connect } from 'react-redux';

import './home.css';

export class Home extends React.Component {

	render(){
		return(
			<div className="root-wrapper">
                <div className="left-block">
                    <h1>Dairy App</h1>
                    <h4>Comment with no sense</h4>
                </div>
                <div className="right-block">

                </div>
			</div>
		)
	}
}