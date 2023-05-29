// styles
import fonts from "../../../styles/fonts.module.css";
import gallery from "../../../styles/detailGallery.module.css";

// custom
import MasonryItem from "./masonryItem";

export default function Detail() {
  return (
    <section className={gallery.container}>
      <div className={gallery.container__item1}>
        <MasonryItem src={'https://res.cloudinary.com/louregbri/image/upload/v1685371188/Grx/6_phjbug.png'} />
      </div>
      <p
        className={`${fonts.subheading} ${fonts.subheading__detailGallery} ${gallery.container__item2}`}
      >
        Nombre de la obra
      </p>
    </section>
  );
}
