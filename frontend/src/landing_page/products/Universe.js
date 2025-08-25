import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row mt-5 mb-5 text-center">
        <h1 className="fs-4 mb-4">The Zerodha Universe</h1>
        <p className="mb-3" style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-5 mt-3">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "65%" }}
          />
          <p className=" mb-3 p-3 text-muted" style={{ fontSize: "0.85rem" }}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-5 mt-3">
          <img src="media/images/sensibullLogo.svg" style={{ width: "75%" }} />
          <p
            className="mt-2 mb-3 p-3 text-muted"
            style={{ fontSize: "0.85rem" }}
          >
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-5 ">
          <img src="media/images/goldenpiLogo.png" style={{ width: "75%" }} />
          <p className="mb-3 p-3 text-muted" style={{ fontSize: "0.85rem" }}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-5 ">
          <img src="media/images/streakLogo.png" style={{ width: "60%" }} />
          <p className=" p-3 text-muted" style={{ fontSize: "0.85rem" }}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-4 p-5">
          <img src="media/images/smallcaseLogo.png" style={{ width: "75%" }} />
          <p className="  p-3 text-muted" style={{ fontSize: "0.85rem" }}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs..
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/dittoLogo.png" style={{ width: "50%" }} />
          <p className="  p-3 text-muted" style={{ fontSize: "0.85rem" }}>
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{
            width: "20%",
            margin: "auto",
          }}
        >
          Signup for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
