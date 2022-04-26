import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { Container } from "./styles";

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } =
    useContext(ChallengesContext);

  const porcentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  );

  return (
    <Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${porcentToNextLevel}%` }}>
          <span className="current-experience" style={{ left: `${porcentToNextLevel}%` }}>
            {currentExperience} xp
          </span>
        </div>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  );
};

export default ExperienceBar;
