interface experienceItem {
  date: string;
  image: string;
  company: string;
  location: string;
  title: string;
  basis: string;
  desc: string;
}

const experienceItems: experienceItem[] = [
  {
    date: "Feb. 2024 - Present",
    image: "/captainapp.png",
    company: "Captain App",
    location: "Bristol, UK",
    title: "Software Engineer",
    basis: "Part time",
    desc: "Building applications from the ground up for numerous small clients, utilising Typescript and Python backends run on Google Cloud Platform, with NextJS and Flutter frontends.",
  },
  {
    date: "Oct. 2021 - Nov. 2022",
    image: "/xmos.webp",
    company: "XMOS",
    location: "Bristol, UK",
    title: "Graduate Software Engineer",
    basis: "Full time",
    desc: "Accelerating embedded machine learning on xcore.ai, through compile time and runtime optimisation.",
  },
  {
    date: "June 2020 - Sept. 2020",
    image: "/beko.webp",
    company: "Beko R&D",
    location: "Cambridge, UK",
    title: "Summer Intern",
    basis: "Full time",
    desc: "Evaluating proof of concept technologies in applications for home appliances.",
  },
  {
    date: "June 2019 - Sept. 2019",
    image: "/lascar.webp",
    company: "Lascar Electronics",
    location: "Whiteparish, UK",
    title: "Summer Intern",
    basis: "Full time",
    desc: "Developing dataloggers and industrial panel meters.",
  },
];

export default function Experience() {
  return (
    <div className="p-20">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {experienceItems.map((item, index) => (
          <ExperienceItem itemData={item} ind={index} key={index} />
        ))}
      </ul>
    </div>
  );
}

function ExperienceItem({ itemData, ind }: { itemData: experienceItem; ind: number }) {
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
          even
            ? "timeline-start md:text-end mb-10"
            : "timeline-end mb-10"
        }
      >
        <time className="font-mono italic">{itemData.date}</time>
        <div>
          <img src={itemData.image} />
        </div>
        <div className="text-lg font-semibold text-base-content">
          {itemData.title}
        </div>
        <div className="text-lg font-black text-base-content">
          {itemData.company}
        </div>
        <div className="font-mono italic">{itemData.location}</div>
        {itemData.desc}
      </div>
      <hr />
    </li>
  );
}
