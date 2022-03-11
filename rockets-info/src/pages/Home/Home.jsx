import React from "react";
import Layout from "../../components/Layout/Layout";
import Navbar from "../../components/Navbar";
import Settings from "../../components/Settings/Settings";

const Home = () => {
  return (
    <div>
      <Layout>
        <Navbar />
        <Settings />
      </Layout>
    </div>
  );
};

export default Home;
