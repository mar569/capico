import circleImage from '../../assets/images/circle 1.png';

export default function Statics() {
    return (
        <div className="benefit-item slider-item">
            <div className="video-box">
                <div className="swiper-overlay">
                    <picture >
                        <img alt="" className="img-responsive" srcSet={circleImage} />
                    </picture>
                </div>
            </div>
            <div className="item-textbox">
                <div className="bordered-line"></div>
                <b className="item-title ">Portfolio & Statistics</b>
                <div className="text-row ">
                    <div className="left-col">
                        <span className="title">Your assets on all <br /> connected <br /> exchanges are  <br /> collected in one place</span>
                    </div>
                    <div className="right-col">
                        <p>Visual statistics of trade.<br /> Uploading reports </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
