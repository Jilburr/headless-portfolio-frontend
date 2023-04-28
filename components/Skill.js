const Skill = ({ skill }) => {
  return (
    <>
      <span>{skill.attributes.name}</span>
      <div>
        <div className="skills__bar-bg">
          <div
            style={{ width: skill.attributes.percentage + "%" }}
            className="skills__bar-progress"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Skill;
