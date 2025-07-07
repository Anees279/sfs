// hooks/useTransparentNavbar.ts
import { useLocation } from 'react-router-dom';

export const useTransparentNavbar = () => {
  const location = useLocation();
  const transparentRoutes = [
    '/',
    '/property-management-dubai',
    '/isHome',
    '/golden-visa-dubai'
  ];

  return transparentRoutes.includes(location.pathname);
};
