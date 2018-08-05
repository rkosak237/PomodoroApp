import * as React from 'react';
import Button from '../components/Button';
import Chart from '../components/Chart';
import SelectValue from '../components/SelectValue';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            time: 0,
            active: false
        };
      }

  handleChange = (e) => {
    this.setState({time: e.target.value});
  }

  tick = () => {
    const { time } = this.state;
    this.setState({time: time - 1 })

    if(time === 0 ) {
      clearInterval(this.intervalId);
      this.setState({time: 0 })
    }
  }

  start = () => {
    this.intervalId = setInterval(this.tick, 1000);
  }

  stop = () => {
    clearInterval(this.intervalId);
  }

  reset = () => {
    this.stop();
    this.setState({
      active: false,
      time: 0
    })
  }

  handleSetTimer = () => {
    const { active, time } = this.state;

    if(time !== 0) {
      this.setState({
        active: !active
      });
      active ? this.stop() : this.start()
    }
  }

  render() {
    const { time, active } = this.state;
    return (
      <div className="container">
        <h1 className="container__title">Timer</h1>
        <div className="content">
          { !active ?
          <p className="content__text">Improve your productivity with timer.
            <br/>Just pick time and press <span className="content__text--highlight">Start!</span>
          </p>
          : <p className="content__text">To take a break click <span className="content__text--highlight">Pause. </span>
              <br/>If you need to start from beginning then choose <span className="content__text--highlight">Reset</span>.
          </p>
          }
          <div className="controls">
            { active ? ''
            :
            <SelectValue
            value={ time }
            onChange={ this.handleChange }
            />
            }
            <Button
            onClick={ this.handleSetTimer }
            disabled={ !time}
            text={ active ? 'Pause' : 'Start' }
            />
            { !active ? ''
            :
            <Button
            onClick={this.reset}
            text={'Reset'}
            />
            }
          </div>
          <Chart
          radius={120}
          stroke={5}
          time={time}
          />
        </div>
      </div>
    )
  }
}