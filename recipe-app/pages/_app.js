import Header from "../components/Header";
import Footer from "../components/Footer";
import "../node_modules/bulma/css/bulma.min.css";
import "../styles/main.scss";

const App = ({ Component, pageProps }) => {
  return [
    <Header key="header" />,
    <main className="container mt-6" key="main">
      <Component {...pageProps} />
    </main>,
    <Footer key="footer" />,
    // <style jsx global key="global-styles">
    //   {`
    //     body {
    //       margin: 0;
    //       padding: 0;
    //       font-size: 16px;
    //       position: relative;
    //       min-height: 100vh;
    //       height: auto;
    //       text-rendering: optimizeLegibility;
    //     }
    //   `}
    // </style>,
  ];
};

export default App;
