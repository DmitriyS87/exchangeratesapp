import React from 'react';

import TITLE_CONSTANTS from '../constants/title.constant';

const Title = () => (
  <section className="title">
    <div className="title__container">
      <h1 className="title__text">
        {TITLE_CONSTANTS.TITLE}
      </h1>
    </div>
  </section>
);

export default Title;
