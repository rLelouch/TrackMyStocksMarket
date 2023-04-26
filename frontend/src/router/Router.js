import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Entrance from '../views/Entrance';
import Home from '../views/Home';
import CoursActions from '../views/CoursActions';
import ActionsPerso from '../views/ActionsPerso';
import Parametres from '../views/Parametres';

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Entrance />} />
                <Route exact path='/home' element={<Home />} />
                <Route path='/cours-actions' element={<CoursActions />} />
                <Route path='/actions-perso' element={<ActionsPerso />} />
                <Route path='/parametres' element={<Parametres />} />
            </Routes>
        </Router>
    );
};

export default Routing;