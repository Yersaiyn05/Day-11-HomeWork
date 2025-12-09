import Sidebar from './comComponents/Sidebar.jsx'
import Header from './comComponents/header.jsx'
import MainDashboard from './comComponents/MainDashboard.jsx'

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <MainDashboard />
      </div>
    </div>
  );
}

export default App;
