import React, { useEffect, useState } from 'react';
import Wrapper from '../../components/Wrapper';
import { motion, AnimatePresence } from 'framer-motion';
import SubHeader from '../../components/subHeader';
import Calander from '../../components/Calander';
import API, { METHODS } from '../../utils/api';
import moment from 'moment';
const Testing = () => {
  const [activities, SetActivities] = useState([]);
  useEffect(() => {
    API({
      url: `/api/activities/`,
      method: METHODS.GET,
      params: {
        userid: localStorage.getItem('userId'),
        date: moment(new Date()).format('DD-MM-yyyy'),
        limit: 10
      }
    }).then((result) => {
      SetActivities(result);
    });
  }, []);
  let initialState = [
    {
      active: true,
      disable: false,
      name: 'Planning'
    },
    {
      active: false,
      disable: false,
      name: 'Test'
    }
  ];
  let newPageItem = [
    {
      name: 'Planning',
      value: <Calander sideBar sideBaritem={activities} />
    }
  ];

  return (
    <div>
      <Wrapper sideMenu>
        <h3 className='mb-3'>Calander</h3>
        <SubHeader items={initialState} arrOfItems={newPageItem} />
      </Wrapper>
    </div>
  );
};

export default Testing;
