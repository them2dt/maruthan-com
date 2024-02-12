import React from "react";
import "./style.css";

export default function index() {
  return (
    <div className="showroom fps" id="showroom">
      <div className="column left">
        <div className="block block-1">
          <div className="phone">
            <div className="display"></div>
          </div>
        </div>
      </div>
      <div className="column right">
        <div className="block block-2">
          <div className="content">
            <div className="font-h3">Sporting Labs</div>
            <div className="font-text">
              The idea was simple. A fantasy league platform for Formula 1
              enthusiasts. We wanted to create a community that allowed members
              to connect with other passionate individuals and compete against
              each other in various challenges, all while supporting the sport
              they love.
              <br />
              <br />
              Sporting Labs got 2'800 downloads and won two hackathons.
              <br />
              <br />
              Get the app here: xNFT.gg
              <br />
              Learn more: sporting.gg
              <br />
              Repository: github.com
            </div>
          </div>
        </div>
        <div className="block block-3">
          <div className="content">
            <div className="font-h3">Keymount</div>
            <div className="font-text">
              This was the first mobile application i planned out and developed
              solo.
              <br />
              <br />
              An passwort manager, with built-in functions, such as
              password rating & password generation. The passwords would be
              stored offline on the device, so that you wouldnt have to trust a
              third-party cloud.
              <br />
              <br />
              I built this app in 2022.
              <br />
              <br />
              Get the app here:
              https://play.google.com/store/apps/details?id=app.emptea.keymount&pcampaignid=web_share
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
