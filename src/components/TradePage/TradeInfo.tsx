import { CgArrowRightO } from "react-icons/cg";

export const TradeInfo: React.FC = () => {
    return (
        <div className="container">
            <div className="_g-gradient-title-box">
                <div className="box-holder">
                    <span className="subtitle">Full functionality at your fingertips</span>
                </div>
            </div>
            <h2 className='gradient-text'>Trade anywhere</h2>
            <div className="lefted-text">
                <p>The platform is fully adapted and optimized to work on your phone and tablet browsers</p>
            </div>
            <div className="center-btn-box">
                <a href="https://capico.app/app/signup" className="_g-siren-arrowed-btn">
                    <span>Create an account</span>
                    <i><CgArrowRightO style={{ color: 'black', fontSize: '60px' }} /></i>
                </a>
            </div>
        </div>
    )
}