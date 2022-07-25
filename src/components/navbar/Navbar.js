import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Modal from '@mui/material/Modal'
import React from 'react'
import styled from 'styled-components'
import email from '../../media/email.png'
import logo from '../../media/githubIcon.ico'
import linkedin from '../../media/linkedinx.png'
import { device } from '../../styles/responsive'
import Contact from '../contact/Contact'
import LanguageSelector from './LanguageSelector'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
}
const NavBar = styled.nav`
    margin-top: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    background-color: transparent;

    ${(props) => {
        if (props?.uri) return `background-color: black;`
        else {
            return `background-color: transparent;`
        }
    }};
    width: 100%;
    height: 80px !important;
    font-size: 20px;
    z-index: 1;
    ${(props) => {
        if (props.scrolling)
            return `background-color: black !important;
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
        if ((props.scrolling && props.scrolling > 300) || props?.uri)
            return `opacity:1 ; visibility: visible ;
`
    }};
    ${device.mobile`  font-size: 0.9rem; line-height: normal; align-items: center;`}
    ${device.tablet`  font-size: 0.9rem; line-height: normal; align-items: center;`}
    > Link {
        text-decoration: none !important;
        background-color: red;
    }
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
const Navbar = ({ isScrolling, uri }) => {
    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <NavBar scrolling={isScrolling} uri={uri}>
            <NavBarLogo scrolling={isScrolling} uri={uri} onClick={toTheTop}>
                Pablo Gallego Carmona
            </NavBarLogo>
            <LanguageSelector />
            <IconBar>
                <img
                    role="presentation"
                    src={email}
                    alt="email logo"
                    onClick={handleOpen}
                />

                <a
                    role="button"
                    href="https://github.com/Galleguras"
                    target="_blan  k"
                    rel="noopener noreferrer"
                >
                    <img src={logo} alt="github logo" />
                </a>
                <a
                    href="https://es.linkedin.com/in/pablo-gallego-carmona-327847a9"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={linkedin} alt="linkedin logo" />
                </a>
            </IconBar>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition={true}
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Contact handleClose={handleClose} />
                    </Box>
                </Fade>
            </Modal>
        </NavBar>
    )
}

export default Navbar
