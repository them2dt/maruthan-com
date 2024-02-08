import "./styles/globals.css";
import "./styles/home.css";
/* 
export const metadata = {
  title: "Maruthan.",
  description: "Developer with a passion for design.",
  openGraph: {
    title: "Maruthan.",
    description: "Developer with a passion for design.",
    url: "https://emptea.xyz",
    siteName: "Maruthan.",
    images: [
      {
        url: "https://bafkreidq6mrw6w44nazpaae2rscvypww7yyt3wtqvtnfkptxiprelkb34i.ipfs.nftstorage.link/",
        width: "1000",
        height: "500",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maruthan.",
    description: "Developer with a passion for design.",
    creator: "@EmpteaStudios",
    images: [
      "https://bafkreidq6mrw6w44nazpaae2rscvypww7yyt3wtqvtnfkptxiprelkb34i.ipfs.nftstorage.link/",
    ],
  },
};
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
