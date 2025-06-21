import React from "react";
import type { User } from "firebase/auth";

interface MobileNavigationProps {
    onSignInClick: () => void;
    user: User | null;
    toggleMobileMenu: () => void;
    isMobileMenuOpen: boolean;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ onSignInClick, user, toggleMobileMenu, isMobileMenuOpen }) => {
    return (
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <button
                className={`mobile-menu-btn ${isMobileMenuOpen ? 'btn-actived' : ''}`}
                aria-label="Menu"
                type="button"
                onClick={toggleMobileMenu}
                style={{ marginBottom: '10px' }}
            >
                <span></span>
            </button>

            {isMobileMenuOpen && (
                <div className="nav-col" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <ul className="mobile-nav-list" style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                        <li><a href="/en/#features">features</a></li>
                        <li><a href="/en/prices/">prices</a></li>
                        <li><a href="/en/partners/">partners</a></li>
                        <li><a href="https://doc.capico.app/" target="_blank" rel="noreferrer">knowledge</a></li>
                        <li><a href="https://doc.capico.app/" target="_blank" rel="noreferrer">academy</a></li>
                    </ul>
                    <button
                        onClick={onSignInClick}
                        className="reg-btn"
                        style={{ display: "flex", alignItems: "center", gap: 5 }}
                    >
                        <span>{user ? "Sign Out" : "Sign In"}</span>
                    </button>
                </div>
            )}
        </div>
    );
}
