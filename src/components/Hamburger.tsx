import React from 'react';
import { Dropdown } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link as ScrollLink } from 'react-scroll';

const Hamburger: React.FC = () => {
  const menu = (
    <ul style={{ backgroundColor: 'rgba(245, 245, 245, 0.6)', borderRadius: '8px', padding: '10px' }}>
      <li>
        <ScrollLink
          activeClass="active"
          to="project-overview"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="link-style"
        >
          Project Overview
        </ScrollLink>
      </li>
      <ScrollLink
          activeClass="active"
          to="the-collection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="link-style"
        >
          The Collection
        </ScrollLink>
      <li>
        <ScrollLink
          activeClass="active"
          to="the-wine"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="link-style"
        >
          The Wine
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="active"
          to="the-cellar"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="link-style"
        >
          The Cellar
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="active"
          to="tokenomics"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="link-style"
        >
          Tokenomics
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="active"
          to="media"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="link-style"
        >
          Media
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="active"
          to="about-us"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="link-style"
        >
          About Us
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="active"
          to="the-team"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="link-style"
        >
          The Team
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="active"
          to="stats"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="link-style"
        >
          Stats
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="active"
          to="alpha"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="link-style"
        >
          Alpha
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="active"
          to="kyc"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="link-style"
        >
          KYC
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="active"
          to="ts-and-cs"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="link-style"
        >
          T's & C's
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="active"
          to="partners-and-suppliers"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="link-style"
        >
          Partners & Suppliers
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="active"
          to="holders-contact-form"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="link-style"
        >
          Holders Contact Form
        </ScrollLink>
      </li>
    </ul>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
      <MenuOutlined />
    </Dropdown>
  );
};

export default Hamburger;
