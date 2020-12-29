import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import data from "../../data/question.json";

import styled, { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

import { Button } from "antd";

const GameCard = (props) => {
  const [questions, setQuestions] = useState("");

  const getQuestion = () => {
    let randomNum = Math.floor(Math.random() * data.length);
    setQuestions(data[randomNum]);
  };

  useEffect(() => {
    getQuestion();
  }, []);

  console.log(theme);
  //  theme or data

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <TheCard>
            <TheBack />

            <TheFront>
              <h1>Front of Card</h1>
              <p>{questions.text}?</p>
              <p>Number: {questions.id}/100</p>
              <Button type="primary" danger onClick={getQuestion}>
                Next
              </Button>
            </TheFront>
          </TheCard>
        </Container>
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
  border-radius: 10px;
  transform-style: preserve-3d;
  transition: all 0.8s ease;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const TheBack = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://bfa.github.io/solitaire-js/img/card_back_bg.png");
  background-size: contain;
  background-repeat: no-repeat;
`;

const TheFront = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 5px 5px;
  backface-visibility: hidden;
  overflow: hidden;
  background: ${(props) => props.theme.colors.white};
  text-align: center;
  transform: rotateY(180deg);
`;

GameCard.propTypes = {};

export default GameCard;
