import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  ButtonGroup,
  Button,
  Container,
  Row,
  Col,
  UncontrolledAccordion,
  AccordionBody,
  AccordionItem,
  AccordionHeader,
} from "reactstrap";
import HomePage from "./HomePage";
import PhotoGalleryPage from "./PhotoGalleryPage";
import ContactMePage from "./ContactMePage";

const SiteNav: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const [activePage, setActivePage] = useState("home");
  const toggleActivePage = (selectedPage: string) =>
    setActivePage(selectedPage);

  //TODO: Add a function to handle the click of a nav item
  function handleHomeItemClick() {
    console.log("Nav Item Clicked");
    setActivePage("home");
    toggleNavbar();
  }

  function handlePicturesItemClick() {
    console.log("Nav Item Clicked");
    setActivePage("pictures");
    toggleNavbar();
  }

  function handleContactItemClick() {
    console.log("Nav Item Clicked");
    setActivePage("contact");
    toggleNavbar();
  }

  function handleNavItemClick() {
    console.log("Nav Item Clicked");
  }

  return (
    <div>
      <style>
        {`.btn-nav {
          color: #ffffff;
          background-color: #ffffff;
          background-color: #ffffff;
          border-color: #fffffff0;
      }`}
      </style>
      <Container>
        <Row>
          <Col xs="1">gn</Col>
          <Col xs="7"></Col>
          <Col xs="4">
            <ButtonGroup>
              <Button className="btn-nav" onClick={handleHomeItemClick}>
                Home
              </Button>
              <Button className="btn-nav" onClick={handlePicturesItemClick}>
                Pictures
              </Button>
              <Button className="btn-nav" onClick={handleContactItemClick}>
                Contact
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
      {activePage === "home" && <HomePage />}
      {activePage === "pictures" && <PhotoGalleryPage />}
      {activePage === "contact" && <ContactMePage />}
    </div>
  );
};
export default SiteNav;
