"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main>
      <div className="ambiente"></div>

      <div className="navbar">
        <div className="navbar-item">projects</div>
        <div className="navbar-item">articles</div>
        <div className="navbar-item">contact</div>
      </div>

      <div className="section room" id="home">
        <div className="room-title">Maruthan Thanabalasingam</div>
        <div className="room-location">
          <FontAwesomeIcon icon={faLocationPin} /> Zurich, Switzerland
        </div>
        <div className="room-description">
          Web Developer <br />
          Web Designer <br />
          Version 2023
        </div>
      </div>
      <div className="section projects">
        <div className="projects-grid">
          <div className="projects-grid-item project-grid-item-1"></div>
          <div className="projects-grid-item project-grid-item-2"></div>
          <div className="projects-grid-item project-grid-item-3"></div>
          <div className="projects-grid-item project-grid-item-4"></div>
          <div className="projects-grid-item project-grid-item-5"></div>
          <div className="projects-grid-item project-grid-item-6"></div>
          <div className="projects-grid-item project-grid-item-7"></div>
          <div className="projects-grid-item project-grid-item-8"></div>
          <div className="projects-grid-item project-grid-item-9"></div>
          <div className="projects-grid-item project-grid-item-10"></div>
        </div>
      </div>
      <div className="section blog">
        <div className="blog-grid-box">
          <div className="blog-grid">
            <div className="blog-grid-item">
              <div className="blog-grid-item-type">Blog</div>
              <div className="blog-grid-item-cover"></div>
              <div className="blog-grid-item-info">
                <div className="blog-grid-item-text">
                  <div className="blog-grid-item-title">
                    Writing a solana program
                  </div>
                  <div className="blog-grid-item-description">
                    In this step i'll build a solana program step-by-step.
                  </div>
                </div>
                <div className="blog-grid-item-button">dive in!</div>
              </div>
            </div>
            <div className="blog-grid-item">
              <div className="blog-grid-item-type">Blog</div>
              <div className="blog-grid-item-cover"></div>
              <div className="blog-grid-item-info">
                <div className="blog-grid-item-text">
                  <div className="blog-grid-item-title">
                    Writing a solana program
                  </div>
                  <div className="blog-grid-item-description">
                    In this step i'll build a solana program step-by-step.
                  </div>
                </div>
                <div className="blog-grid-item-button">dive in!</div>
              </div>
            </div>
            <div className="blog-grid-item">
              <div className="blog-grid-item-type">Blog</div>
              <div className="blog-grid-item-cover"></div>
              <div className="blog-grid-item-info">
                <div className="blog-grid-item-text">
                  <div className="blog-grid-item-title">
                    Writing a solana program
                  </div>
                  <div className="blog-grid-item-description">
                    In this step i'll build a solana program step-by-step.
                  </div>
                </div>
                <div className="blog-grid-item-button">dive in!</div>
              </div>
            </div>
            <div className="blog-grid-item">
              <div className="blog-grid-item-type">Blog</div>
              <div className="blog-grid-item-cover"></div>
              <div className="blog-grid-item-info">
                <div className="blog-grid-item-text">
                  <div className="blog-grid-item-title">
                    Writing a solana program
                  </div>
                  <div className="blog-grid-item-description">
                    In this step i'll build a solana program step-by-step.
                  </div>
                </div>
                <div className="blog-grid-item-button">dive in!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
