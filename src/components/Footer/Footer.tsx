import { LeftCols } from "./LeftCols";
import { LogoCols } from "./LogoCols";
import { NavCols } from "./NavCols";



export const Footer: React.FC = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-main-row">
                    <LogoCols />
                    <LeftCols />
                    <NavCols />
                </div>
            </div>
        </footer>
    );
}
