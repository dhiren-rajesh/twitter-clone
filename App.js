import './App.css';
import Sidebar from './Sidebar.js'
import Feed from './Feed.js'
import Widgets from './Widgets.js'

function App() {
  return (
    <div className="app">
      {/* <h1>Twitter Clone</h1> */}
      <Sidebar/>

      <Feed />

      <Widgets />
    </div>
  );
}

export default App;
