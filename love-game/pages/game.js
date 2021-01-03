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
          <H1>Random Question Card Game</H1>
          <GameCard />
          <br></br>
          <P>
            1. Please drag(mobile:click) mouse on the card
            <br></br>
            2. click the next button
          </P>
        </Col>
        <Col xs={1} sm={3} lg={4}></Col>
      </Row>
    </>
  );
};

const H1 = styled.h1`
  text-align: center;
`;

const P = styled.p`
  text-align: center;
`;

export default game;
