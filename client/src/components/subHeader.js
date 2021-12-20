import React, { useState } from 'react';

/**
 *
 * @param {items}
 * active
 * disable
 * name
 *
 * @returns
 */
const SubHeader = ({ items, arrOfItems }) => {
  const [subHeaderArr, setSubHeader] = useState(items);
  const setActive = (index) => {
    let item = subHeaderArr;
    item = item.map((w) => {
      return {
        ...w,
        active: false
      };
    });
    item[index].active = true;
    setSubHeader(item);
  };
  const ShowItem = (name) => {
    let temp = subHeaderArr.find((w) => w.active);
    if (temp) {
      if (temp.name === name) {
        return true;
      }
      return false;
    }
    return false;
  };
  return (
    <>
      <div id='subHeader' className='nav'>
        {subHeaderArr.map((w, i) => {
          return (
            <p
              key={`${w}${i}`}
              className={`${w.active && 'active'} ${
                w.disabled && 'disabled'
              } nav-link `}
              onClick={() => setActive(i)}
            >
              {w.name}
            </p>
          );
        })}
      </div>
      <div className='bodyWrapper'>
        {arrOfItems.map((w) => {
          if (ShowItem(w.name)) {
            return <div key={w}>{w.value}</div>;
          }
          return <div key={w}></div>;
        })}
      </div>
    </>
  );
};

export default SubHeader;
