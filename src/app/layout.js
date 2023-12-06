import "./styles/globals.css";
import "./styles/navbar.css";
import "./styles/theme-selector.css";
import "./styles/room.css";
import "./styles/projects.css";
import "./styles/blog.css";
import "./styles/socials.css";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Maruthan.com</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@THEM2DT" />
        <meta name="twitter:title" content="Maruthan.com" />
        <meta name="twitter:description" content="I create." />
        <meta
          name="twitter:image"
          content="https://bafkreiga27mlvbr4lc6luxnqhxyqw7ksfh4hc6s2hshbnjj5zgisnfahn4.ipfs.nftstorage.link/"
        />

        <meta property="og:title" content="Maruthan.com" />
        <meta property="og:description" content="I create." />
        <meta
          property="og:image"
          content="https://bafkreiga27mlvbr4lc6luxnqhxyqw7ksfh4hc6s2hshbnjj5zgisnfahn4.ipfs.nftstorage.link/"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
