import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>Love Game | About</title>
      </Head>
      <AppLayout>
        <div>This is about page</div>;
      </AppLayout>
    </>
  );
};

export default about;
