import React, { useEffect } from "react";

const Table = ({ data, onFetchData }) => {
  useEffect(() => {
    onFetchData();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>title</th>
          <th>price</th>
          <th>brand</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.brand}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
