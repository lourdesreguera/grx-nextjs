import "../styles/globals.css";

export const metadata = {
  title: "Grx Metal y Madera",
  description: "Artesanía en madera y metal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
