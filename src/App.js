import React from "react";
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Pages
import CategoryPage from "./pages/CategoryPage";
import DetailPage from "./pages/DetailPage";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";

// Components
import CategoryIcon from '@mui/icons-material/Category';
import GamesIcon from '@mui/icons-material/Games';
import { MdGroup } from 'react-icons/md';

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
        <footer>
          <NavLink to="/" className="iconWrapper">
            <GamesIcon className="icon" /> Home
          </NavLink>
          <NavLink to="/category" className="iconWrapper">
            <CategoryIcon className="icon" /> Category
          </NavLink>
          <NavLink to="/profile" className="iconWrapper">
            <MdGroup className="icon" /> Profile
          </NavLink>
        </footer>
      </div>
    </Router>
  );
}

export default App;
