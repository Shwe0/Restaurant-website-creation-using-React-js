import React from "react";
import Footer from  './src/Components/Footer';
import Header from './src/Components/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;