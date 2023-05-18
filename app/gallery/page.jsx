import MasonryLayout from "./masonry";

// custom
import Nav from "../components/Nav";

// styles
import fonts from "../../styles/fonts.module.css";
import gallery from "../../styles/gallery.module.css";
import Detail from "./detail";

export default function Gallery() {
  return (
    <>
      <Nav />
      <main className={gallery.container}>
        <h2 className={fonts.heading__gallery}>Últimos trabajos</h2>
        <MasonryLayout />
        <Detail />
      </main>
    </>
  );
}
