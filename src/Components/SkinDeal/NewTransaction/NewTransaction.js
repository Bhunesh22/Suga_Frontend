import React from "react";
import "./NewTransaction.css";

const NewTransaction = () => {

  return (
    <div className="NTcontainer">
      <div className="NTtop">New Transaction</div>

      <div className="NTmid">
        <p className="NT1st">Create or Join Transaction</p>
        <p className="NT2nd">You want to</p>
        <p className="NTbtn">Create Transaction</p>
        <div className="NTdash"></div>
        <div className="NTinput">
        <p className="NT3rd">Join Transaction</p>
        <input type="text" placeholder="Paste the transaction code here" />
        </div>
        <p className="NTbtn">Join</p>
        </div>

      </div>
  );
};

export default NewTransaction;
