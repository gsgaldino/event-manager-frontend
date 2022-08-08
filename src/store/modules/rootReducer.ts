import { combineReducers } from 'redux';

import common from './common/slice';
import user from './user/slice';
import event from './event/slice';

export default combineReducers({
  common,
  user,
  event,
});
