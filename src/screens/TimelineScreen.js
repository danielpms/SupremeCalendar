import React from 'react';
import TimelineLayout from '../layouts/TimelineLayout';
import tasksData from '../data/test/tasksData';

const TimelineScreen = () => {
  const oData = tasksData();

  return (
    <TimelineLayout oData={oData}/>
  );
};

export default TimelineScreen;
