import React, { useState, useContext } from "react";
import Logo from "./suga.png";
import Profile from "./profile.png";
import "./SideNavigation.css";
import { BsCreditCard } from "react-icons/bs";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TbSettings } from "react-icons/tb";
import { MdPermPhoneMsg } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import NewTransaction from "../Transaction/NewTransaction";
import Transaction from "../Transaction/Transaction";
import Joincode from "../Transaction/Joincode";
import JoinTransaction from "../Transaction/JoinTransaction";
import Payment from "../Transaction/Payment";
import GlobalContext from "../../../Context/globalContext";
import CommingSoon from "../Transaction/CommingSoon";
import { useNavigate } from "react-router-dom";

const SideNavigation = (props) => {
  const [drop, setDrop] = useState(true);

  const navigate = useNavigate();

  const { show, showPage, user } = useContext(GlobalContext);

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // console.log(show, "show");

  return (
    <div className="SNcontainer">
      <div className="SNnavigation">
        <div className="SNtop">
          <div className="SNlogo">
            <img onClick={() => navigate("/")} src={Logo} alt="" />
          </div>

          <div className="SNdrop" onClick={() => setDrop(!drop)}>
            <div style={{ display: "flex", gap: "20px" }}>
              <p className="SNicon">
                {" "}
                <BsCreditCard
                  style={{ width: "20px", height: "20px" }}
                  fill="#0D0916"
                />
              </p>
              <p className="SNtext" style={{ color: "#0D0916" }}>
                Transactions
              </p>
            </div>
            <p>
              <MdKeyboardArrowUp
                fill="#0D0916"
                size={20}
                style={{ display: drop ? "none" : "block", paddingTop: "2px" }}
              />
              <MdKeyboardArrowDown
                fill="#0D0916"
                size={20}
                style={{ display: drop ? "block" : "none", paddingTop: "2px" }}
              />
            </p>
          </div>

          <div
            style={{
              height: drop ? "70px" : "0px",
              transition: "height 0.5s",
              overflow: "hidden",
              marginTop: "10px",
            }}
          >
            <div
              className="SNnew"
              onClick={() => showPage("NT")}
              style={{
                color:
                  show == "TT" || show == "JT" || show == "JC" || show == "NT"
                    ? "#FFC700"
                    : "white",
              }}
            >
              New Transactions
            </div>

            <div
              className="SNnew"
              onClick={() => showPage("MT")}
              style={{ color: show == "MT" ? "#FFC700" : "white" }}
            >
              My Transactions
            </div>
          </div>

          <div className="SNoptions" onClick={() => showPage("PP")}>
            <p className="SNicon">
              <CgProfile style={{ width: "20px", height: "20px" }} color={show == "PP" ? "#FFC700" : "white"} />
            </p>
            <p className="SNtext" style={{ color: show == "PP" ? "#FFC700" : "white" }}>Profile</p>
          </div>

          <div className="SNoptions" onClick={() => showPage("CU")}>
            <p className="SNicon">
              <MdPermPhoneMsg style={{ width: "20px", height: "20px" }}  color={show == "CU" ? "#FFC700" : "white"}/>
            </p>
            <p className="SNtext" style={{ color: show == "CU" ? "#FFC700" : "white" }}>Contact Us</p>
          </div>

          <div className="SNoptions" onClick={() => showPage("SS")}>
            <p className="SNicon">
              <TbSettings style={{ width: "20px", height: "20px" }} color={show == "SS" ? "#FFC700" : "white"} />
            </p>
            <p className="SNtext" style={{ color: show == "SS" ? "#FFC700" : "white" }}>Settings</p>
          </div>
        </div>

        <div className="SNbtm">
          <div className="SNoptions">
            <p className="SNicon">
              <MdOutlineLogout style={{ width: "20px", height: "20px" }} />
            </p>
            <p className="SNtext" onClick={logOut}>
              Logout
            </p>
          </div>

          <div className="SNprofile">
            <img src={Profile} alt="" />
            <div className="SNnames">
              <p>{user === undefined ? "" : user.name}</p>
              <p className="SNmail">{user === undefined ? "" : user.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="SNpages">
        <div style={{ display: show == "NT" ? "block" : "none" }}>
          <NewTransaction />
        </div>

        <div style={{ display: show == "TT" ? "block" : "none" }}>
          <Transaction />
        </div>

        <div style={{ display: show == "JC" ? "block" : "none" }}>
          <Joincode />
        </div>

        <div style={{ display: show == "JT" ? "block" : "none" }}>
          <JoinTransaction />
        </div>

        <div
          style={{
            display:
              show == "MT" || show == "SS" || show == "PP" || show == "CU"
                ? "block"
                : "none",
          }}
        >
          {/* <CommingSoon /> */}
          <Payment/>
        </div>
      </div>
    </div>
  );
};

export default SideNavigation;
