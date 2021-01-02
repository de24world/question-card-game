import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import data from "../../data/question.json";

import styled, { ThemeProvider } from "styled-components";
import theme from "../../../styles/theme";

import { Button, Row, Col } from "antd";

import { HeartOutlined } from "@ant-design/icons";

const GameCard = (props) => {
  const [questions, setQuestions] = useState("");

  const getQuestion = () => {
    let randomNum = Math.floor(Math.random() * data.length);
    setQuestions(data[randomNum]);
  };

  useEffect(() => {
    getQuestion();
  }, []);

  // console.log(theme);
  //  theme or data

  return (
    <>
      <ThemeProvider theme={theme}>
        <Row>
          <Col xs={2} sm={3} lg={3}></Col>
          <Col xs={20} sm={18} lg={18}>
            <Container>
              <TheCard>
                <TheBack>
                  <HeartOutlined
                    style={{
                      color: "white",
                      fontSize: "250px",
                      marginTop: "25px",
                    }}
                  />
                </TheBack>

                <TheFront>
                  <p>{questions.id}/100</p>
                  <Text>{questions.text}?</Text>
                  <Button
                    danger
                    type="primary"
                    size="large"
                    style={{
                      position: "absolute",
                      bottom: "5%",
                      left: "25%",
                      width: "50%",
                      height: "15%",
                    }}
                    onClick={getQuestion}
                  >
                    Next
                  </Button>
                </TheFront>
              </TheCard>
            </Container>
          </Col>
          <Col xs={2} sm={3} lg={3}></Col>
        </Row>
      </ThemeProvider>
    </>
  );
};

const Container = styled.div`
  max-width: 250px;
  height: 320px;
`;

const TheCard = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.8s ease;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const TheBack = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.danger};
  border-radius: 10px;

  /*
  background-image: url("https://bfa.github.io/solitaire-js/img/card_back_bg.png");
  background-size: auto;
  background-repeat: round;
  */
`;

const TheFront = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-width: 5px;
  border-radius: 10px;
  border-style: double;
  border-color: black;
  backface-visibility: hidden;
  overflow: hidden;
  background: white;
  text-align: center;
  transform: rotateY(180deg);
`;

const Text = styled.h3`
  vertical-align: middle;
  text-align: center;
  border-radius: 10px;
  color: white;
  padding: 10px;
  margin: 15px;
  height: 180px;
  background-color: ${(props) => props.theme.colors.danger};
`;

const StyledButton = styled(Button)`
  position: absolute;
`;

GameCard.propTypes = {};

export default GameCard;
