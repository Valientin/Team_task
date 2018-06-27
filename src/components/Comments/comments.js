import React, {Fragment, Component} from 'react';


import './comments.scss';


export default class Comments extends Component{

	constructor(props){
		super(props);
		this.state = {
			textareaValue: ''
		}
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

	handleTextArea(e){
		this.setState({
			textareaValue: e.target.value
		})
	}

	textAreaOnKeyPress(e){
		if(e.ctrlKey && (e.key === 'Enter')){
			console.log(this.state.textareaValue)
			this.setState({
				textareaValue: ''
			})
		}
	}

	render(){
		const activeComments = this.props.activeComments;
		return (
			<div className = "comments-wrapper">
                <h1 className="сomments-title">Comments #{activeComments ? activeComments.id : null}</h1>
                <div className="comments-block">
                    {this.showComments(this.props.activeComments)}
                </div>
				<div className="comments-add__block">
					<div className="comments-block__logo" style={{background: '#eee'}}></div>
					<textarea onKeyDown={(e) => this.textAreaOnKeyPress(e)} onChange={(e) => this.handleTextArea(e)}></textarea>
                </div>
            </div>
		)
	}
}

