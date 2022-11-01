import List from "./components/list";
import style from './style.css'

function App() {
  return (
    <>
    <div className="logo">
    <img src='https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-hub-ragnarok-twitter-banner-en-09sept21?$1200px$'></img>
    </div>
    
    <div className="todo-list">
        <List />
    </div>

    </>
  );
}

export default App;
