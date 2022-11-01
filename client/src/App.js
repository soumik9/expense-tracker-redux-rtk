
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardLayout from './components/Layout/DashboardLayout';
import Login from './pages/Auth/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/Users/Users';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Routes>

        <Route path="/login" element={<Login />} />


        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
        </Route>

        <Route path="/users" element={<DashboardLayout />}>
          <Route index element={<Users />} />
        </Route>

      </Routes>
    </>



  );
}

export default App;
