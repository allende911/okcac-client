import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Navigation = () => {
  return (
    <Menu compact secondary inverted>
      <Menu.Item>About</Menu.Item>
      <Menu.Item>Calendar</Menu.Item>
      <Menu.Item>Forum</Menu.Item>
      <Menu.Item>Newsletter</Menu.Item>
      <Menu.Item name="join" link>
        <Link to="club-signup">Join</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
