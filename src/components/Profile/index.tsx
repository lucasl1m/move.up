import React, { useContext } from "react";

import Image from "next/image";

import { Container } from "./styles";
import { ChallengesContext } from "../../contexts/ChallengesContext";

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <Container>
      <img src="https://github.com/lucasl1m.png" alt="Profile" />
      <div>
        <strong>Lucas Araújo de Lima</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Container>
  );
};

export default Profile;
