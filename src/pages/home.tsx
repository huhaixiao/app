import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link> |{" "}
        <Link to="/collection">Collection</Link>
      </nav>
    </>
  );
};
