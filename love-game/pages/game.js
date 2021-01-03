import React from "react";
import MenuHeader from "../src/components/MenuHeader";
import GameCard from "../src/components/GameCard/GameCard";

import Head from "next/head";

import styled from "styled-components";
import { Row, Col } from "antd";

const game = () => {
  return (
    <>
      <Head>
        <title>Love Game | Card Game </title>
      </Head>
      <MenuHeader />
      <Row>
        <Col xs={1} sm={3} lg={4}></Col>
        <Col xs={22} sm={18} lg={16}>
          <Title>Random Question Card </Title>
          <GameCard />
          <Description>
            <h3>How to?</h3>
            <p>1. Please drag mouse on the card</p>
            <p>(Mobile : click the Card)</p>
            <p>2. click the next button</p>
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

export default game;
