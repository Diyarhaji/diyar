import { useState } from "react";
import images from "../assets/Images";
import { useTranslation } from "react-i18next";


const ProjectFilter = () => {
   const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("All");

 const categories = [
    { value: "All", label: t("all") },
    { value: "Portfolio", label: t("portfolio") },
    { value: "Travel", label: t("travel") },
    { value: "Shop", label: t("shop") },
  ];

  const projects = [
    {
      id: 1,
      title: t("title-1"),
      image: images.p1,
      lCode1: ["JavaScript", "React", "Tailwind"],
      description: t("description-1"),
      live: "https://www.instagram.com/k.codestan/p/DJ_RqnciZAh/?next=%2F",
      category: "Portfolio",
    },
    {
      id: 2,
      title: t("title-2"),
      image: images.p2,
      lCode1: ["React", "Tailwind"],
      description: t("description-2"),
      live: "https://www.instagram.com/k.codestan/p/DJtk1z-CocA/?next=%2F",
      category: "Portfolio",
    },
  {
    id: 3,
    title: t('title-3'),
    image: images.p3,
    lCode1: ["HTML", "CSS"],
    description: t('description-3'),
    live: "https://www.instagram.com/k.codestan/p/DJuhrOeic0F/?next=%2F",
    category: "Portfolio"
  },
  {
    id: 4,
    title: t('title-4'),
    image: images.p4,
    lCode1: ["JavaScript", "Tailwind"],
    description: t('description-4'),
    live: "https://diyarhaji.github.io/portfolio",
    category: "Portfolio"
  },
  {
    id: 5,
    title: t('title-5'),
    image: images.p5,
    lCode1: ["CSS", "JavaScript", "React"],
    description: t('description-5'),
    live: "https://www.instagram.com/k.codestan/p/DJhbyFziPIe/?next=%2F",
    category: "Portfolio"
  },
  {
    id: 6,
    title: t('title-6'),
    image: images.p6,
    lCode1: ["CSS", "JavaScript", "React"],
    description: t('description-6'),
    live: "https://www.instagram.com/k.codestan/p/DJhblfniv6l/?next=%2F",
    category: "Portfolio"
  },
  {
    id: 7,
    title: t('title-7'),
    image: images.p7,
    lCode1: ["HTML", "CSS", "JavaScript"],
    description: t('description-7'),
    live: "https://www.instagram.com/k.codestan/p/DJhbP1QiIsB/?next=%2F",
    category: "Portfolio"
  },
  {
    id: 8,
    title: t('title-8'),
    category: "Shop",
    image: images.s1,
    lCode1: ["React", "Tailwind"],
    description: t('description-8'),
    live: "https://www.instagram.com/k.codestan/p/DJ2MhopCsbc/?next=%2F",
  },
  {
    id: 9,
    title: t('title-9'),
    category: "Shop",
    image: images.s2,
    lCode1: ["HTML", "CSS", "JavaScript"],
    description: t('description-9'),
    live: "",
  },
  {
    id: 10,
    title: t('title-10'),
    category: "Shop",
    image: images.s3,
    lCode1: ["HTML", "CSS", "JavaScript"],
    description: t('description-10'),
    live: "https://www.instagram.com/k.codestan/p/DJzn38dCD-x/?next=%2F",
  },
  {
    id: 12,
    title: t('title-12'),
    category: "Shop",
    image: images.s4,
    lCode1: ["HTML", "CSS", "React"],
    description: t('description-12'),
    live: "https://www.instagram.com/k.codestan/p/DJuZsJZChpj/?next=%2F",
  },
  {
    id: 13,
    title: t('title-13'),
    category: "Shop",
    image: images.s5,
    lCode1: ["React", "Tailwind"],
    description: t('description-13'),
    live: "https://www.instagram.com/k.codestan/p/DJzGMEECr13/?next=%2F",
  },
  {
    id: 14,
    title: t('title-14'),
    category: "Shop",
    image: images.s6,
    lCode1: ["HTML", "JavaScript", "React", "Tailwind"],
    description: t('description-14'),
    live: "https://www.instagram.com/k.codestan/p/DJpYOA4Cuct/?next=%2F",
  },
  {
    id: 15,
    title: t('title-15'),
    category: "Shop",
    image: images.s7,
    lCode1: ["HTML", "CSS", "JavaScript"],
    description: t('description-15'),
    live: "https://www.instagram.com/k.codestan/p/DJoO2cUiH0C/?next=%2F",
  },
  {
    id: 16,
    title: t('title-16'),
    category: "Shop",
    image: images.s8,
    lCode1: ["HTML", "CSS", "React"],
    description: t('description-16'),
    live: "https://www.instagram.com/k.codestan/p/DJizraAi48q/?next=%2F",
  },
  {
    id: 17,
    title: t('title-17'),
    category: "Shop",
    image: images.s9,
    lCode1: ["React", "Tailwind"],
    description: t('description-17'),
    live: "https://www.instagram.com/k.codestan/p/DHecx5siyss/?next=%2F",
  },
  {
    id: 18,
    title: t('title-18'),
    category: "Shop",
    image: images.s10,
    lCode1: ["HTML", "CSS", "JavaScript", "React"],
    description: t('description-18'),
    live: "https://www.instagram.com/k.codestan/p/DH_3au-i3KM/?next=%2F",
  },
  {
    id: 19,
    title: t('title-19'),
    category: "Shop",
    image: images.s11,
    lCode1: ["JavaScript", "React", "Tailwind"],
    description: t('description-19'),
    live: "https://www.instagram.com/k.codestan/p/DJoPh3Ji83b/?next=%2F",
  },
  {
    id: 21,
    title: t('title-21'),
    category: "Travel",
    image: images.t1,
    lCode1: ["HTML", "CSS", "JavaScript"],
    description: t('description-21'),
    live: "https://www.instagram.com/k.codestan/p/DJ7nbmWiKlz/?next=%2F",
  },
  {
    id: 22,
    title: t('title-22'),
    category: "Travel",
    image: images.t2,
    lCode1: ["HTML", "JavaScript", "Tailwind"],
    description: t('description-22'),
    live: "https://www.instagram.com/k.codestan/p/DJjjf4_CEVV/?next=%2F",
  },
  {
    id: 23,
    title: t('title-23'),
    category: "Travel",
    image: images.t3,
    lCode1: ["React", "Tailwind"],
    description: t('description-23'),
    live: "https://www.instagram.com/k.codestan/p/DJkRsvci75O/?next=%2F",
  },
  {
    id: 24,
    title: t('title-24'),
    category: "Travel",
    image: images.t4,
    lCode1: ["HTML", "CSS", "JavaScript"],
    description: t('description-24'),
    live: "https://www.instagram.com/k.codestan/p/DJlene7ChVw/?next=%2F",
  },
  {
    id: 25,
    title: t('title-25'),
    category: "Travel",
    image: images.t5,
    lCode1: ["HTML", "JavaScript", "React", "Tailwind"],
    description: t('description-25'),
    live: "https://www.instagram.com/k.codestan/p/DJkRsvci75O/?next=%2F",
  },
  {
    id: 26,
    title: t('title-26'),
    category: "Travel",
    image: images.t6,
    lCode1: ["React", "Tailwind"],
    description: t('description-26'),
    live: "https://www.instagram.com/k.codestan/p/DJkRsvci75O/?next=%2F",
  }
   
  
  ];

     const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);
  return (
    <div className="p-6 max-sm:py-20 py-20">
      {/* Filter Buttons */}
      <div
        data-aos="zoom-in-up"
        data-aos-duration="800"
        className="flex max-sm:text-md max-sm:px-3 gap-4 mx-auto mb-16 max-w-max py-3 px-12 rounded-full bg-[#0c2941]"
      >
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-6 max-sm:px-3 max-sm:py-1 py-2 rounded-full border ${
              activeCategory === cat.value
                ? "bg-[#3a4f60] text-white border-none"
                : "bg-[#0c2941] text-white border-none"
            } transition duration-300`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((project) => (
          <div
            data-aos="zoom-in-up"
            data-aos-duration="800"
            key={project.id}
            className="bg-[#0c2941] hover:bg-[#163248] transition-all group duration-500 border border-[#0c2941] rounded-xl shadow hover:shadow-lg flex flex-col max-sm:h-[500px] h-[500px] overflow-hidden"
          >
            {/* Top Half: Image */}
            <div className="h-1/2 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full group-hover:scale-110 transition-all duration-500 scale-100 object-fill"
              />
            </div>

            {/* Bottom Half */}
            <div className="h-1/2 p-4 flex flex-col justify-between">
              <div>
                <h1
                  data-aos="fade-right"
                  data-aos-duration="900"
                  className="text-xl font-semibold mb-2"
                >
                  {project.title}
                </h1>
                <p
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  className="text-md text-gray-200"
                >
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap max-sm:mt-3 gap-2 mb-1">
                {project.lCode1.map((tech, index) => (
                  <span
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    key={index}
                    className="text-sm bg-[#102231] text-white px-3 py-2 rounded-full border-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                data-aos="zoom-out-up"
                data-aos-duration="1400"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 mx-auto w-full py-2 bg-[#102231] text-center mb-1 text-white rounded-full text-lg"
              >
                {t('view_live')}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;