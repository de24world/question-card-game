import React from "react";
import AppLayout from "../components/AppLayout";
import GameCard from "../components/GameCard/GameCard";

import Head from "next/head";

import { Row, Col } from "antd";

const game = () => {
  return (
    <>
      <Head>
        <title>Erotic Game | Game </title>
      </Head>
      <AppLayout />
      <Row>
        <Col xs={3} sm={6} lg={8}></Col>
        <Col xs={18} sm={12} lg={8}>
          <GameCard />
        </Col>
        <Col xs={3} sm={6} lg={8}></Col>
      </Row>
    </>
  );
};

export default game;
