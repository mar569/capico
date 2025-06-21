
import securityImage from '../../assets/images/untitled332 1.png';
import key from '../../assets/images/vector/Vector 5.png';
import servKey from '../../assets/images/vector/Vector 6.png';
import faKey from '../../assets/images/vector/Vector 7.png';


export const CardPlatform: React.FC = () => {
    return (
        <div className="content-row">
            <div className="pic-col">
                <picture>
                    <source srcSet={securityImage} media="(min-width: 768px)" />
                    <img srcSet={securityImage} alt="" className="img-responsive" />
                </picture>
            </div>
            <div className="right-col">
                <div className="secure-list">
                    <div className="item">
                        <div className="item-holder">
                            <div className="top-holder">
                                <b>API keys</b>
                                <img src={key} alt="" />
                            </div>
                            <p>Secure key storage. No option to withdraw your funds from the exchange.</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-holder">
                            <div className="top-holder">
                                <b>Encryption</b>
                                <img src={servKey} alt="" />
                            </div>
                            <p>User data is encrypted and stored on an isolated server.</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-holder">
                            <div className="top-holder">
                                <b>2FA</b>
                                <img src={faKey} alt="" />
                            </div>
                            <p>New device or IP security checks along with 2-factor authentication keep your account safe from unsanctioned access.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}