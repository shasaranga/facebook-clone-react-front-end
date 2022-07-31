import { Fragment } from "react";
import Header from "../shared/components/Header";
import Sidebar from "../shared/components/Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </Fragment>
  );
};

export default Home;
