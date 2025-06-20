import { Route, Routes } from "react-router-dom";

import React from "react";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/tours" element={<div>Список туров</div>} />
            <Route path="/reviews" element={<div>Обзоры</div>} />
            <Route path="/contacts" element={<div>Контакты</div>} />
            <Route path="/" element={<div>Добро пожаловать на главную страницу!</div>} />
        </Routes>
    );
};

export default AppRoutes;
