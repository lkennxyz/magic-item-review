import { connect } from 'react-redux';
import { setReviewList, setCompletedList, selectItem } from '@redux/actions';
import ItemList from '@components/ItemList';

const getSelectedView = (review, completed, filter) => {
  switch(filter) {
    case 'REVIEW':
      return review;
    case 'COMPLETED':
      return completed;
    default:
      throw new Error('Unknown filter: ' + filter);
  }
}

const mapStateToProps = state => ({
  items: getSelectedView(state.reviewList, state.completedList, state.filter),
});
const mapDispatchToProps = dispatch => ({ 
  setReviewList: list => dispatch(setReviewList(list)),
  setCompletedList: list => dispatch(setCompletedList(list)),
  itemSelect: item => dispatch(selectItem(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);