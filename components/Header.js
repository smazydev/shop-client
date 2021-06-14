import Link from "next/link";

export default ({ currentUser }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">Tik-it</a>
      </Link>
      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">
          {currentUser ? "Sign Out" : "Signin/up"}
        </ul>
      </div>
    </nav>
  );
};