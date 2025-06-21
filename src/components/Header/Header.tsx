import React, { useState } from 'react';
import type { User } from 'firebase/auth';
import logo from "../../assets/images/logo.png";
import { HeaderNavigation } from "./HeaderNavigation";
import { MobileNavigation } from "./MobileNavigation";

interface HeaderProps {
    onSignInClick: () => void;
    user: User | null;
}

export const Header: React.FC<HeaderProps> = ({ onSignInClick, user }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header>
            <div className="container">
                <div className="head-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div className="logo-col" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, width: "35%" }}>
                        <img src={logo} alt="logo" style={{ width: 50, height: 55 }} />
                        <h3 style={{ flex: 1, marginLeft: 10, maxWidth: 200, cursor: "pointer" }}>capico</h3>
                    </div>

                    {/* Десктопная навигация */}
                    <div className="nav-col" style={{ display: isMobileMenuOpen ? 'none' : 'flex' }}>
                        <HeaderNavigation onSignInClick={onSignInClick} user={user} />
                    </div>

                    {/* Кнопка для мобильного меню */}
                    <button
                        className={`mobile-menu-btn ${isMobileMenuOpen ? 'btn-actived' : ''}`}
                        aria-label="Menu"
                        type="button"
                        onClick={toggleMobileMenu}
                    >
                        <span></span>
                    </button>
                </div>

                {/* Мобильное меню */}
                {isMobileMenuOpen && (
                    <MobileNavigation
                        onSignInClick={onSignInClick}
                        user={user}
                        toggleMobileMenu={toggleMobileMenu}
                        isMobileMenuOpen={isMobileMenuOpen}
                    />
                )}
            </div>
        </header>
    );
};
