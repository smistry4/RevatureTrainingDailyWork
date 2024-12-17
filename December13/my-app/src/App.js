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
import ButtonClickDemo from './components/refsdemo/ButtonClickDemo';
import ControlledComponent from './components/refsdemo/ControlledComponent';
import MyContext from './components/contextdemo/MyContext';

function App() {

  const sharedData = "This is some shared data";


  return (
    <MyContext.Provider value={sharedData}>
    <Router>
      <div className="App">
        <Navbar/>
        <ButtonClickDemo/>
        <ControlledComponent/>
      </div>
      <Routes>
        <Route path='/hello' element={<Hello/>}></Route>
        <Route path='/sdc' element={<StateDemoComponent/>}></Route>
        <Route path='/posts' element={<AxiosGetDemo/>}></Route>
        <Route path='/lists' element={<ListsAndKeysComponent/>}></Route>
        <Route path='/todolist' element={<ToDoList/>}></Route>
      </Routes>
    </Router>
    
    </MyContext.Provider>
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