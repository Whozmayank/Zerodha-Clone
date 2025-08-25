import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="support-hero">
      <div className="p-5" id="support-wrapper">
        <h1 className="fs-5">Support Portal</h1>
        <a href="#" className="">
          Track Ticket
        </a>
      </div>
      <div className="row p-5 ">
        <div className="col-7 p-4 mb-5 support-search">
          <h1 className="fs-4 mb-4" style={{ lineHeight: "1.6" }}>
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            className="form-control mb-3"
            style={{ height: "30%" }}
            placeholder="Eg: How do I open my account, How do I activate F&O..."
          />
          <a href="#" className="">
            Track account opening
          </a>
          <a href="#" className="">
            Track segment activation
          </a>
          <a href="#" className="">
            Intraday margins
          </a>
          <a href="#" className="">
            Kite user manual
          </a>
        </div>
        <div className="col-5 ">
          <h1 className="fs-4 mx-5">Featured</h1>
          <ol className="list-unstyled mx-5 ">
            <li className="mb-2">
              <a href="#" className="">
                1. Current Takeover Bid Status
              </a>
            </li>
            <li>
              <a href="#" className="">
                2. Latest Intraday Margin Policy
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
