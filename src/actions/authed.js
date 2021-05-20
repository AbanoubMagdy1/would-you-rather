export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const loginAction = id => ({
  type: LOG_IN,
  id,
});

export const logoutAction = () => ({
  type: LOG_OUT,
});
