const formattedSkillName = (skill: string) => {
  return skill.toLowerCase().replace(/[.-\s]/g, '');
};

export default formattedSkillName;
