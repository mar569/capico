
import cirdImage from '../../assets/images/circl33xe 1.png';

export default function Chart() {
    return (
        <div className="benefit-item">
            <div className="video-box">
                <div>
                    <picture className=" video-thumb">
                        <img alt="" className="img-responsive" srcSet={cirdImage} />
                    </picture>
                </div>
            </div>
            <div className="item-textbox">
                <div className="bordered-line"></div>
                <b className="item-title">Multichart</b>
                <div className="main-text">
                    <p><b>Add multiple trading pairs</b> from different exchanges, and analyze them on one screen</p>
                </div>
            </div>
        </div>
    );
}
