const Skill = ({ skill }) => {
  return (
    <>
      <span>{skill.attributes.name}</span>
      <div>
        <div className="bar_bg">
          <div
            style={{ width: skill.attributes.percentage + "%" }}
            className="bar_progress"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Skill;
