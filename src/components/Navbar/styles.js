import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  height: 80px;
  background-color: #424242;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  > .NavLink {
    color: black;
    margin: 0px 3px;
    border: 2px solid #808080;
    border-radius: 5px;
    background-color: #f2f2f2;
    width: 100%;
    max-width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
