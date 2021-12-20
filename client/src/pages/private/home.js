import React from 'react';
import AreaChats from '../../components/AreaChats';

import Wrapper from '../../components/Wrapper';

import '../../css/dashboard.css';

const Home = () => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];
  return (
    <Wrapper sideMenu>
      <div
        className='chartjs-size-monitor'
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          PointerEvent: 'none',
          visibility: 'hidden',
          zIndex: -1
        }}
      >
        <div
          className='chartjs-size-monitor-expand'
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            PointerEvent: 'none',
            visibility: 'hidden',
            zIndex: -1
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: 1000000,
              height: 1000000,
              left: 0,
              top: 0
            }}
          ></div>
        </div>
        <div
          className='chartjs-size-monitor-shrink'
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            PointerEvent: 'none',
            visibility: 'hidden',
            zIndex: -1
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '200%',
              height: '200%',
              left: 0,
              top: 0
            }}
          ></div>
        </div>
      </div>
      <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom'>
        <h1 className='h2'>Dashboard</h1>
        <div className='btn-toolbar mb-2 mb-md-0'>
          <div className='btn-group mr-2'>
            <button className='btn btn-sm btn-outline-secondary'>Share</button>
            <button className='btn btn-sm btn-outline-secondary'>Export</button>
          </div>
          <button className='btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-calendar'
              style={{ marginRight: 5 }}
            >
              <rect x='3' y='4' width='18' height='18' rx='2' ry='2'></rect>
              <line x1='16' y1='2' x2='16' y2='6'></line>
              <line x1='8' y1='2' x2='8' y2='6'></line>
              <line x1='3' y1='10' x2='21' y2='10'></line>
            </svg>
            This week
          </button>
        </div>
      </div>
      <AreaChats data={data} />

      <h2>Section title</h2>
      <div className='table-responsive'>
        <table className='table table-striped table-sm'>
          <thead>
            <tr>
              <th>#</th>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>Lorem</td>
              <td>ipsum</td>
              <td>dolor</td>
              <td>sit</td>
            </tr>
            <tr>
              <td>1,002</td>
              <td>amet</td>
              <td>consectetur</td>
              <td>adipiscing</td>
              <td>elit</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>Integer</td>
              <td>nec</td>
              <td>odio</td>
              <td>Praesent</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>libero</td>
              <td>Sed</td>
              <td>cursus</td>
              <td>ante</td>
            </tr>
            <tr>
              <td>1,004</td>
              <td>dapibus</td>
              <td>diam</td>
              <td>Sed</td>
              <td>nisi</td>
            </tr>
            <tr>
              <td>1,005</td>
              <td>Nulla</td>
              <td>quis</td>
              <td>sem</td>
              <td>at</td>
            </tr>
            <tr>
              <td>1,006</td>
              <td>nibh</td>
              <td>elementum</td>
              <td>imperdiet</td>
              <td>Duis</td>
            </tr>
            <tr>
              <td>1,007</td>
              <td>sagittis</td>
              <td>ipsum</td>
              <td>Praesent</td>
              <td>mauris</td>
            </tr>
            <tr>
              <td>1,008</td>
              <td>Fusce</td>
              <td>nec</td>
              <td>tellus</td>
              <td>sed</td>
            </tr>
            <tr>
              <td>1,009</td>
              <td>augue</td>
              <td>semper</td>
              <td>porta</td>
              <td>Mauris</td>
            </tr>
            <tr>
              <td>1,010</td>
              <td>massa</td>
              <td>Vestibulum</td>
              <td>lacinia</td>
              <td>arcu</td>
            </tr>
            <tr>
              <td>1,011</td>
              <td>eget</td>
              <td>nulla</td>
              <td>Class</td>
              <td>aptent</td>
            </tr>
            <tr>
              <td>1,012</td>
              <td>taciti</td>
              <td>sociosqu</td>
              <td>ad</td>
              <td>litora</td>
            </tr>
            <tr>
              <td>1,013</td>
              <td>torquent</td>
              <td>per</td>
              <td>conubia</td>
              <td>nostra</td>
            </tr>
            <tr>
              <td>1,014</td>
              <td>per</td>
              <td>inceptos</td>
              <td>himenaeos</td>
              <td>Curabitur</td>
            </tr>
            <tr>
              <td>1,015</td>
              <td>sodales</td>
              <td>ligula</td>
              <td>in</td>
              <td>libero</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default Home;
