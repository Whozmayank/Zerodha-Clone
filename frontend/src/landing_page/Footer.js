import React from "react";

function Footer() {
  return (
    <footer className="bg-light border-top ">
      <div className="container  mt-5">
        <div className="row mt-5 ">
          <div className="col">
            <img
              className="mb-3 "
              src="media/images/logo.svg"
              alt="logo"
              style={{ width: "55%" }}
            />
            <p className="text-muted" style={{ fontSize: "0.85rem" }}>
              © 2010 - 2025, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
          </div>
          <div className="col ">
            <h3 className="fs-4 mb-3">Company</h3>
            <div className="d-flex flex-column gap-2">
              <a href="" className="text-decoration-none text-muted ">
                About
              </a>

              <a href="" className=" text-decoration-none text-muted ">
                Careers
              </a>

              <a href="" className="text-decoration-none  text-muted">
                Philosophy
              </a>

              <a href="" className="text-decoration-none text-muted">
                Press & media
              </a>

              <a href="" className="text-decoration-none text-muted">
                Careers
              </a>

              <a href="" className="text-decoration-none text-muted">
                Zerodha Cares (CSR)
              </a>

              <a href="" className="text-decoration-none text-muted">
                Zerodha.tech
              </a>

              <a href="" className="text-decoration-none text-muted">
                Open source
              </a>
            </div>
          </div>
          <div className="col">
            <h3 className="fs-4 mb-3">Support</h3>
            <div className="d-flex flex-column gap-2">
              <a href="" className="text-decoration-none text-muted">
                Contact us
              </a>
              <a href="" className="text-decoration-none text-muted">
                Support portal
              </a>
              <a href="" className="text-decoration-none text-muted">
                How to file a complaint?
              </a>
              <a href="" className="text-decoration-none text-muted">
                FAQs
              </a>
              <a href="" className="text-decoration-none text-muted">
                Status of your complaints
              </a>
              <a href="" className="text-decoration-none text-muted">
                Bulletin
              </a>
              <a href="" className="text-decoration-none text-muted">
                Circular
              </a>
              <a href="" className="text-decoration-none text-muted">
                Z-Connect blog
              </a>
              <a href="" className="text-decoration-none text-muted">
                Downloads
              </a>
            </div>
          </div>
          <div className="col">
            <h3 className="fs-4 mb-3">Account</h3>
            <div className="d-flex flex-column gap-2">
              <a href="" className="text-decoration-none text-muted">
                Open demat account
              </a>
              <a href="" className="text-decoration-none text-muted">
                Minor demat account
              </a>
              <a href="" className="text-decoration-none text-muted">
                NRI demat account
              </a>
              <a href="" className="text-decoration-none text-muted">
                Commodity
              </a>
              <a href="" className="text-decoration-none text-muted">
                Dematerialisation
              </a>
              <a href="" className="text-decoration-none text-muted">
                Fund transfer
              </a>
              <a href="" className="text-decoration-none text-muted">
                MTF
              </a>
              <a href="" className="text-decoration-none text-muted">
                Referral program
              </a>
            </div>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "0.75rem" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
          <div
            className="d-flex flex-wrap justify-content-center gap-3 mt-3 mb-3"
            style={{ fontSize: "0.8rem", fontWeight: "500", opacity: "0.7" }}
          >
            <a href="" className="text-decoration-none text-muted">
              NSE
            </a>
            <a href="" className="text-decoration-none text-muted">
              BSE
            </a>
            <a href="" className="text-decoration-none text-muted">
              MCX
            </a>
            <a href="" className="text-decoration-none text-muted">
              Terms & conditions
            </a>
            <a href="" className="text-decoration-none text-muted">
              Policies & procedures
            </a>
            <a href="" className="text-decoration-none text-muted">
              Privacy policy
            </a>
            <a href="" className="text-decoration-none text-muted">
              Disclosure
            </a>
            <a href="" className="text-decoration-none text-muted">
              For investor's attention
            </a>
            <a href="" className="text-decoration-none text-muted">
              Investor charter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
