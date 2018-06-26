import React from 'react';


import './style.scss';


export default class Comments extends React.Component{
	render(){
		const comments = this.props.comments;
		console.log(comments)
		return(   
			<div>
	            {comments}
	        </div>
    	)
	}
}

