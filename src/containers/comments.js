import { connect } from 'react-redux';
import Comments from '../components/Comments'
import {addComment} from '../app/actions/comments'

function mapDispatchToProps(dispatch){
    return {
        addComment: (comment, id) => dispatch(addComment(comment, id))
    }
}

const mapStateToProps = (state) => {
    return{
        activeComments: state.items.activeComments,
        comments: state.items.comments
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);