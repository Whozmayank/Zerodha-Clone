import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row mt-5 text-center">
        <h1 className="fs-2 mb-3 mt-5">Charges</h1>
        <h2 className="fs-4 text-muted mb-5">List of all charges and taxes</h2>
        <div className="col-4 mt-5 p-3">
          <img
            src="media/images/pricing0.svg"
            className="p-3 mt-5"
            style={{ width: "80%", height: "auto" }}
          />
          <h2 className="fs-3 mb-4">Free equity delivery</h2>
          <p style={{ lineHeight: "1.7", fontSize: "1.1rem" }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 mt-5 p-3">
          <img
            src="media/images/intradayTrades.svg"
            className="p-3 mt-5"
            style={{ width: "80%", height: "auto" }}
          />
          <h2 className="fs-3 mb-4">Intraday and F&O trades</h2>
          <p style={{ lineHeight: "1.7", fontSize: "1.1rem" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 mt-5 p-3">
          <img
            src="media/images/pricing0.svg"
            className="p-3 mt-5"
            style={{ width: "80%", height: "auto" }}
          />
          <h2 className="fs-3 mb-4">Free direct MF</h2>
          <p style={{ lineHeight: "1.7", fontSize: "1.1rem" }}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
