import React from "react";
import AppLayout from "../components/AppLayout";
import GameCard from "../components/GameCard/GameCard";

import Head from "next/head";

import { Row, Col } from "antd";

const game = () => {
  return (
    <>
      <Head>
        <title>Love Game | Card Game </title>
      </Head>
      <AppLayout />
      <Row>
        <Col xs={3} sm={6} lg={8}></Col>
        <Col xs={18} sm={12} lg={8}>
          <h1>This is Random Question Card Game</h1>
          <GameCard />
          <p>Please drag(mobile:click) mouse on the card</p>
          <span>2. click the next button</span>
        </Col>
        <Col xs={3} sm={6} lg={8}></Col>
      </Row>
    </>
  );
};

export default game;
