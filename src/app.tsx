///<reference path="../node_modules/@types/react/index.d.ts"/>
/**
 * @file アプリケーションコンテナー
 */

import * as React from 'react';
import { Container } from 'flux/utils';
import newTodoTitleStore, { NewTodoTitleStore } from './new-todo-title';
import SyntheticEvent = React.SyntheticEvent;
import FormEvent = React.FormEvent;

export interface AppState {
  newTodoTitle: string
}

export class App extends React.Component<{}, AppState> {
  /**
   * ストアを取得する
   * @returns {[NewTodoTitleStore]}
   */
  static getStores(): Array<NewTodoTitleStore> {
    return [
      newTodoTitleStore
    ]
  }

  /**
   * ステートを算出する
   * @returns {{newTodoTitle: string}}
   */
  static calculateState(): AppState {
    return {
      newTodoTitle: newTodoTitleStore.getState()
    }
  }

  /**
   * レンダラー
   * @returns {any}
   */
  render() {
    // キャッシュ
    const { newTodoTitle } = this.state;

    // JSXテンプレート
    return (
      <div className="app">
        <header className="app__header">
          <h1>TodoMVC</h1>
        </header>
        <main role="main" className="app__main">
          <form action="post">
            <p><input type="text" value={newTodoTitle}  placeholder="to do something..." /></p>
          </form>
        </main>
      </div>
    );
  }
}

export default Container.create(App);
