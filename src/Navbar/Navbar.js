import React from "react";
import styled from 'styled-components';
import { pizzaRed } from "../Styles/colors";
import { title } from "../Styles/title";

export const NavbarStyled = styled.div`
background-color:${pizzaRed};
padding: 15px;
position: fixed;
width: 100%;
z-index: 999;
display: flex;
justify-content: space-between;
`

const Logo = styled(title)`
font-size: 30px;
color: white;
text-shadow: 5px 5px 4px #580520;
`

const UserStatus = styled.div`
color: white;
font-size: 12px;
margin-right: -800px;
`

const LoginButton = styled.span`
cursor: pointer;
`

/*
export function Navbar({Login, loggedIn, logout}){
    return <NavbarStyled>
    <Logo>
    Order System <span role="img" aria-label="pizza Slice">🍕</span></Logo>
    <UserStatus>   
    {loggedIn !== "Loading" ? (
        <>
            🧍 {loggedIn ? "Logged in." : ""}
        {loggedIn ? (
            <LoginButton onClick= {logout}>Log out</LoginButton>
        ): (
        <LoginButton onClick= {Login}>Log in / Sign up</LoginButton>
         )}
        </>
        ) : (
            "Loading..."
        )
    }
    </UserStatus>
}}


   
    </NavbarStyled>;

   
}
 */

export function Navbar(){
    return <NavbarStyled>
    <Logo>
    Order System <span role="img" aria-label="pizza Slice">🍕</span></Logo>
    <UserStatus>  <LoginButton>Log out</LoginButton>
        <LoginButton >Log in / Sign up</LoginButton>
    </UserStatus>   
    </NavbarStyled>
};