
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardLayout from './components/Layout/DashboardLayout';
import Login from './pages/Auth/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/Users/Users';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuthCheck from './hooks/useAuthCheck';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {

  const authChecked = useAuthCheck();

  if(!authChecked) return <div className='text-center'>Checking authentication....</div>

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


        <Route path="/dashboard" element={<RequireAuth><DashboardLayout /></RequireAuth>}>
          <Route index element={<Dashboard />} />
        </Route>

        <Route path="/users" element={<RequireAuth><DashboardLayout /></RequireAuth>}>
          <Route index element={<Users />} />
        </Route>

      </Routes>
    </>



  );
}

export default App;
