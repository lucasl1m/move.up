import { ThemeProvider } from "styled-components";
import { ChallengesProvider } from "../contexts/ChallengesContext";

import GlobalStyle from "../styles/GlobalStyle";
import { theme } from "../styles/themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ChallengesProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ChallengesProvider>
    </ThemeProvider>
  );
}

export default MyApp;
