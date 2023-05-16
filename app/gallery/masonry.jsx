'use client'
import Masonry from "react-masonry-css";
import gallery from '../../styles/gallery.module.css'

export default function MasonryLayout({ children }) {
  const breakpointColumnsObj = {
    default: 4,
    1100: 5,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={gallery.grid}
      columnClassName="my-masonry-grid_column"
    >
      {children}
    </Masonry>
  );
}
