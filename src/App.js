import logo from './logo.svg';
import './App.css';
import imageMain from './img.png';
import { PlanningList } from './PlanningList';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <img src={ imageMain } width='300px' alt='image for the top'/>
      </div>
      <div className='container'>
        <h1>Daily Planner</h1>
    </div>
      <PlanningList />
    
    </div>
  );
}

export default App;
