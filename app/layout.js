import "./globals.css";

export const metadata = {
  title: "MARUTHAN.",
  description: "WEB - MOBILE - BLOCKCHAIN.",
  openGraph: {
    title: "MARUTHAN.",
    description: "WEB - MOBILE - BLOCKCHAIN.",
    url: "https://MARUTHAN.com",
    siteName: "MARUTHAN.",
    images: [
      {
        url: "https://bafkreih5wyrydfkusimvtutrk7hopqiejj73n7w4tjcovz6jipkj5tju4y.ipfs.nftstorage.link/",
        width: "1000",
        height: "500",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MARUTHAN.",
    description: "WEB - MOBILE - BLOCKCHAIN.",
    creator: "@THEM2DT",
    images: ["https://bafkreih5wyrydfkusimvtutrk7hopqiejj73n7w4tjcovz6jipkj5tju4y.ipfs.nftstorage.link/"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
