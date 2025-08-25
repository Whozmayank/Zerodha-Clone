import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container ">
      <div className="row mt-5 mb-5">
        <div className="col-7 p-3">
          <img src={imageUrl} />
        </div>
        <div className="col-5 p-5 mt-3">
          <h1 className="fs-4 mb-3 mt-3">{productName}</h1>
          <p className="mb-3" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
            {productDescription}
          </p>
          <div className="d-flex">
            <a href={tryDemo} className="text-decoration-none me-5">
              Try Demo<i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href={learnMore} className="text-decoration-none">
              Learn More<i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mt-4 ">
            <a href={googlePlay} className="me-2">
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
