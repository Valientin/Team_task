import React from 'react';

import './home.css';

import Items from '../../containers/items';
import { title, description } from './strings';

export class Home extends React.Component {

	render(){
		return(
			<div className="root-wrapper">
                <div className="left-block">
                    <h1 className="left-block__title">{title}</h1>
                    <h4 className="left-block__description">{description}</h4>
                </div>
                <div className="right-block">
                    <div className="items-wrapper">
                        <Items />
                    </div>
                </div>
			</div>
		)
	}
}