import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart05";
import instruction from "./instruction.md";

const convertData = (input) => {
  const genders = Array.from(new Set(input.map(({ gender }) => gender))); // 性別の集合を作る
  const min = Math.round(Math.min(...input.map(({ y }) => y))); // inputの中のyを取り出して引数として並べてその中の最小値を取得
  const max = Math.round(Math.max(...input.map(({ y }) => y)));
  const bins = Array.from({ length: max - min + 1 }).map((_, i) => {
    // binの値を文字に変換してobjとして宣言
    const obj = {
      bin: (min + i).toString(),
    };
    // 列挙可能なプロパティを全て代入，今回は男性と女性のみ
    for (const gender of genders) {
      obj[gender] = 0; // min + iのgenderの値を0で初期化，genderは存在しないのでブラケット記法で書く
    }
    return obj;
  });

  // inputからyとgenderを抽出して全て代入
  for (const { y, gender } of input) {
    const i = Math.round(y) - min;
    bins[i][gender] += 1; // 
  }
  return bins;
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer05"
      convertData={convertData}
      dataUrl="data/size-and-weight.json"
      instruction={instruction}
      title="Lesson 05"
      Chart={Chart}
    />
  );
};

export default Lesson;
