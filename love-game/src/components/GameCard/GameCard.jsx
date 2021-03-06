import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import data from "../../data/question.json";

import styled, { ThemeProvider } from "styled-components";
import theme from "../../../styles/theme";

import { Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";

import { withTranslation } from "../../../i18n";

const GameCard = ({ t }) => {
  const currentURL = window.location.href;

  const pathname = window.location.pathname;
  const [questions, setQuestions] = useState("");

  const getQuestion = () => {
    let randomNum = Math.floor(Math.random() * data.length);
    setQuestions(data[randomNum]);
  };

  useEffect(() => {
    getQuestion();
  }, []);

  console.log(currentURL);
  //  theme or data

  return (
    <>
      <ThemeProvider theme={theme}>
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
                {t("Next")}
              </Button>
            </TheFront>
          </TheCard>
        </Container>
      </ThemeProvider>
    </>
  );
};

const Container = styled.div`
  width: 250px;
  height: 320px;
  display: block;
  margin: 0px auto;
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

GameCard.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

GameCard.propTypes = {};

export default withTranslation("common")(GameCard);
