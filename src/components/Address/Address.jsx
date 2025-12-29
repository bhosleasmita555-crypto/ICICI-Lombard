import { useState } from "react";
import "./Address.css";
import data from "../../Data/Address.json";

export default function Address() {

  const [open, setOpen] = useState(false);

  return (
    <footer className="footerMain">

      <div className="footerWrapper">

        {/* LEFT SIDE */}
        <div className="footerLeft">
          <h3>{data.companyInfo.companyName}</h3>

          <p>{data.companyInfo.address}</p>
          <p>{data.companyInfo.registrationNo}</p>
          <p>Email: {data.companyInfo.email}</p>
          <p>Fax: {data.companyInfo.fax}</p>

          <div className="footerSocial">
            {data.socialLinks.map((social, i) => (
              <a href={social.url} key={i}>
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="footerRight">

          {/* ABOUT COMPANY */}
          <div className="footerAbout">
            {data.aboutCompany.map((info, index) => (
              <p key={index}>{info}</p>
            ))}
          </div>

          {/* GROUP COMPANIES DROPDOWN */}
          <div className="groupCompaniesBox">

            <div
              className="dropHeader"
              onClick={() => setOpen(!open)}
            >
              Group Companies
              <span className={open ? "arrowRotate" : "arrow"}>▼</span>
            </div>

            {open && (
              <div className="dropList">
                {data.groupCompanies.map((item, index) => (
                  <p key={index} className="dropItem">{item}</p>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>

     

    </footer>
  );
}
