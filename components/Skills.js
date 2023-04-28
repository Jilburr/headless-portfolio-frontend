import Skill from "./Skill";

const Skills = ({ skills, skillgroupId }) => {
  return (
    <div className="skills__parent">
      {skills.map((skill) => {
        if (skill.attributes.skillgroup.data.id === skillgroupId) {
          return <Skill key={skill.id} skill={skill} />;
        }
      })}
    </div>
  );
};

export default Skills;
