import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { CountdownContext } from "../../contexts/CountdownContext";

import { Container } from "./styles";

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completeChallenge } =
    useContext(ChallengesContext);

  const { resetCountdown, isActive } = useContext(CountdownContext);

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  return (
    <Container>
      {activeChallenge ? (
        <div className="challengeActive">
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            {activeChallenge.type === "body" ? (
              <img src="icons/body.svg" alt="" />
            ) : (
              <img src="icons/eye.svg" alt="" />
            )}

            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className="challengeFailedButton"
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className="challengeSucceededButton"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <>
          {isActive ? (
            <div className="challengeNotActive">
              <strong>Inicie um ciclo para receber desafios a serem completados</strong>

              <p>
                <img src="icons/level-up.svg" alt="Level Up"/>
                Complete-os e ganhe experiência e avance de level.
              </p>
            </div>
          ) : (
            <div className="challengeNotActive">
              <strong>Inicie um ciclo para receber desafios</strong>

              <p>
                <img src="/icons/level-up.svg" alt="Level Up"/>
                Avance de level completando os desafios.
              </p>
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default ChallengeBox;
