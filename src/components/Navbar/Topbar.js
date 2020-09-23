import React from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bulma-components/lib/components/navbar';
import Container from 'react-bulma-components/lib/components/container';

export default function Topbar() {
  return (
    <>
      <Navbar className="is-gigable-helper-gradient">
        <Container>
          <Navbar.Brand>
            <Navbar.Item renderAs="a" href="/">
              <img src="https://s3-eu-west-1.amazonaws.com/assets.gigable/customer-portal/gigable-logo.svg" alt="Gigable" width="115" height="38" />
            </Navbar.Item>
            <Navbar.Burger />
          </Navbar.Brand>
          <Navbar.Menu>
            {/* This private route won't be accessible if no token in lcoal storage */}
            <Navbar.Container>
              <Navbar.Item href="/">
                Gigs
              </Navbar.Item>
            </Navbar.Container>
          </Navbar.Menu>
        </Container>
      </Navbar>
    </>
  );
}
