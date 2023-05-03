import CTA from "@/components/cta/CTA";
import Footer from "../Footer";
const Layout = ({ children, className }) => {
  return (
    <>
      <div className={className}>
        <main>{children}</main>
        <CTA />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
