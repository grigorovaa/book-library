import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <nav>
      <ul className="navigation">
        <li className="navigation-category">Books</li>
        <Link to="/readingnow" className="nav-link">
          <li className="navigation-item">
            <img src="./icons/bookmark.svg" alt="bookmark" width="16px" />
            Reading now
          </li>
        </Link>
        <Link to="/bookstore" className="nav-link">
          <li className="navigation-item">
            <img src="./icons/book-alt.svg" alt="book" width="16px" />
            Book Store
          </li>
        </Link>
      </ul>
      <ul className="navigation">
        <li className="navigation-category">Library</li>
        <Link to="/mybooks" className="nav-link">
          <li className="navigation-item">
            <img src="./icons/books.svg" alt="books" width="16px" />
            My Books
          </li>
        </Link>
        <Link to="/wanttoread" className="nav-link">
          <li className="navigation-item">
            <img src="./icons/arrow-right.svg" alt="arrow" width="16px" />
            Want to Read
          </li>
        </Link>
        <Link to="/finished" className="nav-link">
          <li className="navigation-item">
            <img src="./icons/check.svg" alt="check" width="16px" />
            Finished
          </li>
        </Link>
      </ul>
    </nav>
  );
}
