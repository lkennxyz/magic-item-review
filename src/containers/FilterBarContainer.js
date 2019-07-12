import { connect } from 'react-redux';
import { setFilter, refresh } from '@redux/actions';
import FilterBar from '@components/FilterBar';

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter)),
  refresh: () => dispatch(refresh()),
});

export default connect(null, mapDispatchToProps)(FilterBar);