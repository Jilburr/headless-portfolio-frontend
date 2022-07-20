import SkillGroup from "./SkillGroup";

const SkillGroups = ({ skillgroups, skills }) => {
  return (
    <section className="skills">
      {skillgroups.map((skillgroup) => {
        return (
          <SkillGroup
            key={skillgroup.id}
            skillgroup={skillgroup}
            skills={skills}
          />
        );
      })}
    </section>
  );
};

export default SkillGroups;

// if(skill.attributes.skillgroups.data.attributes.name === skillgroups.attributes.name)
