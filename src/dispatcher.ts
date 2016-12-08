/**
 * @file dispatcher.
 */

import { Dispatcher } from 'flux';

export interface Action {
  type   : string,
  payload: any
}

const instance = new Dispatcher<Action>();

export const dispatch = instance.dispatch.bind(instance);
export default instance;
