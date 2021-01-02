import React from "react";
import MenuHeader from "../src/components/MenuHeader";
import GameCard from "../src/components/GameCard/GameCard";

import Head from "next/head";

import { Row, Col } from "antd";

const game = () => {
  return (
    <>
      <Head>
        <title>Love Game | Card Game </title>
      </Head>
      <MenuHeader />
      <Row>
        <Col xs={0} sm={6} lg={8}></Col>
        <Col xs={24} sm={12} lg={8}>
          <h1>This is Random Question Card Game</h1>
          <GameCard />
          <br></br>
          <p>Please drag(mobile:click) mouse on the card</p>
          <span>2. click the next button</span>
        </Col>
        <Col xs={0} sm={6} lg={8}></Col>
      </Row>
    </>
  );
};

export default game;
