import imagePhone from '../../assets/images/image 11.png';

export default function CryptoPlayer() {
    return (
        <div className="other-sections">
            <div className="full-video-box-section" id="full-video-sect">
                <div className="container">
                    <div className="video-info-text">
                        <p>Manage positions on <br />multiple exchanges in one window</p>
                    </div>
                    <div className="video-btn-box">
                        <picture className="bg-coins jsLoadAfter">
                            <img alt="" className="img-responsive" srcSet={imagePhone} />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    );
}
