import { Header, Calendar, TimeSlots } from './components';

import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="home-container">
        <Calendar />
        <TimeSlots />
      </div>
    </div>
  );
}

export default App;
