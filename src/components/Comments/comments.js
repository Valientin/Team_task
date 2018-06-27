import React, {Fragment, Component} from 'react';


import './style.scss';


export default class Comments extends Component{
	render(){
		const comments = this.props.comments;
		return(   
			<div className = "comments-wrapper">
                {
                	Array.isArray(comments)  ?
	                	comments.map((comment) => (
	                       <div className="comment-block__text">
				            <span>{comment.text}</span>
				        </div>
	               		 ))
               		 :null
               	}	
            </div>
    	)
	}
}

