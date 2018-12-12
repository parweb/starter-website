import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Breadcrumb,
  BreadcrumbItem
} from 'reactstrap';

const Menu = styled(Nav)`
  display: grid !important;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center !important;
`;

const Ariane = styled(Breadcrumb)`
  align-items: center;
  line-height: 38px;
  border-radius: 0 !important;
`;

const Options = styled(UncontrolledDropdown)`
  display: inline-block;
  line-height: 24px;
`;

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light fixed="top" fixed="top" sticky="top" expand="md">
          <Link prefetch passHref href="/">
            <NavbarBrand>ct</NavbarBrand>
          </Link>

          <Menu className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Menu>
        </Navbar>

        <Ariane>
          <BreadcrumbItem>
            <Link prefetch href="/">
              <a>Home</a>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Options>
              <DropdownToggle caret>Categories</DropdownToggle>
              <DropdownMenu>
                <Link prefetch href={'/category/' + 'Catégorie 1' + '/'}>
                  <a>
                    <DropdownItem>Option 1</DropdownItem>
                  </a>
                </Link>
                <Link prefetch href={'/category/' + 'Catégorie 2' + '/'}>
                  <a>
                    <DropdownItem>Option 2</DropdownItem>
                  </a>
                </Link>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </Options>
          </BreadcrumbItem>
          <BreadcrumbItem active>Data</BreadcrumbItem>
        </Ariane>

        {this.props.children}
      </div>
    );
  }
}
