import image1 from "../public/BnakhubThumbnail.png";

const projects = [
  {
    title: "BankHub",
    description:
      "Development and deployment of a modern banking system clone hosted on AWS-EC2 ",
    image: image1,
    tags: ["Javascript", "SQL", "AWS-EC2", "Terraform"],
  },
  {
    title: "Imaginate",
    description:
      "A Framework for Image Generation, Classification and Segmentation",
    image: "",
    tags: ["Python", "Streamlit"],
  },

  {
    title: "Sales Report DashBoard",
    description:
      "Created Amazing Dashboard using Power BI to visualize sales data.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["PowerBI"],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">
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
                  <span
                    key={tagIndex}
                    className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
