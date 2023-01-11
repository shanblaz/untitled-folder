import React from "react";
import { connect } from "react-redux";
import DataContainer from "./Table/DataContainer";

function Products({ products, getAllProducts }) {
  return (
    <div>
      <DataContainer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
