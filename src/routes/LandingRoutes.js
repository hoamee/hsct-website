import Loadable from 'ui-component/Loadable';
import { lazy } from 'react';

const PagesLanding = Loadable(lazy(() => import('views/pages/landing')));
const PagesContactUS = Loadable(lazy(() => import('views/pages/contact-us')));

const LandingRoutes = {
    path: '/',
    element: <PagesLanding />,
    children: [
        {
            path: '/about',
            element: <PagesContactUS />
        }
    ]
};

export default LandingRoutes;
