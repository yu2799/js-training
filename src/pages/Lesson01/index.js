import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart01";
import instruction from "./instruction.md";

/*
const convertData = (input) => {
  const output = new Array();
  for (let i = 0; i < input.length; i++) {
    output.push({
      name: input[i][0],
      count: input[i][1],
    });
  }
  return output;
};
*/

/*
const convertData = (input) => {
  const output = [];
  for (const [name, count] of input) {
    output.push({
      name,
      count,
    });
  }
  return output;
};
*/

/* for-of
const convertData = (input) => {
  const output = [];
  for (const a of input) {
    output.push({
      name: a[0],
      count: a[1],
    });
  }
  return output;
};
*/

/* for-each
const convertData = (input) => {
  const output = [];
  input.forEach((a) => {
    output.push({
      name: a[0],
      count: a[1],
    });
  });
  return output;
};
*/

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
