import React from 'react';

const style = {
  fontSize: 30,
  margin: 20,
  padding: 10
}

export const StyledButton = React.memo(({ onClick, label }) => (
  <span style={style}>
    <button style={style} onClick={onClick}>{label}</button>
  </span>
));