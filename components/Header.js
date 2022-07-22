import Link from "next/link";
import Nav from "./Nav";

const Header = ({ socials, pageTitle }) => {
  return (
    <header>
      <h1>
        <Link href={"/"}>
          <a>Jilbert</a>
        </Link>
        {pageTitle ? <span className="page_title">{pageTitle}</span> : ""}
      </h1>
      <Nav socials={socials} />
    </header>
  );
};

export default Header;
