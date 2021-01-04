import MenuHeader from "../src/components/MenuHeader";
import styles from "../styles/Home.module.css";

import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  return (
    <>
      <MenuHeader />
      <div>indexpage</div>
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>
    </>
  );
};

export default Home;
