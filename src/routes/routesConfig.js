import PeoplePage from '../containers/PeoplePage';
import HomePage from '../containers/HomePage';
import NotFoundPage from '../containers/NotFoundPage';
import PersonPage from '../containers/PersonPage';
import FavouritePage from '../containers/FavouritePage';
import SearchPage from '../containers/SearchPage';
import ErrorMessage from '../components/ErrorMessage';

const routesConfig = [
    {
        path: '/',
        component: <HomePage />,
    },
    {
        path: '/people',
        component: <PeoplePage />,
    },
    {
        path: '/people/:id',
        component: <PersonPage />,
    },
    {
        path: '/favourites',
        component: <FavouritePage />,
    },
    {
        path: '/search',
        component: <SearchPage />,
    },
    {
        path: '/fail',
        component: <ErrorMessage />,
    },
    {
        path: '*',
        component: <NotFoundPage />,
    },
];

export default routesConfig;
