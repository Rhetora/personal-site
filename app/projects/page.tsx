interface ProjectItem {
  title: string;
  org: string;
  description: string;
  repoUrl: string;
  liveUrl: string;
  technologies: string[];
}

const projectItems: ProjectItem[] = [
  {
    title:
      "Recognising the Activities of African Wild Dogs Using Machine Learning",
    org: "University",
    description:
      "My 4th Year University group dissertation project, to use machine learning techniques to clasify the activities of African Wild Dogs from IMU data. The project involved data collection, labelling, feature extraction, and implementation of ML methods. The finished solution utilised deep learning techniques, with time series feature extraction using the fourier and wavelet transforms.",
    repoUrl:
      "https://github.com/Rhetora/4th-year-project/blob/main/ELEC6200_GDP___Final_Report.pdf",
    liveUrl: "test.com",
    technologies: ["Python", "Machine Learning", "SKLearn"],
  },
  {
    title: "Predicting used car prices using machine learning",
    org: "University",
    description:
      "An exploratory project using the Kaggle Used Cars database to produce a model that accurately predicted a used cars price. Supervised techniques such as XGBoost and emsembling were utilised.",
    repoUrl:
      "https://github.com/Rhetora/aml-coursework/blob/main/COMP6208__AML_Machine_Learning_Report.pdf",
    liveUrl: "test.com",
    technologies: ["Python", "Machine Learning", "SKLearn"],
  },
  {
    title:
      "Use of Embedded devices in rehabilitation monitoring for leg surgery patients ",
    org: "University",
    description:
      "My 3rd year individual dissertation project. Utilising IMU measurements and sensor fusion to provide metrics useful in the context of monitoring leg surgery rehabilitation. An embedded device was produced alongside a C# mobile application.",
    repoUrl:
      "https://github.com/Rhetora/3rd-year-project/blob/main/Final%20Report.pdf",
    liveUrl: "test.com",
    technologies: ["C", "C#", "Circuit Design", "Mbed OS"],
  },
  {
    title: "Should I go kitesurfing?",
    org: "Personal",
    description:
      "A NextJS project that scrapes wind data from user inputted locations, and determines whether the conditions are good for the user to go kitesurfing. WIP",
    repoUrl: "https://github.com/Rhetora/should-i-go-kitesurfing",
    liveUrl: "test.com",
    technologies: ["NextJS", "TailwindCSS", "Typescript"],
  },
  {
    title: "University Surf Club Website",
    org: "SuSurf",
    description:
      "A website built for my University Surf Club, to provide information about the club, and to allow members to sign up for events. The site was built to streamline a number of aspects of running the club, and also to streamline the experience for members. The site was designed to be easily maintainable by non-technical users.",
    repoUrl: "https://www.susurf.co.uk",
    liveUrl: "test.com",
    technologies: ["Python", "Django", "Bootstrap", "Nginx"],
  },
];

export default function Projects() {
  return (
    <div className="p-2 lg:p-20">
      {projectItems.map(
        (item, index) =>
            <ProjectCard itemData={item} key={index} />
      )}
    </div>
  );
}

const ProjectCard = ({
  itemData
}: {
  itemData: ProjectItem;
}) => {
  return (
    <div className="card card-bordered m-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-base-200 flex flex-col md:flex-row">
      <div className="card-body flex-grow lg:w-3/4">
        <h2 className="card-title font-bold">
          {itemData.title}
          <div className="italic font-light">{itemData.org}</div>
        </h2>
        <p>{itemData.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {itemData.technologies.map((tech, index) => (
            <span key={index} className="badge badge-accent">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center p-4">
        {itemData.repoUrl && (
          <a
            href={itemData.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
            View Project
          </a>
        )}
      </div>
    </div>
  );
};
