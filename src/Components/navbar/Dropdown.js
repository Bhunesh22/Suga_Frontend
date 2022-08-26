import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import './dropdown.css'

const Main = styled("div")`
  font-family: sans-serif;
`;

const DropDownContainer = styled("div")`
  width: 144px;
  height: auto;
  margin: 0 auto;
  cursor: pointer;
  z-index: 10;
`;

// const DropDownHeader = styled("div")`
// width: 63px;
// height: 63px;

// `;

const DropDownListContainer = styled("div")`
background: #101638;

box-shadow: 0px 0px 4px #FFFFFF;
`;

const DropDownList = styled("ul")`
 
  padding-left: 0px;
  padding-right: 19px;
  padding-top: 12px;
  padding-bottom: 12px;
  background: #101638;
  box-sizing: border-box;
  color: #3faffa;
  right: 0px;
  
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 9px;
  background: #101638;
  text-decoration: none;
  font-family: 'Gilroy-SemiBold', sans-serif;
  font-size: 20px;
  line-height: 23px;
  text-align: right;
  color: #FFFFFF;
`;



export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const onOptionClicked = value => () => {
    setIsOpen(false); 
  };

  // let navigate = useNavigate();

  // useEffect(() => {
  //  handleLogout()
  // }, [])
  

  const handleLogout = ()=>{
    localStorage.removeItem('token');
  }

  return (
    <Main>
      <DropDownContainer>
        {/* <DropDownHeader onClick={toggling}><img className="iconimage" src="/images/profile icon.png"/></DropDownHeader> */}
        {/* {isOpen && ( */}
          <DropDownListContainer>
            <DropDownList>
              <ListItem><NavLink to='/comingSoon' onClick={onOptionClicked} className={({isActive}) => isActive ? "navActive": "navlink" }>View Profile</NavLink></ListItem>

              <ListItem><NavLink to='/comingSoon' onClick={onOptionClicked} className={({isActive}) => isActive ? "navActive": "navlink" }>Settings</NavLink></ListItem>

              <ListItem><NavLink to='/wallet' onClick={onOptionClicked} className={({isActive}) => isActive ? "navActive": "navlink" }>Wallet</NavLink></ListItem>

              <ListItem><NavLink to="/login" onClick={handleLogout}  className={({isActive}) => isActive ? "navActive": "navlink" }>Logout</NavLink></ListItem>

              <ListItem><NavLink to='/comingSoon' onClick={onOptionClicked} className={({isActive}) => isActive ? "navActive": "navlink" }>Help Center</NavLink></ListItem>

            </DropDownList>
          </DropDownListContainer>
      </DropDownContainer>
    </Main>
  );
}


// position: absolute;
// right: 48px;
// top: 140px;

// position: absolute;
// left: 1309px;
// top: 48px;