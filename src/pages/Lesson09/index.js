import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart09";
import instruction from "./instruction.md";

const convertData = (input) => {
  const ratio = 0.01;
  const ministryCount = {};
  const ministries = Array.from(
    new Set(input.map(({ ministry }) => ministry))
  ).map((ministry) => {
    const ministryProjects = input.filter((item) => item.ministry === ministry);
    const bureauCount = {};
    const bureaus = Array.from(
      new Set(ministryProjects.map(({ bureau }) => bureau))
    )
      .map((bureau) => {
        const bureauProjects = ministryProjects.filter(
          (item) => item.bureau === bureau
        );
        const departments = Array.from(
          new Set(bureauProjects.map(({ department }) => department))
        )
          .map((department) => {
            const departmentProjects = bureauProjects.filter(
              (item) => item.department === department
            );
            return {
              name: department,
              count: departmentProjects.length,
            };
          })
          .filter(({ count }) => count / input.length >= ratio);
        departments.sort((item1, item2) => item2.count - item1.count); // conutについて降順ソート
        departments.push({
          name: "その他",
          count:
            bureauProjects.length -
            departments.reduce((a, { count }) => a + count, 0),
        });
        bureauCount[bureau] = bureauProjects.length;
        return {
          name: bureau,
          children: departments,
        };
      })
      .filter(({ name }) => bureauCount[name] / input.length >= ratio);
    bureaus.sort(
      (item1, item2) => bureauCount[item2.name] - bureauCount[item1.name]
    );
    ministryCount[ministry] = ministryProjects.length;
    return {
      name: ministry,
      children: bureaus,
    };
  });
  ministries.sort(
    (item1, item2) => ministryCount[item2.name] - ministryCount[item1.name]
  );
  return {
    children: ministries,
  };
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer09"
      convertData={convertData}
      dataUrl="data/judgit-departments.json"
      instruction={instruction}
      title="Lesson 09"
      Chart={Chart}
    />
  );
};

export default Lesson;
