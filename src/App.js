import * as React from 'react';
import 'normalize.css/normalize.css';
import 'react-circular-progressbar/dist/styles.css';
import './styles/styles.scss';
import Pomodoro from './view/Pomodoro';

const App = () => (
      <div>
        <Pomodoro />
      </div>
);

export default App;