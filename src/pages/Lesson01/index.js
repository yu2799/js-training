import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart01";
import instruction from "./instruction.md";

const convertData = (input) => {
  return input.map(([a, b]) => ({
    name: a, 
    count: b,
  })); 
};
/*
  プロパティ名=変数名なら
  const convertData = (input) => {
    return input.map(([name, count]) => ({
      name, 
      count,
    })); 
  };
  のようにかける．
*/

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer01"
      convertData={convertData}
      dataUrl="data/chs-capacity.json"
      instruction={instruction}
      title="Lesson 01"
      Chart={Chart}
    />
  );
};

export default Lesson;
