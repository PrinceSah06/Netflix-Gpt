import React from "react";
import Header from "../componets/header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import  GptSearch from "./GptSearch";
import { useSelector } from "react-redux";


export default function Browse() {
  const showgtpsearch= useSelector(state => state.gpt.showGptSearch)
  useNowPlayingMovie()


  return (
    <div>
      <Header></Header>
     
  {  showgtpsearch? ( < GptSearch></ GptSearch>) :(<>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
      </>)}
    </div>
  );
}
