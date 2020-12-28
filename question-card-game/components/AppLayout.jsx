import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu } from "antd";

const AppLayout = () => {
  return (
    <div>
      <div>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/about">
              <a>About</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/game">
              <a>Game</a>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

AppLayout.propTypes = {};

export default AppLayout;
