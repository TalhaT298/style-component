// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import Nav from './Nav';

// const Header = () => {
//     return (
//         <div>
//             <NavLink to="/">
//                 <img src='https://i.ibb.co/tw0nZC6/Untitled-design-10.png' alt='logo'></img>
//             </NavLink>
//             <Nav></Nav>
//         </div>
//     );
// };

// export default Header;
import React from "react";
import { NavLink } from "react-router-dom";
import Nav from './Nav';
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src=".https://i.ibb.co/tw0nZC6/Untitled-design-10.png" alt="logo" className="logo" />
      </NavLink>
      <Nav></Nav>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 30%;
  }
`;

export default Header;