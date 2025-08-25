import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-5 p-5" style={{ alignContent: "center" }}>
          <h1 className="fs-4 mb-3 mt-5">{productName}</h1>
          <p className="mb-3" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
            {productDescription}
          </p>
          <div className="d-flex">
            <a href={learnMore} className="text-decoration-none">
              Learn More<i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-7 ">
          <img src={imageUrl} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
