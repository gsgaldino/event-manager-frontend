import React from 'react';

import { useSelector } from 'react-redux';

import Typography from 'components/Typography';

import { rootState } from 'store';

const EventInfo: React.FunctionComponent = () => {
  const { event } = useSelector((s: rootState) => s.event);
  return (
    <Typography>
      {event.description}
    </Typography>
  );
};

export default EventInfo;
