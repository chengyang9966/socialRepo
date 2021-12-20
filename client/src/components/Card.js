import React, { useCallback, useEffect } from 'react';

const Card = ({ close }) => {
  const keydownListener = useCallback((keydownEvent) => {
    const { key, target, repeat } = keydownEvent;
    if (key === 'Escape') {
      close();
    }
    if (repeat) return;
  }, []);
  useEffect(() => {
    window.addEventListener('keydown', keydownListener, true);
    return () => window.removeEventListener('keydown', keydownListener, true);
  }, [keydownListener]);

  return (
    <main
      onClick={() => console.log('clicked')}
      className='loading d-flex align-items-center justify-content-center'
      style={{ backgroundColor: '#d3d3d3cf' }}
    >
      <div
        tabIndex='1'
        // onBlur={(e) => console.log(e.target.)}
        className='card w-50 h-25'
        style={{ borderRadius: '0.8rem', position: 'relative' }}
      >
        <div
          className='card-body'
          style={{ borderRadius: '0.8rem', zIndex: 999999 }}
        >
          <h5 className='card-title'>Card title</h5>
          <h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <button
          className='d-flex align-items-center justify-content-center btn btn-secondary'
          style={{
            position: 'absolute',
            right: -10,
            top: -10,
            width: 30,
            height: 30,
            borderRadius: '5rem',

            textAlign: 'center',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
          onClick={close}
        >
          X
        </button>
      </div>
    </main>
  );
};

export default Card;
