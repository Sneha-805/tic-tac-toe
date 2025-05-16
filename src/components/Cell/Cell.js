import './Cell.css';
import React from 'react';
import classNames from 'classnames';
export const Cell=(props)=> {
  const cellClasses=classNames({
    cell:true,
    winner:props.canHighlight
  });
  const cellContentClasses=classNames({
    'cell-content':true,
    populated:props.value
  });
  return (
   
    <button class={cellClasses} onClick={props.onClick}>
        <span class={cellContentClasses}>{props.value}</span>
    </button>
  );
}

