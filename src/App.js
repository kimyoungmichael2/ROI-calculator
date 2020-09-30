import React from 'react';
import './App.css';
import Title from './components/Header'
import 'semantic-ui-css/semantic.min.css'
import Tabs from './views/Tabs'
import GrandTotal from './components/GrandTotal'

function App() {
  return (
    <div>
    <Title />
    <Tabs />
    </div>
  );
}

export default App;
