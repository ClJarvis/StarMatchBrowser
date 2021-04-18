import React from 'react';
import StarsDisplay from './StarDisplay'

const PlayNumber = props => (
  <button
    className="number"
    style={{backgroundColor: colors[props.status]}}
    onClick={() => props.onClick(props.number, props.status)}
  >
    {props.number}
  </button>
);

const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};
export default PlayNumber;
