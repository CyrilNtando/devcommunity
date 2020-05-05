import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../layouts/navbar/navbar.layout';
import Main from '../layouts/main/main.layout';
import Footer from '../layouts/footer/footer.layout';
function App() {
  return (
    <Router>
      <Navbar />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
