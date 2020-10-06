<<<<<<< HEAD
import React from 'react';
import '../../App.css';
import Cards from '../Card'
import HeroSection from '../heroSection';
=======
import React from "react";
import "../../App.css";
import Cards from "../Card";
import HeroSection from "../heroSection";
import Footer from '../footer';
>>>>>>> master

function Home(props) {
  const history = props.history;
  return (
    <>
      <HeroSection history={history} />
      <Cards />
<<<<<<< HEAD
     
      {/* <Footer /> */} */
=======
      <Footer /> 
>>>>>>> master
    </>
  );
}

export default Home;
