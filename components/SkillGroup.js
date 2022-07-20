import Skills from "./Skills";

const SkillGroup = ({ skills, skillgroup }) => {
  return (
    <>
      <h4 key={skillgroup.id}>{skillgroup.attributes.name}</h4>
      <Skills skills={skills} skillgroupId={skillgroup.id} />
    </>
  );
};

export default SkillGroup;
