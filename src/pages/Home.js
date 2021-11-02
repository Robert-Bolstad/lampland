import HeroBanner from "../components/HeroBanner";
import Usp from "../components/Usp";
import Featured from "../components/Featured";
import { withRouter } from "react-router-dom";

const Home = ({ data }) => {
  return (
    <>
      <HeroBanner />
      <Usp />
      <Featured data={data} />
    </>
  );
};

export default withRouter(Home);
