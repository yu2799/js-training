import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart08";
import instruction from "./instruction.md";

const convertData = (input) => {
  for (const item of input) {
    item.tags.sort();
  }
  const tagSet = new Set();
  for (const item of input) {
    for (const tag of item.tags) {
      tagSet.add(tag);
    }
  }
  const tags = Array.from(tagSet); // 得られたtagを配列に変換

  const count = {};
  for (const tag1 of tags) {
    count[tag1] = {};
    for (const tag2 of tags) {
      count[tag1][tag2] = 0; // tag1のオブジェクトの中にtag2というプロパティを作って0で初期化
    }
  }

  for (const item of input) {
    const n = item.tags.length;
    for (let j = 0; j < n; ++j) {
      for (let i = 0; i < j; ++i) {
        count[item.tags[i]][item.tags[j]] += 1; // tag1に対してtag2が出現したら1加える
      }
    }
  }

  const links = [];
  for (const tag1 of tags) {
    for (const tag2 of tags) {
      /*
        2回以上出てくるtagの組み合わせをlinkのプロパティに
        sourceはtag1,targetはtag2として入れる
      */
      if (count[tag1][tag2] >= 2) {
        links.push({
          source: tag1,
          target: tag2,
        });
      }
    }
  }

  const nodeSet = new Set();
  for (const { source, target } of links) {
    nodeSet.add(source);
    nodeSet.add(target);
  }

  const nodes = Array.from(nodeSet).map((tag) => {
    return {
      id: tag,
    };
  });

  return {
    nodes,
    links,
  };
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer08"
      convertData={convertData}
      dataUrl="data/qiita-articles.json"
      instruction={instruction}
      title="Lesson 08"
      Chart={Chart}
    />
  );
};

export default Lesson;
