import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <div>
        <h1>React Meetups</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
