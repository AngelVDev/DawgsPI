import React from "react";

const Pagination = ({ dogs, dogsPerPage, pagination }) => {
  let pageNum = [];
  for (let i = 1; i <= Math.ceil(dogs?.length / dogsPerPage); i++) {
    pageNum.push(i);
  }
  if (dogs?.length <= 8 || !dogs) {
    return (pageNum = null);
  }
  return (
    <div className="pagesHolder">
      <ul style={{ margin: "0", display: "contents" }}>
        {pageNum &&
          pageNum.map((number) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a key={number} className="page" onClick={() => pagination(number)}>
              {number}
            </a>
          ))}
      </ul>
    </div>
  );
};

export default Pagination;
