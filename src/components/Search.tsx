import { SearchModalContainer } from "../styledComponents/Search.styled";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AllDrinksData from "../datas/allDrinks.json";
import { ConfigAllDrinks } from "../interfaces";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

interface Props {
  setSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Search: FC<Props> = ({ setSearchActive }) => {
  const [searched, setSearched] = useState<ConfigAllDrinks[]>([]);
  const [input, setInput] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!input.trim()) return setSearched([]);

    const searchedDrinks: Array<ConfigAllDrinks> = AllDrinksData.filter(
      (el: ConfigAllDrinks) =>
        el.title.toLowerCase().includes(input.toLowerCase())
    );

    setSearched(searchedDrinks);
  }, [input]);

  const searchHandler = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => setInput(e.target.value as string);

  // searched item route function
  const routeItem = (idx: number): void => {
    setSearchActive((c) => !c);
    navigate(`/preview/${idx}`);
  };

  return (
    <SearchModalContainer>
      <div className="form-wrapper">
        <form>
          <Box style={{ minWidth: "35%" }}>
            <TextField
              onChange={searchHandler}
              id="filled-basic"
              label="search"
              variant="filled"
              autoFocus
            />
          </Box>
          <button type="button" onClick={() => setSearchActive((c) => !c)}>
            <CloseIcon />
          </button>
        </form>
      </div>
      <div className="searched-container">
        {input.trim() ? (
          <ul>
            <p className="searched-container-title">Products</p>
            {searched.length > 0 ? (
              <>
                {searched.map((item) => {
                  return (
                    <div
                      onClick={() => routeItem(item.id)}
                      key={item.id}
                      className="searched-item"
                    >
                      <img src={item.url} alt={`${item.title}`} />
                      <p className="searched-item-title">{item.title}</p>
                    </div>
                  );
                })}
              </>
            ) : (
              <p className="no-result">No results found...</p>
            )}
          </ul>
        ) : null}
      </div>
    </SearchModalContainer>
  );
};

export default Search;
