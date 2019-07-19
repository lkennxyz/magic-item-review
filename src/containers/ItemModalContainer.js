import { connect } from 'react-redux';
import { setVisibility, setType, saveItem } from '@redux/actions';
import ItemModal from '@components/ItemModal';

const mapStateToProps = state => ({
  item: state.item,
  visible: state.visible,
  type: state.itemType,
});

const mapDispatchToProps = dispatch => ({
  closeModal: visible => dispatch(setVisibility(visible)),
  setType: itemType => dispatch(setType(itemType)),
  saveItem: (item, id) => dispatch(saveItem(item, id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemModal);