import React from 'react';
import { useState } from 'react';
import { Style } from './style';

const InPut = ({ placeholder, name, label ,value, setInfo}) => {
  const [isFocused, setisFocused] = useState(false);
  return (
    <Style>
      <p className="label">{label}</p>
      <input
        value={value}
        onFocus={() => setisFocused(true)}
        onBlur={() => setisFocused(false)}
        name={name}
        onChange={e => setInfo(info=>({
            ...info,
            [name]: e.target.value
        }))}
        className={!isFocused && value?.length > 0 && 'no-outline'}
        placeholder={placeholder}></input>
    </Style>
  );
};

export default InPut;
