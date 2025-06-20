
import trade from '../../assets/images/phone.jpeg';
import { TradeInfo } from './TradeInfo';


export default function Trade() {
    return (
        <div className="trade-section">
            <div className="sect-content">
                <TradeInfo />
            </div>
            <div className="sect-bg" data-skarallax-scale="1.2" data-scale-from="1">
                <picture >
                    <img alt="" className="img-responsive" srcSet={trade} />
                </picture>
            </div>
        </div>
    );

}