import { connect } from 'react-redux';
import { setList } from '@redux/actions';
import ItemList from '@components/ItemList';

const mapStateToProps = state => ({
  items: state.itemList,
});
const mapDispatchToProps = dispatch => ({ 
  setItemList: list => dispatch(setList(list)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);