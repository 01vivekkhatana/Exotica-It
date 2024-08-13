import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
 
  {
    title: "Exotica It Solutions",
    position: "Fullstack Developer",
    time: "March 2024 - Dec 2024",
    location: "Mohali Chandigarh",
    description:
      "Managed and created complex projects from start to finish and also collaborated with other developers. Translated requirements into polished, high-level web application.",
    tech: ["React.js", "Node.js", "Python", "Git", "Github"],
  },
];
