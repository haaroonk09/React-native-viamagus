import {
  View,
} from "react-native";
import React, { useState } from "react";
import globalStyles from "../styles/styles";
import Price from "./TodayGames/Price";
import Prediction from "./TodayGames/Prediction";
import useModal from "../hooks/useModal";
import Players from "./TodayGames/Players";
import SubmitModal from "./TodayGames/SubmitModal";
import Timer from "./TodayGames/Timer";



const Games = () => {
    const {toggleModal,isModalVisible} = useModal()
  
  return (
    <View style={[globalStyles.full, globalStyles.backgroundWhite]}>
      <View style={{ margin: 17, borderColor: "#EEEAF3", borderWidth: 1, }}>
        <Timer />
        <Price />
        <Prediction toggleModal={toggleModal}/>
        <Players />
        <SubmitModal toggleModal={toggleModal} isModalVisible={isModalVisible}/>
      </View>
    </View>
  );
};

export default Games;


