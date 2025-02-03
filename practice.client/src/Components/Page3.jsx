// 生命週期、props 傳遞、redux
import React from 'react';
import { Outter } from './Tools';

export class Page3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }

    console.log('[Page 3] Constructor');
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

    console.log('[Page 3] Mounting');
  };

  componentWillUnmount() {
    console.log('[Page 3] Unmounting');
  };

  tick() {
    this.setState({
      date: new Date()
    });
  };

  render() {
    console.log('[Page 3] Render');

    return (
      <Outter title='Page 3' subTitle={this.state.date.toLocaleTimeString()}>
      </Outter>
    )
  };
}