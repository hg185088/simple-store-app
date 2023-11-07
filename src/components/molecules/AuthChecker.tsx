import React from 'react';
import { authStore } from '../../redux/store';
import { selectCurrentUser } from '../../redux/authSlice';
import { NotAuthorized } from '../atoms/NotAuthorized';

interface AuthCheckerProps {
  public?: boolean;
  registerUserAccess?: boolean;
}

export const AuthChecker = (props: React.PropsWithChildren<AuthCheckerProps>) => {
  const children = props.children;
  const user = selectCurrentUser(authStore.getState());
  const isRegisteredUser = user.email != '' ? true : false;
  console.log('user in auth checker', user);

  if (props.registerUserAccess) {
    if (isRegisteredUser) {
      return children;
    } else {
      return <NotAuthorized />;
    }
  } else {
    return children;
  }
};

// const AuthRoute = () => {
//   return (
//     <Routes>
//       <Route path='/auth/logIn' element={<Login />} />
//       <Route path='/auth/signUp' element={<SignUp />} />
//     </Routes>
//   );
// };

// const RootRoute = () => {
//   return (
//     <Routes>
//       <Route path='/' element={<Home />} />
//     </Routes>
//   );
// };
