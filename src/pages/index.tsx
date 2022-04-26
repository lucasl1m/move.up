import Head from "next/head";

import { CountdownProvider } from "../contexts/CountdownContext";

import ChallengeBox from "../components/ChallengeBox";
import CompletedChallenge from "../components/CompletedChallenge";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";

import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Move.Up</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenge />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </Container>
  );
}
