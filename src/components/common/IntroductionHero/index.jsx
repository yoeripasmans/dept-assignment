import React from 'react';
import headerImage from 'static/images/florensis.png';

import {
  Container,
  Header,
  Image,
  Title,
} from './styled';

import Button from 'components/common/Button';

const IntroductionHero = () => {
  return (
    <Container>
      <Header>
        <Title>Work</Title>
        <Image src={headerImage} alt="Header" />
      </Header>
      <Button />
    </Container>
  );
};

export default IntroductionHero;
