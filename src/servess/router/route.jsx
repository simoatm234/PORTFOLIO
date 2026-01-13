import { createBrowserRouter } from 'react-router-dom';

import Home from '../../Pages/Home.jsx';
import Index from '../../LayOut/Index.jsx';
import About from '../../Pages/About.jsx';
import Skills from '../../Pages/Skills.jsx';
import Project from '../../Pages/Project.jsx';
import Certificate from '../../Pages/Certificate.jsx';
export const route = createBrowserRouter([
  {
    element: <Index />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/portfolio/About',
        element: <About />,
      },
      {
        path: '/portfolio/Skills',
        element: <Skills />,
      },
      {
        path: '/portfolio/Projects',
        element: <Project />,
      },
      {
        path: '/portfolio/Certificate',
        element: <Certificate />,
      },
    ],
  },
]);


