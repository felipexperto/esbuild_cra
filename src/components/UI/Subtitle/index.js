import React from "react";
import propTypes from "prop-types";

import * as S from "./style";

const Subtitle = ({ children }) => {
  return <S.Subtitle>{children}</S.Subtitle>;
};

Subtitle.propTypes = {
  children: propTypes.node,
};
Subtitle.defaultProps = {
  children: <div />,
};

export default Subtitle;
