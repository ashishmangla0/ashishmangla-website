
import Footer from "../Footer";
const Layout = ({ children,className}) => {
  return (
    <div className={className}>
       <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
