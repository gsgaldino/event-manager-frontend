import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import IconButton from 'components/IconButton';

import Profile from 'assets/icons/Profile';

import { rootState } from 'store';
import UserIcon from '../UserIcon';

export interface IProfileIconProps { }

const ProfileIcon: React.FunctionComponent<IProfileIconProps> = () => {
  const { loggedUser } = useSelector((s: rootState) => s.user);

  const isLogged = Boolean(loggedUser.dashboardToken);

  useEffect(() => {}, [isLogged]);

  return (
    <div>
      {isLogged ? (
        <Link to="/profile">
          <IconButton icon={<UserIcon />} />
        </Link>
      ) : (
        <div>
          <IconButton disabled icon={<Profile />} />
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
