"use client";

import React, { useState } from "react";

interface ExperienceItem {
  category: "work" | "education";
  date: string;
  image: string;
  org: string;
  location: string;
  title: string;
  basis: string;
  desc: string;
}

interface FilterStates {
  work: boolean;
  education: boolean;
  //travel: boolean;
}

const experienceItems: ExperienceItem[] = [
  {
    category: "work",
    date: "July. 2024 - Present",
    image: "./fractile.webp",
    org: "Fractile",
    location: "London, UK",
    title: "ML Compiler Engineer",
    basis: "Full time",
    desc: "Building chips that remove every bottleneck to running LLMs at a global scale",
  },
  {
    category: "work",
    date: "Feb. 2024 - June 2024",
    image: "./captainapp.webp",
    org: "Captain App",
    location: "Bristol, UK",
    title: "Software Engineer",
    basis: "Part time",
    desc: "Building scalable modern applications utilising AI and cloud computing",
  },
  {
    category: "work",
    date: "Oct. 2021 - Nov. 2022",
    image: "./xmos.webp",
    org: "XMOS",
    location: "Bristol, UK",
    title: "Graduate Software Engineer",
    basis: "Full time",
    desc: "Accelerating edge ML through compile time and runtime optimisation",
  },
  {
    category: "work",
    date: "June 2020 - Sept. 2020",
    image: "./beko.webp",
    org: "Beko R&D",
    location: "Cambridge, UK",
    title: "Summer Intern",
    basis: "Full time",
    desc: "Evaluating proof of concept technologies for application in home appliances",
  },
  {
    category: "work",
    date: "June 2019 - Sept. 2019",
    image: "./lascar.webp",
    org: "Lascar Electronics",
    location: "Whiteparish, UK",
    title: "Summer Intern",
    basis: "Full time",
    desc: "Developing accurate and low power dataloggers and industrial panel meters",
  },
  {
    category: "education",
    date: "Sept. 2017 - June. 2021",
    image: "./southampton.webp",
    org: "University of Southampton",
    location: "Southampton, UK",
    title: "MEng Electronic Engineering",
    basis: "Full time",
    desc: "1st Class Honours, with a focus on machine learning, computer architecture, and computer vision.",
  },
  {
    category: "education",
    date: "Sept. 2015 - June. 2017",
    image: "./gcs.webp",
    org: "Gower College Swansea",
    location: "Swansea, UK",
    title: "A Levels",
    basis: "Full time",
    desc: "A A A in Maths, Further Maths, and Physics. A in AS level Chemistry.",
  },
];

export default function Experience() {
  const [filterStates, setFilterStates] = useState({
    work: true,
    education: false,
    //travel: false,
  });

  return (
    <div className="p-2 lg:p-30 min-h-[calc(100vh-4rem)]">
      <Selectors active={filterStates} setActive={setFilterStates} />
      <div className="flex justify-center">
      <div className="p-2 lg:p-20 lg:w-3/5">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {experienceItems.map(
            (item, index) =>
              filterStates[item.category] && (
                <ExperienceItem itemData={item} ind={index} key={index} />
              )
          )}
        </ul>
      </div>
      </div>
    </div>
  );
}

function Selectors({
  active,
  setActive,
}: {
  active: FilterStates;
  setActive: (value: FilterStates) => void;
}) {
  return (
    <div className="grid grid-cols-2 lg:gap-20 lg:mx-32">
      {Object.entries(active).map(([key, value]) => (
        <button
          key={key}
          className={`btn ${value ? "btn-active" : ""}`}
          onClick={() => setActive({ ...active, [key]: !value })}
        >
          {key.at(0)!.toUpperCase() + key.slice(1)}
        </button>
      ))}
    </div>
  );
}

function ExperienceItem({
  itemData,
  ind,
}: {
  itemData: ExperienceItem;
  ind: number;
}) {
  //FIX ANY
  var even = ind % 2 === 0;
  return (
    <li>
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        className={
          even ? "timeline-start md:text-end mb-10 py-5" : "timeline-end mb-10 py-5"
        }
      >
        <time className="font-mono italic">{itemData.date}</time>
        <div>
          <img
            className={
              even
                ? "h-16 block lg:ml-auto"
                : "h-16 block"
            }
            src={itemData.image}
            alt={itemData.org}
          />
        </div>
        <div className="text-lg font-semibold text-base-content">
          {itemData.title}
        </div>
        <div className="text-lg font-black text-base-content">
          {itemData.org}
        </div>
        <div className="font-mono italic">{itemData.location}</div>
        {itemData.desc}
      </div>
      <hr />
    </li>
  );
}
