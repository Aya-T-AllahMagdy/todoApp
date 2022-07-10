
import './App.css'
import TodoList from './Components/todoList';
import { Typography } from '@mui/material';
function App() {
  return (
    <div className="App">
        <Typography variant='h6' textTransform={'capitalize'}>what'sthe plan for today?</Typography>
      <TodoList/>
    </div>
  );
}

export default App;
