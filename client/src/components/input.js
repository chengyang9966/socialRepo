import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLock,
  faEnvelope,
  faFileAlt
} from '@fortawesome/free-solid-svg-icons';
function Input({
  name,
  placeholder,
  icon = true,
  value,
  type = 'text',
  onchange = () => {}
}) {
  let defaultclassNameString = 'symbol-input100';
  const onFocus = () => {
    setStyleString('focus-input100');
  };
  const onBlur = () => {
    setStyleString(defaultclassNameString);
  };
  const [view, setView] = useState(false);
  const [styleString, setStyleString] = useState(defaultclassNameString);
  return (
    <div className='wrap-input100 validate-input'>
      <input
        name={name}
        value={value}
        type={view ? view : type}
        placeholder={placeholder}
        className='input100'
        required
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
        onChange={onchange}
      />
      {icon ? (
        <div
          className={styleString}
          style={type === 'password' ? { cursor: 'pointer' } : {}}
          onClick={() => setView(!view)}
        >
          <FontAwesomeIcon
            icon={
              type === 'email'
                ? faEnvelope
                : type === 'text'
                ? faFileAlt
                : faLock
            }
          />
        </div>
      ) : null}
      {styleString === 'focus-input100' ? (
        <div
          className={defaultclassNameString}
          style={type === 'password' ? { cursor: 'pointer' } : {}}
          onClick={() => setView(!view)}
        >
          <FontAwesomeIcon
            icon={
              type === 'email'
                ? faEnvelope
                : type === 'text'
                ? faFileAlt
                : faLock
            }
          />
        </div>
      ) : null}
    </div>
  );
}

export default Input;
