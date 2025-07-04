import { useLocation } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

const location = useLocation();
const hideOnRoutes = [''];

{!hideOnRoutes.includes(location.pathname) && <SearchBar />}
export const useHideOnRoutes = () => {
  const location = useLocation();
  return hideOnRoutes.includes(location.pathname);
};