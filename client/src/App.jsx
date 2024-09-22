import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Header from "./Components/Header";
import { Provider } from 'react-redux';
import { store, persistor } from './app/store.js'; 
import { PersistGate } from "redux-persist/integration/react";


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
