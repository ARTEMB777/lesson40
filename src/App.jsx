import React from 'react'
import ControlledComponent from './components/controlledComponent.jsx';
import UncontrolledComponent from './components/uncontrolledComponent.jsx';
import FetchDataComponent from './components/useEffect.jsx';


function App() {
  return (
    <div>
      <h1>Lesson 40</h1>
      <ControlledComponent />
      <UncontrolledComponent />
      <FetchDataComponent />
    </div>
  )
}

export default App
