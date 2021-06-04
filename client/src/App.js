import React, { Fragment, useEffect, lazy, Suspense } from 'react'

import { GlobalStyle } from './global.styles'
import { Switch, Route } from 'react-router-dom'
import 'animate.css/animate.min.css'

import PrivateRoute from './components/Routes/PrivateRoute'

import { loadUser } from './Redux/User/user.actions'
import setAuthToken from './utils/setAuthToken'
import store from './Redux/store'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Zoom } from 'react-toastify'
import Spinner from './components/Spinner/Spinner'
import ErrorBoundary from './components/error-boundary/error-boundary'

const HomePage = lazy(() => import('./Pages/Homepage/HomePage'))
const SignInPage = lazy(() => import('./Pages/SignInPage/SignInPage'))
const SignUpPage = lazy(() => import('./Pages/SignUpPage/SignUpPage'))
const ConfirmationPage = lazy(() =>
  import('./Pages/Confirmation Page/Confirmation Page')
)
const DashboardPage = lazy(() => import('./Pages/DashboardPage/DashboardPage'))
const PostsPage = lazy(() => import('./Pages/Posts/Posts'))
const Forgot = lazy(() => import('./Pages/Forgot/Forgot'))
const Reset = lazy(() => import('./Pages/ResetPassword/Reset'))
const CreateProfile = lazy(() =>
  import('./components/Profile-form/CreateProfile')
)
const AddExperience = lazy(() =>
  import('./components/Profile-form/AddExperience')
)
const AddEducation = lazy(() =>
  import('./components/Profile-form/AddEducation')
)
const Profiles = lazy(() => import('./components/Profiles/Profiles'))
const Profile = lazy(() => import('./components/Profile/Profile'))
const Gist = lazy(() => import('./components/Gist/Gist'))

// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }

const styles = {
  marginTop: '80px',
}

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token)
    store.dispatch(loadUser())
  }, [])

  return (
    <Fragment>
      <GlobalStyle />
      <ToastContainer style={styles} closeOnClick transition={Zoom} />

      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signup" component={SignUpPage} />

            <Route exact path="/signin" component={SignInPage} />
            <Route
              exact
              path="/verifyaccount/:token"
              component={ConfirmationPage}
            />
            <Route exact path="/profiles" component={Profiles} />

            <Route exact path="/profile/:id" component={Profile} />

            <PrivateRoute exact path="/dashboard" component={DashboardPage} />
            <PrivateRoute exact path="/posts" component={PostsPage} />
            <PrivateRoute exact path="/posts/:id" component={Gist} />

            <Route exact path="/forgotpassword" component={Forgot} />
            <Route exact path="/resetpassword/:token" component={Reset} />
            <PrivateRoute
              exact
              path="/create-profile"
              component={CreateProfile}
            />
            <PrivateRoute
              exact
              path="/edit-profile"
              component={CreateProfile}
            />
            <PrivateRoute
              exact
              path="/add-experience"
              component={AddExperience}
            />
            <PrivateRoute
              exact
              path="/add-education"
              component={AddEducation}
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </Fragment>
  )
}

export default App
