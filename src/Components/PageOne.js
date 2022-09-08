import React from "react";
import * as S from "../Style/PageOneStyle";

export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Header>
        <S.H1>FINAL ENGLISH CHALLENGE</S.H1>
      </S.Header>
      <S.Section>
        <S.H2>What "HTTPS" means?</S.H2>
          <p>Um meio de comunicação de sistemas que viabiliza a transferência de dados entre servidores e</p>
          <p>computadores na internet. Diferente do "HTTP", o "HTTPs" trata-se de uma comunicação com 
           segurança.</p>
        <S.H2>Stateless is...?</S.H2>
          <p>É uma aplicação do state isolada, sem a referência de alguma informação antiga que já foi armazenada.</p>
          <p>Cada Statelss é feita do zero. Basicamente, você faz um pergunta e recebe a resposta.</p>
        <S.H2>Subjective pronouns are used to indicate what?</S.H2>
        <>Para indicar o sujeito de uma frase.</>
        <S.H2>Could, Should and Would are know as...?</S.H2>
          <p>São conhecidos com verbos auxiliares, que são expressados como possibilidades.</p>
        <S.H2>What Should means?</S.H2>
          <p>Deve, devia, deveria... Depende do contexto.</p>
        <S.H2>*EM PORTUGUÊS* - Construa essas seguintes frases em inglês:</S.H2>
      </S.Section>
      <S.Div>
        <S.Ul>
          <li>1 - Vamos falar coisas ótimas sobre você!</li>
          <p>Let's talk things great about you</p>
          <li>2 - Ele vai para a Bahia mês que vem</li>
          <p>He goes to Bahia next month</p>
          <li>3 - Ela estará ai amanhã</li>
          <p>She will be there tomorrow</p>
        </S.Ul>
      </S.Div>
      <S.Box>
        <S.H3>Who is the subject of the sentence?</S.H3>
        <S.P>They gime me all the power</S.P>
          <p>(Eles) O sujeito é elíptico.</p>
        <S.H3>Conjugate the verb to be in the past tense (Em inglês)</S.H3>
          <ol>I was</ol>
          <ol>You ware</ol>
          <ol>He was</ol>
          <ol>We were</ol>
          <ol>They were</ol>
          <ol>You were</ol>
        <S.H3>
          Build two sentences using "this" and "that", in the plural (Em inglês)
        </S.H3>
      </S.Box>
    </S.Container>
  );
}
