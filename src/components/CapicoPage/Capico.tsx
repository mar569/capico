
import capico from '../../assets/images/bg-bottom.jpeg';
import { CapicoTitle } from './CapicoTitle';


export default function Capico() {

    return (
        <div className="try-caprico-section">
            <div className="sect-content">
                <CapicoTitle />
            </div>
            <div className="sect-bg" data-skarallax-scale="1" data-scale-from="1.5">
                <picture >
                    <img alt="" className="img-responsive" srcSet={capico} />
                </picture>
            </div>
        </div>
    );
}
