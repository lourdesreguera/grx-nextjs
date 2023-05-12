import Image from "next/image";
import Link from "next/link";

// custom
import Nav from "./components/Nav";
import Miguel from "../public/miguel.png";
import bigArrow from "../public/bigArrow.svg";

// styles
import home from "../styles/page.module.css";
import fonts from "../styles/fonts.module.css";

export default function Home() {
  return (
    <div className={home.home}>
      <Nav />
      <div className={home.container}>
        <h1 className={`${fonts.heading__home} ${home.heading}`}>GRX</h1>
        <Image src={Miguel} width={216} height={323} alt="Miguel Muñoz Gordo" className={home.img} />
        <h2 className={`${fonts.subheading__home} ${home.subheading}`}>
          Metal y madera
        </h2>
      </div>
      <div className={home.container__more}>
        <Link href='/gallery'>
          <Image src={bigArrow} width={22} height={28} />
        </Link>
        <p className={`${fonts.nav} ${home.works}`}>Últimos trabajos</p>
      </div>
    </div>
  );
}
