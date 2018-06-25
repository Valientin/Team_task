import React from 'react';
import { connect } from 'react-redux';
import Items from '../components/Items'
import * as items from '../app/actions/items'

function mapDispatchToProps(dispatch){
    return {
        
    }
}


const mapStateToProps = (state) => {
    return{
		items: state.items.itemsById
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);