import React from "react";

function Hero() {
  return (
    <div className="container text-center my-5 p-5 border-bottom">
      <h1 className="fs-2 mb-3">Zerodha Products</h1>
      <h3 className="fs-5 mb-3 text-muted">
        Sleek, modern, and intuitive trading platforms
      </h3>
      <p className="mb-5" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
        Check out our{" "}
        <a href="#" className="text-decoration-none">
          investment offerings →
        </a>
      </p>
    </div>
  );
}

export default Hero;
