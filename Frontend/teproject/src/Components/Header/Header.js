import { React, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'



const mapStateToProps = (state) => {
    return {

    }
}

const Header = (props) => {


    const [open, setOpen] = useState(false)

    const toggle = () => setOpen(!open)

    return (
        <div>
            <Navbar className='px-md-0 px-lg-5 py-3' expand='md' dark color='dark'>
                <NavbarBrand className='' href='/'>TE Project</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={open} navbar>
                    <Nav className='ms-auto' navbar>
                        <NavItem className='mx-2'>
                            <Link className='text-light text-decoration-none' to='/compare'>Compare</Link>
                        </NavItem>
                        <NavItem className='mx-2'>
                            <Link className='text-light text-decoration-none' to='/about'>About</Link>
                        </NavItem>
                        <NavItem className='mx-2'>
                            <Link className='text-light text-decoration-none' to='/contact'>Contact</Link>
                        </NavItem>
                        <NavItem className='mx-2'>
                            <Link className='text-light text-decoration-none' to='/login'>Login</Link>
                        </NavItem>
                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    )
}




export default connect(mapStateToProps)(Header)