import React from 'react';

import * as S from './style';

const Title = ({ children }) => {
  return (
    <S.Title>
      <a href="https://esbuild.github.io/" target="_blank" rel="noreferrer">
        {children}
      </a>
    </S.Title>
  );
};

export default Title;
