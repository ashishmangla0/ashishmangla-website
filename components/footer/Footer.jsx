import { Six_Caps } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

import footerStyles from "./footer.module.scss";

const socialMedaiList = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/ashish-mangla1991/",
  },
  {
    title: "Dribbble",
    link: "https://dribbble.com/ashishmangla1991",
  },
  {
    title: "Twitter",
    link: "https://twitter.com/ashishmangla199",
  },
  {
    title: "Github",
    link: "https://github.com/ashishmangla0",
  },
];

const pages = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Contacts",
    link: "/contacts",
  },
];

const Six_Cap = Six_Caps({
  weight: "400",
  subsets: ["latin"],
  fallback: ["sans-sarif"],
});

const FooterList = (props) => {
  const { listClasses, itemClassess, linkClassess, data, ...resprops } = props;
  return (
    <>
      <ul className={listClasses}>
        {data?.map((item) => (
          <li className={itemClassess} key={item.title}>
            <Link
              className={linkClassess}
              href={item.link}
              aria-label={`follow on ${item.title}`}
              {...resprops}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className={`${footerStyles.footer}`}>
      <div className="row">
        <div className="col-lg-12">
          <h5 className={`${Six_Cap.className} ${footerStyles.footer_title}`}>
            Get in Touch
          </h5>
        </div>
        <div className="col-lg-7">
          <div className={footerStyles.footer_toptext}>
            {" "}
            I'm happy to see you here. I am really glad to know, that you had an
            interest in my portfolio. Whether you have a query, question, or
            have something interesting to share, drop us a line
          </div>
          <div className={footerStyles.footer_address}>
            <Image
              src="/address.png"
              alt=""
              width={32}
              height={47}
              className={footerStyles.footer_addressimg}
            />
            <div className={footerStyles.footer_addressdetails}>
              <span>Faridabad-121102, Haryana</span>
              <span>Phone: +918168123203</span>
            </div>
          </div>
        </div>
        <div className={`col-lg-5 ${footerStyles.footer_right}`}>
          <div className="row">
            <div className="col-lg-6">
              <FooterList
                itemClassess={footerStyles.footer_item}
                linkClassess={footerStyles.footer_link}
                listClasses={footerStyles.footer_list}
                data={socialMedaiList}
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
            <div className="col-lg-6">
              <FooterList
                itemClassess={footerStyles.footer_item}
                linkClassess={footerStyles.footer_link}
                listClasses={footerStyles.footer_list}
                data={pages}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <Link
                href={"mailto:ashishmangla1991@gmail.com"}
                target="_blank"
                className={footerStyles.footer_link}
              >
                ashishmangla1991@gmail.com
              </Link>
            </div>
            <div className="col-lg-6">&copy; {year} All Rights Reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
