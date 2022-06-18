import React, { useState } from "react";
import { capitalizeEachWord } from "../utils/utils";
import OptionButton from "./optionButton";

export default function Row({row , onPressHandler}){

    const name = capitalizeEachWord('"' + row.quizName + '" By ' + row.customerName );

    return (
       <OptionButton name = {name} onPressHandler = {onPressHandler}  data = {row}/>
    )
}