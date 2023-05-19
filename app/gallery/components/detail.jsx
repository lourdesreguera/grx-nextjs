// styles
import fonts from "../../../styles/fonts.module.css";
import gallery from "../../../styles/detailGallery.module.css";

// custom
import img6 from "../../../public/photos/6.png";
import MasonryItem from "./masonryItem";

export default function Detail() {
  return (
    <section className={gallery.container}>
      <div className={gallery.container__item1}>
        <MasonryItem src={img6} />
      </div>
      <p
        className={`${fonts.subheading} ${fonts.subheading__detailGallery} ${gallery.container__item2}`}
      >
        Nombre de la obra
      </p>
    </section>
  );
}
