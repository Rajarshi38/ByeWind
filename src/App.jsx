import Ecommerce from "./components/Ecommerce/Ecommerce";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <Header />
      <Ecommerce />
    </Layout>
  );
};

export default App;
