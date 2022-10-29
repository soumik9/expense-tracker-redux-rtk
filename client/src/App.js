
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardLayout from './components/Layout/DashboardLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/Users/Users';

function App() {
  return (

    <Routes>

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
      </Route>

      <Route path="/users" element={<DashboardLayout />}>
        <Route index element={<Users />} />
      </Route>

    </Routes>

  );
}

export default App;
