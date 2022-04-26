import styled from "styled-components";

export const Container = styled.div`
  > button {
    width: 100%;
    height: 5rem;

    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    border: 0;
    border-radius: 5px;

    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};

    font-size: 1.25rem;
    font-weight: 600;

    transition: background-color 0.2s linear;

    p {
      display: flex;
      align-items: center;
    }

    img, svg {
      width: 1.5rem;
      height: 1.5rem;
      margin-left: 0.5em;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => theme.colors.blueDark};
    }

    &.active {
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.title};

      &:not(:disabled):hover {
        background: ${({ theme }) => theme.colors.red};
        color: ${({ theme }) => theme.colors.white};
      }
    }

    &:disabled {
      position: relative;

      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.text};
      cursor: not-allowed;

      &:after {
        position: absolute;

        content: " ";
        display: inline-block;

        width: 100%;
        height: .25rem;

        background: ${({ theme }) => theme.colors.green};

        bottom: 0;
      }
    }
  }
`;

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;
    }

    span:first-child {
      border-right: 1px solid #f0f1f3;
    }

    span:last-child {
      border-left: 1px solid #f0f1f3;
    }
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;
