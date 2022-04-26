import React, { useContext } from "react";

import { MdClose, MdPlayArrow } from 'react-icons/md';

import { CountdownContext } from "../../contexts/CountdownContext";

import { Container, CountdownContainer } from "./styles";

const Countdown: React.FC = () => {
  const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown } =
    useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <Container>
      <CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownContainer>

      {hasFinished ? (
        <button disabled>
          Ciclo encerrado
          <img src="icons/check_circle.svg" alt="" className="icon" />
        </button>
      ) : (
        <>
          {isActive ? (
            <button type="button" onClick={resetCountdown} className="active">
              <p>
                Abandonar ciclo
                <MdClose />
              </p>
            </button>
          ) : (
            <button type="button" onClick={startCountdown}>
              <p>
                Iniciar um ciclo
                <MdPlayArrow />
              </p>
            </button>
          )}
        </>
      )}
    </Container>
  );
};

export default Countdown;
