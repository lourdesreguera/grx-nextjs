// styles
import gallery from "../../../styles/gallery.module.css";
import fonts from "../../../styles/fonts.module.css";

// custom
import MasonryItem from "./masonryItem";

export default function MasonryLayout({ items }) {
  return (
    <section className={gallery.grid}>
      {items.map(({ id, src, grid }) => (
        <div className={gallery[grid]} key={id}>
          <MasonryItem src={src} id={id} />
          <p className={fonts.description__gallery}>Descripción breve del producto</p>
        </div>
      ))}
    </section>
  );
}
