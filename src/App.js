import React from 'react';
import './App.css';
import ClassComponent from './components/ClassComponent';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './HookCounterThree';
import HooksCounterFour from './HooksCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';

function App() {
  return (
    <div className="App">
      {/* <ClassComponent /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HooksCounterFour /> */}
      <ClassCounterOne />
      <HookCounterOne />
      


    </div>
  );
}

export default App;
