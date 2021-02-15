import React from "react";
import propTypes from "prop-types";

import * as S from "./style";

const Title = ({ children }) => {
  return (
    <S.Title>
      <a href="https://esbuild.github.io/" target="_blank" rel="noreferrer">
        {children}
      </a>
    </S.Title>
  );
};

Title.propTypes = {
  children: propTypes.node,
};
Title.defaultProps = {
  children: <div />,
};

export default Title;
