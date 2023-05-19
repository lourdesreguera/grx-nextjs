import Image from "next/image";
import Link from "next/link";

// custom
import emailIcon from "../../public/mailIcon.svg";
import facebookIcon from "../../public/facebookIcon.svg";
import instagramIcon from "../../public/instagramIcon.svg";

// styles
import footer from "../../styles/footer.module.css";
import fonts from "../../styles/fonts.module.css";

const links = [
  { href: "#", img: emailIcon, name: "email@email.com" },
  { href: "#", img: facebookIcon, name: "@facebook" },
  { href: "#", img: instagramIcon, name: "@instagram" },
];

export default function Footer() {
  return (
    <footer className={footer.container}>
      {links.map(({ href, img, name }) => {
        return (
          <Link href={href} className={footer.link}>
            <Image src={img} alt={name}></Image>
            <p className={`${footer.name} ${fonts.socialLinks}`}>{name}</p>
          </Link>
        );
      })}
    </footer>
  );
}
