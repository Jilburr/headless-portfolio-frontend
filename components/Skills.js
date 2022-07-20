import Skill from "./Skill";

const Skills = ({ skills, skillgroupId }) => {
  return (
    <div className="parent">
      {skills.map((skill) => {
        if (skill.attributes.skillgroup.data.id === skillgroupId) {
          return <Skill skill={skill} />;
        }
      })}
    </div>
  );
};

export default Skills;
