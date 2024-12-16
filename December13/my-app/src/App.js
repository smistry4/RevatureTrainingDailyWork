import './App.css';
import Hello from './hello';
import EventsDemoComponent from './EventsDemoComponent';
import StateDemoComponent from './StateDemoComponent';
import Post from './Post';
import ListsAndKeysComponent from './ListsAndKeysComponent';
import AxiosGetDemo from './components/axiosdemo/AxiosGetDemo';

function App() {
  return (
    <div className="App">
     <h2>Hello React</h2>
     <Hello firstname="Shivam" lastname="Mistry"/>
     <hr />
     <AxiosGetDemo />
     {/* <EventsDemoComponent/>
     <hr />
     <StateDemoComponent/>
     <hr />


     <Post/>
     <hr />
     <ListsAndKeysComponent/> */}
    </div>
  );
}

export default App;
