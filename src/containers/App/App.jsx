import {
    NavLink, Route, Routes,
} from 'react-router-dom';
import routesConfig from '../../routes/routesConfig';
import Header from '../../components/Header';
import styles from './App.module.css';

const App = () => (
    <div className={styles.wrapper}>
        <Header />
        <Routes>
            {routesConfig.map((route, index) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.component}
                />
            ))}
        </Routes>
    </div>
);

export default App;
