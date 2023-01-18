import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import HomePage from './HomePage';
import PhotoGalleryPage from './PhotoGalleryPage';
import ContactMePage from './ContactMePage';

const SiteNav: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const [activePage, setActivePage] = useState("home");
  const toggleActivePage = (selectedPage: string) => setActivePage(selectedPage);

  //TODO: Add a function to handle the click of a nav item
  function handleHomeItemClick() {
    console.log("Nav Item Clicked");
    setActivePage('home');
  } 

  function handleNavItemClick(){
    console.log("Nav Item Clicked");
  }

  return (
    <div>
      {/* <Navbar color="faded" light>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav >
          <NavItem>
            <NavLink href="/" onClick={handleHomeItemClick}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/pictures/" onClick={handleNavItemClick}>Pictures</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/blog/" onClick={handleNavItemClick}>Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact/" onClick={handleNavItemClick}>Contact Me</NavLink>
          </NavItem>
          </Nav>
        </Collapse>
      </Navbar> */}
      {activePage === 'home' && <HomePage/>}
      {activePage === 'pictures' && <PhotoGalleryPage />}
      {activePage === 'contact' && <ContactMePage />}
    </div>
  );
}
export default SiteNav;