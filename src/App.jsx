import { Header, Calendar } from './components';

import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="home-container">
        <Calendar />
        <Calendar />
      </div>
    </div>
  );
}

export default App;
