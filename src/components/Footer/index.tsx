import React from 'react';

import Provider from 'components/Provider';
import Typography from 'components/Typography';
import IconButton from 'components/IconButton';

import GithubIcon from 'assets/icons/GithubIcon';
import * as S from './styles';

const Footer = () => (
  <Provider>
    <S.Footer>
      <Typography>
        Feito com ♡ por gsgaldino
      </Typography>

      <a
        target="_blank"
        href="https://github.com/gsgaldino/event-manager-frontend"
        rel="noreferrer"
      >
        <IconButton variant="ghost">
          <GithubIcon />
        </IconButton>
      </a>
    </S.Footer>
  </Provider>
);

export default Footer;
