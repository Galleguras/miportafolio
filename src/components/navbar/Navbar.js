import React from 'react'
import styled from 'styled-components'
import email from '../../media/email.png'
import logo from '../../media/githubIcon.ico'
import linkedin from '../../media/linkedinx.png'
import { device } from '../../styles/responsive'
import Header from '../Header/Header'

const NavBar = styled.nav`
    margin-top: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    background-color: transparent;
    width: 100%;
    height: 80px !important;
    font-size: 20px;
    z-index: 1;
    ${(props) => {
        if (props.scrolling)
            return `background-color: black;
  transition: all 1s ease `
    }};
`
const NavBarLogo = styled.div`
    margin-top: 0px;
    opacity: 0;
    visibility: hidden;
    transition: all 1.3s ease;
    display: flex;
    margin-left: 20px;

    height: 80px;
    line-height: 80px;
    color: white;
    cursor: pointer;
    ${(props) => {
        if (props.scrolling && props.scrolling > 300)
            return `opacity:1 ; visibility: visible ;
`
    }};
    ${device.mobile`  font-size: 0.9rem;`}
    ${device.tablet`  font-size: 0.9rem;`}
`

const IconBar = styled.div`
    margin-top: 0px;
    flex-wrap: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 20px;
    a:first-child {
        padding-right: 5px;
    }
    img {
        transition: all 0.5s ease;
        &:hover {
            transform: scale(1.2, 1.2);
        }
        &:active {
            transform: scale(1.2, 1.2);
        }
        ${device.mobile`height: 40px;`}
    }
`
const Navbar = ({ isScrolling }) => {
    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    return (
        <NavBar scrolling={isScrolling}>
            <NavBarLogo scrolling={isScrolling} onClick={toTheTop}>
                Pablo Gallego Carmona
            </NavBarLogo>
            <Header />
            <IconBar>
                <a href="" target="_blank" rel="noopener norefferer">
                    <img src={email} alt="email logo" />
                </a>
                <a
                    href="https://github.com/Galleguras"
                    target="_blank"
                    rel="noopener norefferer"
                >
                    <img src={logo} alt="github logo" />
                </a>
                <a
                    href="https://es.linkedin.com/in/pablo-gallego-carmona-327847a9"
                    target="_blank"
                    rel="noopener norefferer"
                >
                    <img src={linkedin} alt="linkedin logo" />
                </a>
            </IconBar>
        </NavBar>
    )
}

export default Navbar
