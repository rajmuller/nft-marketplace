import "../styles/globals.css";

import { Nav } from "../components";

const Marketplace = ({ Component, pageProps }) => {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
};

export default Marketplace;
