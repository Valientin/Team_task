import React, {Fragment, Component} from 'react';


import './comments.scss';


export default class Comments extends Component{

	componentWillReceiveProps(nextProps){
		console.log(nextProps)
	}

	showComments = (activeComments) => (
		activeComments ?
			activeComments.comments.map((item, i) => (
	            <div key={i} className="comments-block__item">
					<div style={{background: item.logo}} className="comments-block__logo"></div>
					<span className="comments-block__text">{item.text}</span>
				</div>
	        ))
        : null
	)

	render(){
		const activeComments = this.props.activeComments;
		return (
			<div className = "comments-wrapper">
                <h1 className="сomments-title">Comments #{activeComments ? activeComments.id : null}</h1>
                <div className="comments-block">
                    {this.showComments(this.props.activeComments)}
                </div>
				<div className="items-add__block">
    
                </div>
            </div>
		)
	}
}

