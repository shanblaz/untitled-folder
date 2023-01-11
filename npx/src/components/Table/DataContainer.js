import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/action";
import Table from "./Table";
import Pagination from "./Pagination";
import Filter from "./Filter";

const DataContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const data = useSelector((state) => state.data.products);
  const totalPages = useSelector((state) => state.data.total);
  const dispatch = useDispatch();

  const handlePageChange = async (page) => {
    await setCurrentPage(page);
    dispatch(getProducts(10, page, ""));
  };

  const handleFilterChange = (filter) => {
    dispatch(getProducts(10, currentPage, filter));
  };

  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      <Table
        data={data}
        onFetchData={() => dispatch(getProducts(10, currentPage, ""))}
      />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default DataContainer;
