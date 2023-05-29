import Image from "next/image";
import Link from "next/link";

// styles
import gallery from "../../../styles/gallery.module.css";

// custom
import arrow from "../../../public/viewMoreArrow.png";

export default function MasonryItem({src, id}) {
  return (
    <div className={gallery.container__img}>
      <Image src={src} width={500} height={500} alt={src} className={gallery.img}></Image>
      <div className={gallery.btn}>
        <Link href={`/gallery/${id}`} className={gallery.btn__img}>
          <Image src={arrow} alt="View More" width={34} height={34}></Image>
        </Link>
      </div>
    </div>
  );
}
