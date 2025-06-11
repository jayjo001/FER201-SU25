import React from 'react';
import Counter from './Counter';
import ControlledInput from './ControlledInput';
import ToggleText from './ToggleText';
import TodoList from './TodoList';
import ColorSwitcherComponent from './ColorSwitcherComponent';
import SearchFilter from './SearchFilter';
import DragDropList from './DragDropList';

function App() {
  return (
    <div>
      <Counter />
      <ControlledInput />
      <ToggleText />
      <TodoList />
      <ColorSwitcherComponent />
      <SearchFilter />
      <DragDropList />
    </div>
  );
}

export default App;
