import { useLocation } from 'react-router-dom';

const useHideOnRoutes = (hiddenRoutes: string[] = []) => {
  const location = useLocation();
  return !hiddenRoutes.includes(location.pathname);
};

export default useHideOnRoutes;
