import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;

  > span {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.grayLine};
    margin: 0 1.5rem;
    position: relative;

    > div {
      height: 4px;
      border-radius: 4px;
      background: ${({ theme }) => theme.colors.green};

      .current-experience {
        position: absolute;
        top: 12px;
        transform: translateX(-50%);
        color: ${({ theme }) => theme.colors.text};
      }
    }
  }
`;
