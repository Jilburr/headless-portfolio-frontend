import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, socials, seo, pageTitle }) => (
  <>
    <Header socials={socials} pageTitle={pageTitle} />
    <main>{children}</main>
  </>
);

export default Layout;
