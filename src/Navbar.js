import * as React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler
} from "reactstrap";

export default function CustomNavbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar fixed="top" dark color="primary" expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/page1">
                Top 10 Animals That Would Kill You
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/page2">Top 10 Animals to Fight</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/page3">Top 10 Animals to Eat</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
