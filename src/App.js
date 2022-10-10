import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Books from './components/Books/Books';
import BookDetails from './components/Books/BookDetails';
import About from './components/About/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {

  useEffect(() => {
    AOS.init();
  }, [])


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
          path: '/books', 
          element: <Books></Books>,
          loader: () => fetch('https://api.itbook.store/1.0/new'),
        },
        {
          path: '/books/:id', 
          element: <BookDetails></BookDetails>,
          loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
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
