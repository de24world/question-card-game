import React from "react";
import MenuHeader from "../src/components/MenuHeader";
import GameCard from "../src/components/GameCard/GameCard";

import Head from "next/head";

import styled from "styled-components";
import { Row, Col } from "antd";

import { withTranslation } from "../i18n";

const game = ({ t }) => {
  return (
    <>
      <Head>
        <title>Love Game | Card Game </title>
      </Head>
      <MenuHeader />
      <Row>
        <Col xs={1} sm={3} lg={4}></Col>
        <Col xs={22} sm={18} lg={16}>
          <Title>{t("Random Question Card")}</Title>
          <GameCard />
          <Description>
            {t("Howto")}?
            {/* 
            {t("1. Please drag mouse on the card")}
            {t("Mobile : click the Card")}
            {t("2. click the next button")} 
            */}
          </Description>
        </Col>
        <Col xs={1} sm={3} lg={4}></Col>
      </Row>
    </>
  );
};

const Title = styled.h1`
  text-align: center;
`;

const Description = styled.p`
  text-align: center;
`;

game.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(game);
