import { Header, Calendar, TimeSlots, Footer } from './components';

import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="columns">
        <div className="first-column" />

        <div className="second-column">
          <div className="home-container">
            <Calendar />
            <TimeSlots />
          </div>
          <Footer />
        </div>
        <div className="third-column" />
      </div>
    </div>
  );
}

export default App;
