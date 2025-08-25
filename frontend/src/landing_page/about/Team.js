import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container">
      <div className="row border-top">
        <h1 className="fs-3 text-center mt-5">People</h1>
      </div>
      <div
        className="row p-5 text-muted "
        style={{ fontSize: "1.1rem", lineHeight: "1.4" }}
      >
        <div className="col-5 p-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "80%" }}
          />
          <h4 className="fs-5 mb-3 mt-3">Nithin Kamath</h4>
          <h6 className="fs-6">Founder & CEO</h6>
        </div>
        <div className="col-7 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <Link className="text-decoration-none" to="/">
              Homepage
            </Link>{" "}
            /{" "}
            <a className="text-decoration-none" href="/">
              TradingQnA
            </a>{" "}
            /{" "}
            <a className="text-decoration-none" href="/">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
