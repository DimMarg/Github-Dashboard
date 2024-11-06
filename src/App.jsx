import './styles/main.scss';
import Header from './components/Header/Header';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { routes } from './js/index';
import { useEffect } from 'react';
import useGithubData from './hooks/useGithubData';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { data, error, isLoading, isError } = useGithubData();

  // Navigate to first profile of data array if data exist and the location path is the homepage
  useEffect(() => {
    if (data && data.length > 0 && location.pathname === '/') {
      navigate(`/profile/${data[0].login}`);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            <Header>
              <route.page />
            </Header>
          }
        />
      ))}
    </Routes>
  );
}

export default App;

