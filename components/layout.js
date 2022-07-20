import Nav from "./nav";

const Layout = ({ children, socials, seo }) => (
  <>
    <Nav socials={socials} />
    {children}
  </>
);

export default Layout;
