import React from "react";
import * as S from "../Style/PageOneStyle";

export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Section>
        <S.H2>How many tenses does the verb "do" have?</S.H2>
         <p>7 tempos verbais</p>
        <S.H2>What does the verb "Have" indicate as a main position?</S.H2>
          <p>Indica posse, como o verbo "ter", em português. Podendo também indicar uma ação.</p>
        <S.H2>
          Create two sentences with cognate words for "joy" and "sadness"
        </S.H2>
        <S.H2>
          What is the difference between the verb "will" and "going to"?      
        </S.H2>
          <p>"Will" é utilizado com expressões de incerteza, já o "going to" é utilizado quando deseja falar algo já foi planejado e decidido</p>
        <S.H2>Name four interrogative pronouns (Em inglês)</S.H2>
          <ol>Who</ol>
          <ol>Why</ol>
          <ol>How</ol>
          <ol>What</ol>
        <S.H2>How many types of adverbs are there in English?</S.H2>
          <p>7 tipos de advérbios</p>
      </S.Section>
      <S.Box>
        <S.H3>Create a sentence for an adverb of time (Em inglês)</S.H3>
          <p>Today I finish this challenge.</p>
        <S.H3>Create a mnemonic phrase (Em inglês)</S.H3>
      </S.Box>
    </S.Container>
  );
}
