import MenuHeader from "../src/components/MenuHeader";
import styles from "../styles/Home.module.css";

import { withTranslation } from "../i18n";

const Home = ({ t }) => {
  return (
    <>
      <MenuHeader />
      <div>{t("indexpage")}</div>
    </>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Home);
