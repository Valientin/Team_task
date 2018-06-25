import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';

function mapDispatchToProps(dispatch){
    return {
        
    }
}


function mapStateToProps(state){
	return {
        items: state.items
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);