import image1 from "../public/BankHub.png";
import image2 from "../public/Imaginate.png";
import image3 from "../public/Crop_prediction.png";
import image4 from "../public/PowerBI.png";

const projects = [
  {
    title: "BankHub",
    description:
      "Development and deployment of a modern banking system clone hosted on AWS-EC2 ",
    image: image1,
    tags: [
      { name: "Javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "SQL", url: "https://www.w3schools.com/sql/" },
      { name: "AWS-EC2", url: "https://aws.amazon.com/ec2/" },
      { name: "Terraform", url: "https://www.terraform.io/" },
    ],
  },
  {
    title: "Imaginate",
    description:
      "A Framework for Image Generation, Classification and Segmentation",
    image: image2,
    tags: [
      { name: "Python", url: "https://www.python.org/" },
      { name: "Streamlit", url: "https://streamlit.io/" },
    ],
  },
  {
    title: "Crop Yield Prediction using Machine Learning",
    description:
      "Predicted total yield of crops based on weather conditions, soil quality, and other factors.",
    image: image3,
    tags: [
      { name: "Python", url: "https://www.python.org/" },
      { name: "XGBoost", url: "https://xgboost.readthedocs.io/" },
      { name: "Scikit-Learn", url: "https://scikit-learn.org/" },
      { name: "Pandas", url: "https://pandas.pydata.org/" },
    ],
  },
  {
    title: "Power BI and Tableau",
    description:
      "Created Amazing Dashboard using Power BI to visualize sales data.",
    image: image4,
    tags: [
      { name: "PowerBI Work", url: "https://bit.ly/3C6SZJR" },
      { name: "Tableau Profile", url: "https://bit.ly/3Wc8KpE" },
    ],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-100">
        Featured Projects
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-purple-300">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <a
                    key={tagIndex}
                    href={tag.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                  >
                    {tag.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
