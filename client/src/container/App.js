import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import Navbar from '../layouts/navbar/navbar.layout';
import Main from '../layouts/main/main.layout';
import Footer from '../layouts/footer/footer.layout';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Main />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
