import './App.css';
import Homepage from './components/Homepage';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Homepage />
      </ThemeProvider>
      </div>

  );
}

export default App;
