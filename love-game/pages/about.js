import React from "react";
import MenuHeader from "../src/components/MenuHeader";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>Love Game | About</title>
      </Head>
      <MenuHeader>
        <div>This is about page</div>;
      </MenuHeader>
    </>
  );
};

export default about;
