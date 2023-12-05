import "./styles/globals.css";
import "./styles/navbar.css";
import "./styles/theme-selector.css";
import "./styles/room.css";
import "./styles/projects.css";
import "./styles/blog.css";
import "./styles/socials.css";

export const metadata = {
  title: "maruthan.com",
  description: "Develop, design, create.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>{children}</body>
    </html>
  );
}
