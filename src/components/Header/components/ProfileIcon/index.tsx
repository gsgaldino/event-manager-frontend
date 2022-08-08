import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import IconButton from 'components/IconButton';

import Icon from 'assets/icons/Profile';

import { rootState } from 'store';

export interface IProfileIconProps { }

const ProfileIcon: React.FunctionComponent<IProfileIconProps> = () => {
  const { loggedUser } = useSelector((s: rootState) => s.user);

  const isLogged = Boolean(loggedUser.dashboardToken);

  useEffect(() => {}, [isLogged]);

  return (
    <div>
      {isLogged ? (
        <div>
          <IconButton icon={<Icon />} />
        </div>
      ) : (
        <div>
          <IconButton disabled icon={<Icon />} />
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
