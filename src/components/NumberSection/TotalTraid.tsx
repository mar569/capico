import numberImage from '../../assets/images/sect-bg.jpeg';
import { Holder } from './Holder';


export default function TotalTraid() {
    return (
        <div className="numbers-section">
            <div className="sect-content">
                <div className="container">
                    <div className="_g-gradient-title-box" style={{ opacity: 1 }}>
                        <div className="box-holder">
                            <h2>Stats</h2>
                            <span className="subtitle">Platform performance</span>
                        </div>
                    </div>
                    <Holder />
                </div>
            </div>
            <div className="sect-bg" data-skarallax="200">
                <picture>
                    <img alt="" className="img-responsive" srcSet={numberImage} />
                </picture>
            </div>
        </div>
    );
}
