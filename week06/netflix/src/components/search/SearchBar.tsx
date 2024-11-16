"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import * as style from "@/styles/search/searchBar.css";
import searchIcon from "/public/svgs/search/searchbar.svg";
import cancelIcon from "/public/svgs/search/cancel_search.svg";
import { useSearchStore } from "@/utils/search/useStore";

export const SearchBar = () => {
  const { searchText, setSearch } = useSearchStore();

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    [setSearch],
  );

  const cancelSearch = useCallback(() => {
    setSearch("");
  }, [setSearch]);

  return (
    <div className={style.container}>
      <Image className={style.icon} src={searchIcon} alt="검색" />
      <input
        value={searchText}
        onChange={handleSearch}
        type="text"
        className={style.searchInput}
        placeholder="Search for a show,movie,genre, e.t.c"
      />
      <Image
        style={{ cursor: "pointer" }}
        className={style.icon}
        src={cancelIcon}
        alt="검색취소"
        onClick={cancelSearch}
      />
    </div>
  );
};
