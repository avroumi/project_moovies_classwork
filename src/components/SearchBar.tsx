import { useEffect, useRef } from "react";

interface SearchProps {
  search: string;
  setSearch: (search: string) => void;
}

const SearchBar = ({ search, setSearch }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    searchRef.current?.focus();
  }, []);
  return (
    <>
      <input
        value={search}
        ref={searchRef}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search movies ..."
      />
    </>
  );
};

export default SearchBar;
