import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase';
import { Navigate } from 'react-router-dom';

export const RequireAuth = ({ children }) => {
  const [user] = useAuthState(auth);
  // console.log(user)

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
