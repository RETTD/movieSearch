import SearchEngine from "./SearchEngine";
import ListComponent from "./ListComponent";
import { useState } from "react";
import { fetchMovies } from "../components/Api";
import { IconButton } from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const Body = () => {
  const [movie, setMovie] = useState([]);
  const [text, setText] = useState("");
  const [results, setResult] = useState("");
  const [page, setPage] = useState("0");
  const [visible, setVisible] = useState(undefined);
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClickNextPage = (e) => {
    const numberPage = parseFloat(page) + 1;
    getMovies(numberPage);
  };

  const handleClickPreviousPage = (e) => {
    const numberPage = parseFloat(page) - 1;
    getMovies(numberPage);
  };

  const getMovies = async (numberPage) => {
    const result = await fetchMovies(text, numberPage);
    setMovie(result.Search);
    setResult(result);
    if (numberPage != undefined) {
      setPage(numberPage);
    }
    if (result.totalResults > 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  function TableActions() {
    return (
      <div style={{ marginLeft: 20, flexShrink: 0 }}>
        <IconButton
          onClick={handleClickPreviousPage}
          disabled={page == 0}
          aria-label="previous page"
        >
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton
          onClick={handleClickNextPage}
          disabled={page >= Math.ceil(results.totalResults / 10) - 1}
          aria-label="next page"
        >
          <KeyboardArrowRight />
        </IconButton>
      </div>
    );
  }
  return (
    <>
      <SearchEngine
        handleChange={handleChange}
        getMovies={getMovies}
        text={text}
      />
      {visible == false ? (
        <div
          style={{ marginTop: 50, marginLeft: 15, fontSize: 25, color: "red" }}
        >
          Nie znaleziono pasujących filmów.
        </div>
      ) : (
        ""
      )}
      {visible == true ? (
        <ListComponent
          page={page}
          TableActions={TableActions}
          movies={movie}
          results={results}
          getMovies={getMovies}
        />
      ) : (
        ""
      )}
    </>
  );
};
export default Body;
