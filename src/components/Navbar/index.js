import React from 'react'
import styled from 'styled-components'
import logo from '../../logo.png'
const NavbarContainer = styled.div`
  height: ${({isFullScreen}) => isFullScreen ? '0' : '4.5rem'};
  background: #1e1e1e;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
`
const NavbarContent = styled.button`
  background: transparent;
  border: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`
const UnorderList=styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
`

const List=styled.li`
  color: #ffffff;
  font-family: Roboto;
  font-size: 20px;
  margin-right: 15px;
  cursor: pointer;
`

const Logo = styled.img`
  width: 60px;
`

const MainHeading = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: #fff;
  span{
    font-weight: 700;
  }
`

const Navbar = props => {
  const {onClickNav}=props

  return (
    <NavbarContainer>
      <NavbarContent onClick={() => {
        onClickNav('code')
      }}>
        <Logo src={logo} />
        <MainHeading>
          <span>Wipe</span> Code
        </MainHeading>
      </NavbarContent>
      <UnorderList>
            <List onClick={() => {
                onClickNav('code')
            }}>Code</List>
            <List onClick={() => {
                onClickNav('draw')
            }}>Draw</List>
        </UnorderList>
    </NavbarContainer>
  )
}

export default Navbar