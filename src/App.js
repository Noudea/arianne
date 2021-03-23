import logo from './logo.svg';
import './App.css';
import OutlineRoundButton from './component/Button/OutlineRoundButton';
import NavBar from './component/Navigation/NavBar';


function App() {

    const test = () => {
        console.log('test')
    }
  return (
    <div className="App">
        <style jsx>{`
            .App {
                background-color:grey;
                height:100vh;
                {/* display:flex;
                align-items: center;
                justify-content: center; */}
            }
            
            `}</style>
            <NavBar test='test'>
                <p>dsqdqsdqsdqs</p>
            </NavBar>
            <OutlineRoundButton onClick={test} color='red' textContent='TEST'></OutlineRoundButton>
    </div>
  );
}

export default App;
