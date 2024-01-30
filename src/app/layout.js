import "./styles/globals.css";
import "./styles/home.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Emptea</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Maruthan" />
        <meta name="twitter:title" content="Maruthan" />
        <meta name="twitter:description" content="I create." />
        <meta
          name="twitter:image"
          content="https://bafkreiga27mlvbr4lc6luxnqhxyqw7ksfh4hc6s2hshbnjj5zgisnfahn4.ipfs.nftstorage.link/"
        />

        <meta property="og:title" content="Maruthan" />
        <meta property="og:description" content="I create." />
        <meta
          property="og:image"
          content="https://bafkreiga27mlvbr4lc6luxnqhxyqw7ksfh4hc6s2hshbnjj5zgisnfahn4.ipfs.nftstorage.link/"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </head>
      <body>{children}</body>
    </html>
  );
}
