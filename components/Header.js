import Link from "next/link";

const Header = ({ pageTitle }) => {
  return (
    <header>
      <h1>
        <Link href={"/"}>
          Jilbert
        </Link>
        {pageTitle ? <><hr /><span className="page-title">{pageTitle}</span></> : ""}
      </h1>
    </header>
  );
};

export default Header;
