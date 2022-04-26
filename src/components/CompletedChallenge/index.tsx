import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container } from './styles';

const CompletedChallenge: React.FC = () => {

  const {challengesCompleted} = useContext(ChallengesContext);

  return(
    <Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  );
}

export default CompletedChallenge;
