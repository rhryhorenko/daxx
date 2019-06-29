import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSingleProduct } from '../actions';
import SingleProduct from '../components/Singlepost';

const mapStateToProps = state => ({
  product: state.activeProduct
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getSingleProduct
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProduct);
