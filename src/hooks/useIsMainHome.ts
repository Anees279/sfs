// src/hooks/useIsMainHome.ts
import { useLocation } from "react-router-dom";

export const useIsMainHome = () => {
  const location = useLocation();
  return location.pathname === "/";
};
