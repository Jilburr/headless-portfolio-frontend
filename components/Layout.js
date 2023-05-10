import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, socials, pageTitle }) => (
  <>
    <Header pageTitle={pageTitle} />
    <main>{children}</main>
    <Footer socials={socials} />

  </>
);

export default Layout;
