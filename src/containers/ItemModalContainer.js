import { connect } from 'react-redux';
import { setVisibility } from '@redux/actions';
import ItemModal from '@components/ItemModal';

const mapStateToProps = state => ({
  item: state.item,
  visible: state.visible,
});

const mapDispatchToProps = dispatch => ({
  closeModal: visible => dispatch(setVisibility(visible)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemModal);