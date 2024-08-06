const formattedSkillName = (skill: string) => {
  return skill.toLowerCase().replace(/[.-]/g, '');
};

export default formattedSkillName;
