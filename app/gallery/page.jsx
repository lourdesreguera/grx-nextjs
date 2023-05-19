// custom
import MasonryLayout from "./components/masonry";
import Nav from "../components/Nav";
import items1 from "./components/items1";
import items2 from "./components/items2";

// styles
import fonts from "../../styles/fonts.module.css";
import gallery from "../../styles/gallery.module.css";
import Detail from "./components/detail";
import Footer from "../components/Footer";

export default function Gallery() {
  return (
    <>
      <Nav />
      <main className={gallery.container}>
        <h2 className={fonts.heading__gallery}>Últimos trabajos</h2>
        <MasonryLayout items={items1} />
        <Detail />
        <MasonryLayout items={items2} />
      </main>
      <Footer />
    </>
  );
}
