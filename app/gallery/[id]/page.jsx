import items1 from "../components/items1";
import items2 from "../components/items2";

// styles
import fonts from "../../../styles/fonts.module.css";
import productStyle from "../../../styles/product.module.css";
import Link from "next/link";
import Image from "next/image";

// custom
import arrow from '../../../public/smallArrow.svg'
import darKArrow from '../../../public/smallArrowDark.svg'

export default function Product({ params }) {
  const items = [...items1, ...items2];

  const product = items.find((item) => {
    return item.id == params.id;
  });
  const { id, srcBigImage, title, shortDescription, longDescription, whiteBcg } = product;
  
  return (
    <section
      className={productStyle.container}
      style={{ backgroundImage: `url(${srcBigImage})` }}
      transition-style="in:custom:circle-swoop"
    >
    <Link href='/gallery'><Image src={!whiteBcg ? arrow : darKArrow} width={40} className={productStyle.arrow } alt="small arrow"/></Link>
      <div className={productStyle.container__headings}>
        <h1 className={!whiteBcg ? fonts.heading__product : fonts.heading__product__dark}>{title}</h1>
        <h2 className={!whiteBcg ? fonts.subheading__product : fonts.subheading__product__dark}>{shortDescription}</h2>
      </div>
      <div className={productStyle.container__description}>
        <p className={!whiteBcg ? fonts.description__product : fonts.description__product__dark}>{longDescription}</p>
      </div>
    </section>
  );
}
