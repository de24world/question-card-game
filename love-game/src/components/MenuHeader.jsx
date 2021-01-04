import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu } from "antd";
import { TranslationOutlined } from "@ant-design/icons";

import { withTranslation, i18n } from "../../i18n";

const MenuHeader = ({ t }) => {
  const { SubMenu } = Menu;

  return (
    <div>
      <div>
        <Menu mode="horizontal" theme="dark">
          <Menu.Item>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Menu.Item>
          {/* 
          <Menu.Item>
            <Link href="/about">
              <a>About</a>
            </Link>
          </Menu.Item> 
          */}
          <Menu.Item>
            <Link href="/game">
              <a>{t("Card Game")}</a>
            </Link>
          </Menu.Item>

          <SubMenu
            key="SubMenu"
            title={t("Language")}
            icon={<TranslationOutlined />}
          >
            <Menu.Item
              key="setting:1"
              onClick={() => i18n.changeLanguage("en")}
            >
              {t("English")}
            </Menu.Item>
            <Menu.Item
              key="setting:2"
              onClick={() => i18n.changeLanguage("ko")}
            >
              {t("Korean")}
            </Menu.Item>
          </SubMenu>

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
