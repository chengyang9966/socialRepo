import Calendar from 'react-calendar';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import '../css/calander.css';
import moment from 'moment';
import Card from './Card';
const Calander = ({ sideBar, sideBaritem }) => {
  const [value, onChange] = useState(new Date());
  const [addCard, setAddCArd] = useState(false);

  return sideBar ? (
    <div className='container'>
      <div className='row align-items-start'>
        <div className='col-8'>
          <Calendar
            onChange={(value, event) => {
              onChange(value);
            }}
          />
        </div>
        <div className='col-4'>
          <div className='d-flex align-items-center justify-content-between'>
            <h4> {moment(value).format('dddd')}</h4>
            <button
              onClick={() => {
                setAddCArd(!addCard);
              }}
              className='btn btn-success'
              style={{ borderRadius: 36, padding: '.22rem .65rem' }}
            >
              +
            </button>
          </div>
          {sideBaritem.length > 0
            ? sideBaritem.map((w) => {
                return (
                  <div
                    key={w.Title}
                    className='card my-3'
                    style={{ width: '100%', borderRadius: '0.8rem' }}
                  >
                    <div
                      className='card-header'
                      style={{
                        borderTopLeftRadius: '0.8rem',
                        borderTopRightRadius: '0.8rem'
                      }}
                    >
                      {w.Title}
                    </div>
                    <div
                      className='card-body'
                      style={{
                        borderBottomLeftRadius: '0.8rem',
                        borderBottomRightRadius: '0.8rem'
                      }}
                    >
                      <div className='card-text d-flex justify-content-between align-item-center'>
                        <div>{w.Time}</div>
                        <div>{w.Location}</div>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      {addCard && <Card close={() => setAddCArd(false)} />}
    </div>
  ) : (
    <Calendar onChange={onChange} value={value} />
  );
};

export default Calander;
