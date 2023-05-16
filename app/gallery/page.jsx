// styles
import Image from "next/image";
import gallery from "../../styles/fonts.module.css";
import Nav from "../components/Nav";
import MasonryLayout from "./masonry";
import img1 from "../../public/photos/1.png";
import img2 from "../../public/photos/2.png";


const items = [
  { id: 1, name: img1 },
  { id: 2, name: img2 },
];

export default function Gallery() {
  return (
    <>
      <Nav />
      <main>
        <h2 className={gallery.heading__gallery}>Últimos trabajos</h2>
        <MasonryLayout>
          {items.map(({id, name}) => <Image src={name} alt={id}></Image>)}
        </MasonryLayout>
      </main>
    </>
  );
}
