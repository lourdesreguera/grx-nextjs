import Image from "next/image";
import Link from "next/link";

// styles
import gallery from "../../styles/gallery.module.css";

// custom
import arrow from "../../public/viewMoreArrow.png";

export default function MasonryItem({src}) {
  return (
    <div className={gallery.container__img}>
      <Image src={src} alt={src} className={gallery.img}></Image>
      <div className={gallery.btn}>
        <Link href="#" className={gallery.btn__img}>
          <Image src={arrow} alt="View More" width={34} height={34}></Image>
        </Link>
      </div>
    </div>
  );
}
