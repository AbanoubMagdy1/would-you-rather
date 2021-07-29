import { LOG_IN, LOG_OUT } from '../actions/authed';
import { LoginAction, LogoutAction } from '../types';

type Authed = LoginAction | LogoutAction;

export default function authedReducer(
  state: string | null = null,
  action: Authed
) {
  switch (action.type) {
    case LOG_IN:
      return action.id;
    case LOG_OUT:
      return null;
    default:
      return state;
  }
}
