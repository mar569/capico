
import twitter from '../../assets/images/logo-footer/tw.png';
import facebook from '../../assets/images/logo-footer/f.png';
import youtube from '../../assets/images/logo-footer/yt.png';
import telegram from '../../assets/images/logo-footer/tg.png';
import vk from '../../assets/images/logo-footer/vk.png';


export const LeftCols: React.FC = () => {
    return (
        <div className="left-cols">
            <div className="soc-col">
                <div className="top-info">
                    <span className="col-title">Follow us on social media</span>
                    <ul className="soc-list">
                        <li >
                            <img src={facebook} alt="Facebook" aria-label="Facebook" />
                        </li>
                        <li>
                            <img src={youtube} alt="YouTube" aria-label="YouTube" />
                        </li>
                        <li>
                            <img src={twitter} alt="Twitter" aria-label="Twitter" />
                        </li>
                        <li className="blue">
                            <img src={telegram} alt="Telegram Channel" aria-label="Telegram Channel" />
                            <span>Channel</span>
                        </li>
                        <li >
                            <img src={vk} alt="VKontakte" aria-label="VKontakte" />
                        </li>
                    </ul>
                </div>
                <span className="mail-link">support@capico.app</span>
            </div>
        </div>
    )
}

