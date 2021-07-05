import React from "react";
import Head from "next/head";

import {
  HomeMain,
  HomeFooter,
  HomeContainer,
  HomeHeader,
} from "styles/pagesStyles/Home.styles";
import BookList from "src/components/BookList";

export default function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>Zeelo app</title>
        <meta
          name="app requested by zeelo"
          content="Generated by Ángel Bernardo Lupiáñez"
        />
        <link rel="icon" href="/favi.ico" />
      </Head>
      <HomeHeader>Header</HomeHeader>
      <HomeMain>
        <BookList />
      </HomeMain>

      <HomeFooter>
        <div>
          Made by <br /> Ángel Bernardo Lupiáñez
        </div>
        <div>Powered by passion</div>
      </HomeFooter>
    </HomeContainer>
  );
}
