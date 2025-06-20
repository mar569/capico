
import corImage from "../../assets/images/image 5.png";
import Chart from "./Chart";
import Statics from "./Statics";

export default function Features() {
    return (
        <div className="benefits-section">
            <div className="container">
                <div className="_g-gradient-title-box">
                    <div className="box-holder">
                        <h2>Features</h2>
                        <span className="subtitle">Manage positions on</span>
                    </div>
                </div>
                <div className="benefits-list">
                    <div className="benefit-item">
                        <div className="video-box">

                            <picture className="video-thumb">

                                <img alt="" className="img-responsive" srcSet={corImage} />
                            </picture>

                        </div>
                        <div className="item-textbox">
                            <b className="item-title">Interface <br />Builder</b>
                            <div className="text-row">
                                <div className="left-col">
                                    <span className="title">Customize <br /> your interface</span>
                                </div>
                                <div className="right-col">
                                    <p>Bring up what you need, remove what you don’t. <br /> Trade the way you like it.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Chart />
                    <Statics />
                </div>
            </div>
        </div>
    );
}
