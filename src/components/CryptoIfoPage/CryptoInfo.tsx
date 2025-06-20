import bg1 from '../../assets/images/bg1.jpeg';
import { CryptoBottom } from './CryptoBottom';


export default function CryptoInfo() {
    return (
        <div className="index-top-section">
            <div className="sect-content">
                <div className="container">
                    <div className="top-content-box">
                        <h1><b>Crypto-trading terminal</b> <span>with bots and smart trades</span></h1>
                        <a href="/app/signup" className="_g-sign-btn" type="button">
                            <span>Sign up now</span>
                        </a>
                    </div>
                    <CryptoBottom />
                </div>
            </div>
            <div className="sectbg ">
                <picture>
                    <source srcSet={bg1} media="(min-width: 992px)" />
                    <img srcSet={bg1} alt="" className="img-responsive" />
                </picture>

            </div>
        </div>

    );
}


