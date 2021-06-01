import { FC, useCallback, useState } from "react";

export const Search: FC<{
  handleAdd(
    e: React.KeyboardEvent<HTMLInputElement>,
    searchCityName: string
  ): void;
  errorMessage: string;
}> = ({ handleAdd, errorMessage }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  const onAddSerch = useCallback(
    async (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.code === "Enter") {
        await handleAdd(e, searchValue);
        setSearchValue("")
      }
    },
    [searchValue, handleAdd]
  );
  return (
    <>
      <input
        type="text"
        onChange={handleInputChange}
        onKeyUp={onAddSerch}
        value={searchValue}
        className="form-control mb-2"
        placeholder="Search city"
        id="search"
      />
      <span className="text-danger">{errorMessage}</span>
    </>
  );
};
