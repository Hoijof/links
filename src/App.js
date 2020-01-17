import React, { useState } from 'react';

import Character from './components/character';

import { getNextStep, PRESETS } from './utils/links';
import CharacterManager from './models/character-manager.js'
import { ACTION_TYPES } from './models/action';

import './App.css';



//create your forceUpdate hook
function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
}

const cm = new CharacterManager();

const c = cm.addCharacter('');
const c2 = cm.addCharacter('');

cm.relateCharacters(c, c2);

const action = {
  type: ACTION_TYPES.CONSTRUCTIVE,
  source: c,
  dest: c2,
  ratio: 1,
  unidirectional: false
};

const action2 = {
  type: ACTION_TYPES.DESTRUCTIVE,
  source: c,
  dest: c2,
  ratio: 1,
  unidirectional: false
};

function App() {
  const forceUpdate = useForceUpdate();
  

 //cm.doAction(action);


  return (
    <div className="App">
        <p>{c.name}</p>
        <p>{c.reportStats()}</p>
        <p>{c.relations[c2.id].reportStatus()}</p>
        <p>{c2.name}</p>
        <p>{c2.reportStats()}</p>
        <p>{c2.relations[c.id].reportStatus()}</p>

        <button onClick={() => {cm.doAction(action); forceUpdate()}}>Action!</button>
        <button onClick={() => {cm.doAction(action2); forceUpdate()}}>Action2!</button>
    </div>
  );
}

export default App;
