import React, { FC } from "react";
import { Redirect } from "react-router-dom";
import renderRoutes from "../renderRoutes";
import RouteConfigItem from "../interfaces";
import Welcome from "../Welcome";
import Boards from "../Boards";

export const RedirectToDefaultLevel: FC = () => <Redirect to={"/asd"} />;
export const RedirectToLogin: FC = () => <Redirect to={"/login"} />;

const configAuthorised: RouteConfigItem[] = [
  // {
  //     component: Exercises,
  //     path: "/levels/:levelId/:exerciseType/:exerciseKey"
  // },
  // {
  //     component: Settings,
  //     path: "/settings/:settingsPageKey"
  // },
  // {
  //     component: HandleFirebase,
  //     path: "/firebase"
  // },
  // {
  //     component: VerifiedEmail,
  //     path: "/verifiedEmail"
  // },
  // {
  //     component: Levels,
  //     path: "/levels/:levelId"
  // },
  {
    component: Boards,
    path: "/boards",
  },
  {
    component: Welcome,
    path: "*",
  },
];

// const signupRoute: RouteConfigItem = {
//     component: Signup,
//     path: "/signup"
// };
//
// const configUnauthorized: RouteConfigItem[] = [
//     signupRoute,
//     {
//         component: Login,
//         path: "/login"
//     },
//     {
//         component: HandleFirebase,
//         path: "/firebase"
//     },
//     {
//         component: ResetPassword,
//         path: "/resetPassword"
//     },
//     {
//         component: ForgotPassword,
//         path: "/forgotPassword"
//     },
//     {
//         component: RedirectToLogin,
//         path: "*"
//     }
// ];

export const Root: FC = () => {
  // const { currentUser } = useCurrentUser();
  // const location = useLocation();
  // const { pathname } = location;
  //
  // if (currentUser === undefined) return <EntryLoadingScreen />;
  //
  // if (pathname === "/signup" && currentUser && currentUser.isAnonymous)
  //     return renderRoutes([signupRoute]);

  // return currentUser ? (
  //     <Container>
  //         <Snackbars />
  //         <ContentCard>{renderRoutes(configAuthorised)}</ContentCard>
  //     </Container>
  // ) : (
  //     renderRoutes(configUnauthorized)
  // );
  return renderRoutes(configAuthorised);
};
