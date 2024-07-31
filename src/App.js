import { StyledEngineProvider } from '@mui/material/styles';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import React from "react";
import { fetchNewAlbums ,fetchSongs , fetchTopAlbums } from './Components/api/api.jsx';
import { useState,useEffect } from 'react';
import {Outlet} from "react-router-dom";

function App() {
  const [data , setData] =useState({});

  const generateData = (key,source)=>{
    source().then((data)=>{
      setData((prevState)=>{
        return{...prevState,[key]:data};
      });
    });
  };

  useEffect(()=>{
    generateData("topAlbums",fetchTopAlbums);
    generateData("newAlbums",fetchNewAlbums);
    generateData("songs",fetchSongs);
  },[]);

  const {topAlbums=[],newAlbums=[],songs=[]} = data;

  return (
    <>
    <StyledEngineProvider injectFirst>
      <Navbar />
      <Hero />
      <Outlet context = {{data: {topAlbums, newAlbums, songs}}} />
    </StyledEngineProvider>
    </>
  );
}

export default App;
