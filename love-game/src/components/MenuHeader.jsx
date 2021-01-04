import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu } from "antd";
import { withTranslation } from "../../i18n";

const MenuHeader = ({ t }) => {
  return (
    <div>
      <div>
        <Menu mode="horizontal" theme="dark" defaultSelectedKeys={["1"]}>
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
          {/* 
          <Menu.Item>
            <Link href="/penalty">
              <a>Penalty Game</a>
            </Link>
          </Menu.Item> 
          */}
        </Menu>
      </div>
    </div>
  );
};

MenuHeader.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

MenuHeader.propTypes = {};

export default withTranslation("common")(MenuHeader);
