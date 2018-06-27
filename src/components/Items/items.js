import React from 'react';
import { connect } from 'react-redux';

import FormFields from '../FormFields';
import Item from '../Item';

import './items.scss';
import {title, addNew} from './strings';

class Items extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            postError: false,
            formData: {
                name: {
                    element: 'input',
                    value: '',
                    config: {
                        name: 'name_input',
                        className: 'items-add__input',
                        type: 'text',
                        placeholder: 'Type name here...'
                    },
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    validationMessage: ''
                }
            }
        }
    }

    addItem = () => {
        let dataToSubmit = {};
        let formIsValid = true;
        let nextId = Math.random().toString(36).substr(2, 9);

        for(let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value;
            dataToSubmit.comments = [];
            dataToSubmit.active = false;
            formIsValid = this.state.formData[key].valid && formIsValid;
        }

        if(formIsValid){
            const newFormData = {...this.state.formData}
            for(let key in this.state.formData){
                newFormData[key].value = '';
                newFormData[key].valid = false;
            }
            this.setState({
                postError: false,
                formData: newFormData
            })

            this.props.addItem(dataToSubmit, nextId);

        } else {
            this.setState({
                postError: true
            })
        }
    }

    updateForm = (elem, content = '') => {
        const newFormData = {...this.state.formData}
        const newElem = {...newFormData[elem.id]}

        if(content === ''){
            newElem.value = elem.e.target.value;
        } else {
            newElem.value = content;
        }

        if(elem.blur){
            let validData = this.validate(newElem);
            newElem.valid = validData[0];
            newElem.validationMessage = validData[1]
        }

        newElem.touched = elem.blur;
        newFormData[elem.id] = newElem;

        this.setState({
            formData: newFormData
        })
    }
    
    validate = (elem) => {
        let error = [true,''];

        if(elem.validation.required){
            const valid = elem.value.trim() !== '';
            const message = `${!valid ? 'This field is required': ''}`;
            error = !valid ? [valid, message] : error
        }

        return error;
   }


    showItems = (items, itemsById) => {
        return Array.isArray(items)  ?
            items.map((item, i) => (
                <Item 
                    key={item} 
                    {...itemsById[item]} 
                    id = {item} 
                    deleteItem = {(id) => this.props.deleteItem(id)} 
                    showComments = {(id) => this.props.showComments(id)} 
                    setActive = {(id) => this.props.setActive(id)} 
                />
            ))
        : null
    }

	render(){
		  return (
            <div className="items-wrapper">
                <h1 className="items-title">{title}</h1>
                <div className="items-add__block">
                    <FormFields
                        id={'name'}
                        formData={this.state.formData.name}
                        change={(elem) => this.updateForm(elem)}
                    />
                    <button 
                        onClick={() => this.addItem()} 
                        className={this.state.postError ? 'items-add__button error' : 'items-add__button'}
                    >
                        {addNew}
                    </button>
                </div>
                <div className="items-block">
                    {this.showItems(this.props.items, this.props.itemsById)}
                </div>
            </div>
        );
	}
}

export default Items;