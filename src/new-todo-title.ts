/**
 * @file Store: 新規Todoタイトル
 */

import { ReduceStore } from 'flux/utils';
import dispatcher from './dispatcher';

export interface Action {
  type   : string,
  payload: any
}

export class NewTodoTitleStore extends ReduceStore<string, Action> {
  getInitialState(): string {
    return '';
  }

  reduce(state: string, action: Action): string {
    return state;
  }
}

const instance = new NewTodoTitleStore(dispatcher);
export default instance;
