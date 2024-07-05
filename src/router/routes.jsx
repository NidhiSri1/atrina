import { createBrowserRouter } from 'react-router-dom';
import AboutMe from '../pages/aboutMe/AboutMe';
import Education from '../pages/education/Education';
import MainLayout from '../layout/MainLayout';
import Experience from '../pages/experience/Experience';
import Details from '../pages/details/Details';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout> ,
    children: [
      {
        path: '/',
        element: <AboutMe />,
      },
      {
        path: '/education',
        element: <Education />,
      },
      {
        path: '/experience',
        element: <Experience />,
      },
      {
        path: '/details',
        element: <Details />,
      },
    ],
  },
]);