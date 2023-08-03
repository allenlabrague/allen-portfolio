import React from "react";
import { Pagination } from "@nextui-org/react";

const PaginationPage = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center gap-3">
      {pages.map((page, index) => {
        return (
          <h3
            onClick={() => setCurrentPage(page)}
            key={index}
            className={`p-3 px-5 cursor-pointer rounded-xl text-white bg-[#27272A] transition-all ${
              page === currentPage ? "active" : ""
            }`}
          >
            {page}
          </h3>
        );
      })}
    </div>
  );
};

export default PaginationPage;
