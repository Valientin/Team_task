import React, {Fragment, Component} from 'react';


import './comments.scss';


export default class Comments extends Component{

	constructor(props){
		super(props);
		this.state = {
			textareaValue: ''
		}
	}

	componentWillReceiveProps(next){
		console.log(next)
	}

	showComments = (activeComments) => (
		activeComments && (activeComments.comments.length > 0) ?
			activeComments.comments.map((item, i) => (
	            <div key={i} className="comments-block__item">
					<div style={{background: item.logo}} className="comments-block__logo"></div>
					<span className="comments-block__text">{item.text}</span>
				</div>
	        ))
        : <span className="comments-none__text">No comments</span>
	)

	handleTextArea(e){
		this.setState({
			textareaValue: e.target.value
		})
	}

	textAreaOnKeyPress(e){
		if(e.ctrlKey && (e.key === 'Enter')){
			this.props.addComment(this.state.textareaValue, this.props.activeComments.keyId)
			this.setState({
				textareaValue: ''
			})
		}
	}

	render(){
		const activeComments = this.props.activeComments;
		return (
			this.props.comments ?
				<div className = "comments-wrapper">
	                <h1 className="сomments-title">Comments #{activeComments ? activeComments.id : null}</h1>
	                <div className={(activeComments.comments.length > 0) ? 'comments-block': 'comments-none'}>
	                    {this.showComments(activeComments)}
	                </div>
					<div className="comments-add__block">
						<div className="comments-block__logo" style={{background: '#eee'}}></div>
						<textarea className="comments-block__textarea" value = {this.state.textareaValue}  onKeyDown={(e) => this.textAreaOnKeyPress(e)} onChange={(e) => this.handleTextArea(e)}></textarea>
	                </div>
	            </div>
            :null
		)
	}
}

