import React, { useContext, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './routes/HomePage/HomePage';
import NavFooterNotLoggedIn from './routes/SignUp/NavFooterNotLoggedIn';
import NavFooterLoggedIn from './routes/SignUp/NavFooterLoggedIn';
import Login from './routes/Login/Login'
import SignUp from './routes/SignUp/SignUp';
import PostJob from './routes/PostJob/PostJob';
import FindJobs from './routes/FindJobs/FindJobs';
import PaymentPage from './routes/PaymentForm/PaymentPage';
import Chat from './routes/Chat/Chat';
import ChatHomePage from './routes/Chat/ChatHomePage';
import { AuthContext } from './context/ChatAuthContext';
import ChatLogin from './routes/Chat/ChatLogin';
import ChatRegister from './routes/Chat/ChatRegister';
import VerifyPhoneNumber from './routes/OTP/VerifyPhoneNumber';
import EnterOTP from './routes/OTP/EnterOTP';
import VertifyOTP from './routes/OTP/VerifyOTP';
import ForgotPassword from './routes/ForgotPassword/ForgotPassword';

function App() {

  // Identify the current Chat user
  const { currentChatUser } = useContext(AuthContext)

  console.log("Check current user in App.js")
  console.log(currentChatUser) //Print the currently logged in user

  const ProtectedRoute = ({ children }) => {
    if (!currentChatUser) {
      return <Navigate to={"/chatLogin"} />
    }
  }

  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings =
      {
        "appId": "2bacb19a7b63b71fe1f0d93e8dbc2fc2d",
        "popupWidget": true,
        "automaticChatOpenOnNavigation": true
      };
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, []);  // Empty dependency array ensures this runs only once after component mount


  return (
    <Routes>
      {/* Define the routes under the path '/' */}
      <Route path='/' element={<NavFooterNotLoggedIn />}>

        {/* Let the Login page be accessible by the path '/' alone */}
        <Route index element={<Login />} />

        {/* List all the possible routes of under the path '/' (below): */}
        <Route path='homePage' element={<HomePage />} />
        <Route path='login' element={<Login />} />
        <Route path='verifyPhoneNumber' element={<VerifyPhoneNumber />} />
        <Route path='enterOTP' element={<EnterOTP />} />
        <Route path='verifyOTP' element={<VertifyOTP />} />
        <Route path='signUp' element={<SignUp />} />
        <Route path='forgotPassword' element={<ForgotPassword />} />
        <Route path='postJob' element={<PostJob />} />
        <Route path='chat' element={<Chat />} />
        <Route path='chatHomePage' element={<ChatHomePage />} />
        <Route path='chatRegister' element={<ChatRegister />} />
        <Route path='chatLogin' element={<ChatLogin />} />
        <Route path='findJobs' element={<FindJobs />} />
        <Route path='paymentPage' element={<PaymentPage />} />
      </Route>

      {/* Define the routes under the path '/user' */}
      <Route path='/user' element={<NavFooterLoggedIn />}>
        {/* Let the HomePage page be accessible by the path '/user' alone */}
        <Route index element={<HomePage />} />

        {/* List all the possible routes of under the path '/user' (below): */}
        <Route path='homePage' element={<HomePage />} />
        <Route path='login' element={<Login />} />
        <Route path='verifyPhoneNumber' element={<VerifyPhoneNumber />} />
        <Route path='enterOTP' element={<EnterOTP />} />
        <Route path='verifyOTP' element={<VertifyOTP />} />
        <Route path='signUp' element={<SignUp />} />
        <Route path='forgotPassword' element={<ForgotPassword />} />
        <Route path='postJob' element={<PostJob />} />
        <Route path='chat' element={<Chat />} />
        <Route path='chatHomePage' element={<ChatHomePage />} />
        <Route path='chatRegister' element={<ChatRegister />} />
        <Route path='chatLogin' element={<ChatLogin />} />
        <Route path='findJobs' element={<FindJobs />} />
        <Route path='paymentPage' element={<PaymentPage />} />
      </Route>

    </Routes >
  );
}

export default App;