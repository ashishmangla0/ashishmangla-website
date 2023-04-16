
import Footer from "../Footer";
const Layout = ({ children,className}) => {
    console.log( children);
  return (
    <div className={className}>
       <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
