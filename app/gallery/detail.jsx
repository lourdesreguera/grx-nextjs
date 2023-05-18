import Image from "next/image";
import Link from "next/link";

// styles
import fonts from "../../styles/fonts.module.css";
import gallery from "../../styles/detailGallery.module.css";

// custom
import img6 from "../../public/photos/6.png";
import MasonryItem from "./masonryItem";


export default function Detail() {
  return (
    <section className={gallery.container}>
      <MasonryItem src={img6} />
      <p className={`${fonts.subheading} ${fonts.subheading__detailGallery}`}>Nombre de la obra</p>
    </section>
  );
}
