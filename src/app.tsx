/**
 * @file アプリケーションコンテナー
 */

import * as React from 'react';
import { Container } from 'flux/utils';


class App extends React.Component<{}, {}> {
  /**
   * ストアを取得する
   * @returns {Array}
   */
  static getStore(): Array<any> {
    return []
  }

  /**
   * ステートを算出する
   * @returns {{}}
   */
  static calculateState() {
    return {}
  }

  /**
   * レンダラー
   * @returns {any}
   */
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
      </div>
    );
  }
}

export default Container.create(App);
