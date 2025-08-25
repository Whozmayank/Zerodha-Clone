import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row mt-5 p-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="#" className="text-decoration-none">
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
          <ul
            className="text-muted mb-5 mt-4"
            style={{ lineHeight: "2.2", fontSize: "1.2rem", textAlign: "left" }}
          >
            <li className="mb-2 fs-6">
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges + transaction charges)
            </li>
            <li className="mb-2 fs-6">
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </li>
            <li className="mb-2 fs-6">
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
              for subsequent requests.
            </li>
            <li className="mb-2 fs-6">
              For a non-PIS account, 0.5% or ₹100 per executed order for equity
              (whichever is lower).
            </li>
            <li className="mb-2 fs-6">
              For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li className="mb-2 fs-6">
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="#" className="text-decoration-none">
            <h3 className="fs-5 mb-3">List of Charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
