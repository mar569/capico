
import { CgArrowRightO } from "react-icons/cg";

export const CapicoTitle: React.FC = () => {
    return (
        <div className="container">
            <span className="sect-subtitle">Demo account, free trial, life-long free plan</span>
            <div className="centered-text">
                <span className="sect-title">Try Capico for free</span>
            </div>
            <div className="center-btn-box">
                <a href="/app/signup" className="_g-siren-arrowed-btn">
                    <span>Create an account</span>
                    <i><CgArrowRightO style={{ color: 'black', fontSize: '60px' }} /></i>
                </a>
            </div>
        </div>
    );
}