import logo from "../../assets/images/logo.png";
import { HeaderNavigation } from "./HeaderNavigation";
import type { User } from "firebase/auth";

interface HeaderProps {
    onSignInClick: () => void;
    user: User | null;
}

export const Header: React.FC<HeaderProps> = ({ onSignInClick, user }) => (
    <header>
        <div className="container">
            <div
                className="head-row"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
                <div
                    className="logo-col"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                        width: "35%",
                    }}
                >
                    <img src={logo} alt="logo" style={{ width: 50, height: 55 }} />
                    <h3 style={{ flex: 1, marginLeft: 10, maxWidth: 200, cursor: "pointer" }}>capico</h3>
                </div>
                <HeaderNavigation onSignInClick={onSignInClick} user={user} />
            </div>
        </div>
    </header>
);
