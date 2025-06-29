// import { useState } from "react";
// import { Navigate, Outlet } from "react-router";
// import LoadingPage from "../Loading/LoadingPage";

// const ReverseProtectedRoute = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   if (isLoading) {
//     return <LoadingPage />;
//   }

//   if (isAuthenticated) {
//     return <Navigate to="/" />;
//   }

//   return <Outlet />;
// };

// export default ReverseProtectedRoute;
