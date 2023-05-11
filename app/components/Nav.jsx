import Image from "next/image";
import Link from "next/link";
import smallArrow from "../../public/smallArrow.svg";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/contact">Contact</Link>
          <Image
            src={smallArrow}
            width={16}
            height={18}
            alt="small arrow"
          ></Image>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
