import './App.css';
import GetPosts from './components/axios/GetPosts';
import DisplayPosts from './components/DisplayPosts';

function App() {
  return (
    <div className="App">
      CRUD APP
      <GetPosts/>
    </div>
  );
}

export default App;
