import React, { useEffect } from 'react';
import FirstAndSecond from '../components/FirstAndSecond';
import Header from '../components/Header';
import { Main, Section, Sticky } from '../styles/home.styles';

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Header />
      <Main style={{ height: '1610vh' }}>
        <Section style={{ height: '72.7%' }}>
          <FirstAndSecond />
        </Section>
        <Section style={{ height: '9.7%' }}>
          <Sticky className="third"></Sticky>
        </Section>
        <Section style={{ height: '10.1%' }}>
          <Sticky className="fourth"></Sticky>
        </Section>
      </Main>
    </>
  )
}
