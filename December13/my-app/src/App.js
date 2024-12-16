import './App.css';
import Hello from './hello';
import EventsDemoComponent from './EventsDemoComponent';
import StateDemoComponent from './StateDemoComponent';
import Post from './Post';
import ListsAndKeysComponent from './ListsAndKeysComponent';
import AxiosGetDemo from './components/axiosdemo/AxiosGetDemo';
import Navbar from './Navbar';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import ToDoList from './components/todolist/ToDoList';

function App() {
  return (
    
    <Router>
      <div className="App">
        <Navbar/>
      </div>
      <Routes>
        <Route path='/hello' element={<Hello/>}></Route>
        <Route path='/sdc' element={<StateDemoComponent/>}></Route>
        <Route path='/posts' element={<AxiosGetDemo/>}></Route>
        <Route path='/lists' element={<ListsAndKeysComponent/>}></Route>
        <Route path='/todolist' element={<ToDoList/>}></Route>
      </Routes>
    </Router>
    
     
  );
}

export default App;
{/* <h2>Hello React</h2>
     <Hello firstname="Shivam" lastname="Mistry"/>
     <hr />
     <AxiosGetDemo /> */}
     {/* <EventsDemoComponent/>
     <hr />
     <StateDemoComponent/>
     <hr />


     <Post/>
     <hr />
     <ListsAndKeysComponent/> */}