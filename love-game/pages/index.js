import MenuHeader from "../src/components/MenuHeader";
import styles from "../styles/Home.module.css";

// import { useRouter } from "next/router";
import { withTranslation } from "../i18n";

const Home = ({ t }) => {
  // const router = useRouter();
  // const { locale, locales, defaultLocale } = router;

  return (
    <>
      <MenuHeader />
      <div>{t("indexpage")}</div>
      {/* 
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p> 
      */}
    </>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Home);
