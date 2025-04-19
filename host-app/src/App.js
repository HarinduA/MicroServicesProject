import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Header = React.lazy(() => import('remote/Header'));
const Login = React.lazy(() => import('login/Login'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <Suspense fallback={<div>Loading Remote Header...</div>}>
                <div>
                  <h1></h1>
                  <Header />
                </div>
              </Suspense>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
