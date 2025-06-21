import React from "react";
import type { User } from "firebase/auth";

interface HeaderNavigationProps {
    onSignInClick: () => void;
    user: User | null;
}

export const HeaderNavigation: React.FC<HeaderNavigationProps> = ({ onSignInClick, user }) => {
    return (
        <div className="nav-col" style={{ gap: '10px' }}>
            <ul className="main-nav" style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
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
                <span>{user ? "sign out" : "sign in"}</span>
            </button>
        </div>
    );
}
