import React from 'react';
import { connect } from 'react-redux';
import Items from '../components/Items'
import {addItem, deleteItem} from '../app/actions/items'

function mapDispatchToProps(dispatch){
    return {
        addItem: (item, id) => dispatch(addItem(item, id)),
        deleteItem: (id) => dispatch(deleteItem(id))
    }
}


const mapStateToProps = (state) => {
    return{
        items: state.items.items,
        itemsById: state.items.itemsById
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);