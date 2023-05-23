import items1 from "../components/items1";
import items2 from "../components/items2";

// styles
import fonts from "../../../styles/fonts.module.css";
import productStyle from "../../../styles/product.module.css";

export default function Product({ params }) {
  const items = [...items1, ...items2];

  const product = items.find((item) => {
    return item.id == params.id;
  });
  const { id, src, title, shortDescription, longDescription } = product;

  return (
    <section
      className={productStyle.container}
      style={{ backgroundImage: `url(${src.src})` }}
    >
      <div className={productStyle.container__headings}>
        <h1 className={fonts.heading__product}>{title}</h1>
        <h2 className={fonts.subheading__product}>{shortDescription}</h2>
      </div>
      <div className={productStyle.container__description}>
        <p className={fonts.description__product}>{longDescription}</p>
      </div>
    </section>
  );
}
