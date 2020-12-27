import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const AppLayout = () => {
  return (
    <div>
      This is AppLayout
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/game">
          <a>game</a>
        </Link>
      </div>
    </div>
  );
};

AppLayout.propTypes = {};

export default AppLayout;
