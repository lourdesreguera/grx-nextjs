import Image from "next/image";
import Link from "next/link";

// custom
import smallArrow from "../../public/smallArrow.svg";

// styles
import fonts from "../../styles/fonts.module.css";
import navStyles from "../../styles/nav.module.css";

export default function Nav() {
  return (
    <nav>
      <ul className={navStyles.nav}>
        <li className={navStyles.home}>
          <Link href="/" className={fonts.nav}>
            GRX metal y madera
          </Link>
        </li>
        <li className={navStyles.contact}>
          <Link href="/contact" className={fonts.nav}>
            Contact
          </Link>
          <Image
            src={smallArrow}
            width={16}
            height={18}
            alt="small arrow"
            className={navStyles.contact__icon}
          ></Image>
        </li>
        <li>
          <Link href="/about" className={fonts.nav}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
