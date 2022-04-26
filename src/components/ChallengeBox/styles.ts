import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  .challengeNotActive {
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  .challengeNotActive strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.text};
  }

  .challengeNotActive p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.text};
    max-width: 70%;
    margin-top: 3rem;

    > img {
      margin-bottom: 1rem;
    }
  }

  .challengeActive {
    height: 100%;

    display: flex;
    flex-direction: column;
  }

  .challengeActive header {
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayLine};
  }

  .challengeActive main {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .challengeActive main strong {
    font-weight: 600;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.title};
    margin: 1.5rem 0 1rem;
  }

  .challengeActive main p {
    line-height: 1.5;
  }

  .challengeActive footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .challengeActive footer button {
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    color: ${({ theme }) => theme.colors.white};

    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.2s;
  }

  .challengeActive footer button:hover {
    filter: brightness(0.9);
  }

  .challengeActive footer button.challengeSucceededButton {
    background: ${({ theme }) => theme.colors.green};
  }

  .challengeActive footer button.challengeFailedButton {
    background: ${({ theme }) => theme.colors.red};
  }

  .challengeContainer p img {
    margin-bottom: 1rem;
  }
`;
