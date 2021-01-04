import App from "next/app";
import "../styles/globals.scss";
import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";
import React from "react";
import { appWithTranslation } from "../i18n";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Love Game</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default appWithTranslation(MyApp);
