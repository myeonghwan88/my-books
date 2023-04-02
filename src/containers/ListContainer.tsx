import List from "../components/List";
import { useSelector } from "react-redux";
import { BookType, RootState } from "../types";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getBooks as getBooksSagaStart } from "../redux/modules/books";

export default function ListContainer() {
  const books = useSelector<RootState, BookType[] | null>(
    (state) => state.books.books
  );
  const loading = useSelector<RootState, boolean>(
    (state) => state.books.loading
  );

  const dispatch = useDispatch();
  const getBooks = useCallback(() => {
    dispatch(getBooksSagaStart());
  }, [dispatch]);
  return <List books={books} loading={loading} getBooks={getBooks} />;
}
