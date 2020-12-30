import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu } from "antd";
import { withTranslation } from "../../i18n";

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
              <a>{t("Card Game")}</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/penalty">
              <a>Penalty Game</a>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

AppLayout.propTypes = {};

export default withTranslation(AppLayout);
