import { LoginAction, LogoutAction } from '../types';

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const loginAction = (id: string): LoginAction => ({
  type: LOG_IN,
  id,
});

export const logoutAction = (): LogoutAction => ({
  type: LOG_OUT,
});
