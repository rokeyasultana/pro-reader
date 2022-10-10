import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
          path: '/', 
          element: <Home></Home>
        },
        {
          path: '/about', 
          element: <About></About>
        },
      ]}
  ]);
  return (
    <div className="App">
   <RouterProvider router={router} />
    </div>
  );
}

export default App;
