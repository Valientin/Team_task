import React from 'react';
import Comments from '../Comments'
import './item.scss';
import {Delete} from './strings';


export default class Item extends React.Component{



	onDeleteBtnClick() {
		this.props.deleteItem(this.props.id);
	}
	onTitleClick() {

		this.props.showComments(this.props.id);
	}
	render(){
		return(
		    <div className={this.props.active ? 'items-block__item active' : 'items-block__item'}>
		        <div className="items-block__title" onClick={::this.onTitleClick}>
		            <span>{this.props.name}</span>
		            <span className="items-block__count">{this.props.comments.length}</span>
		        </div>
		        <button className="items-block__delete" onClick={::this.onDeleteBtnClick}>{Delete}</button>
		    </div>

    	)
	}
}

