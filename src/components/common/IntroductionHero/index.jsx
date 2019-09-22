import React from 'react';
import headerImage from 'static/images/florensis.png';

import Button from 'components/common/Button';

const IntroductionHero = () => {
  return (
    <section>
      <header>
        <img src={headerImage} alt="Header" />
        <h1>Work</h1>
        <Button />
      </header>
    </section>
  );
};

export default IntroductionHero;
