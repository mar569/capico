
import binance from '../../assets/images/iconCrypto/binance.svg';
import bybit from '../../assets/images/iconCrypto/Bybit-Monochrome.svg';
import bitget from '../../assets/images/iconCrypto/bitget.svg'
import okx from '../../assets/images/iconCrypto/OKX_logo.svg';
import htx from '../../assets/images/iconCrypto/htx.svg'

export const PartnerList: React.FC = () => {
    return (
        <div className="partners-list">
            <div className="item">
                <a href="https://capico.app/l/en_binance" target="_blank" className="item-frame" aria-label="Binance">
                    <img src={binance} alt="" />
                </a>
                <span className="item-text">Binance</span>
            </div>
            <div className="item">
                <a href="https://capico.app/l/en_huobi" target="_blank" className="item-frame" aria-label="HTX">
                    <img src={htx} alt="" />
                </a>
                <span className="item-text">HTX</span>
            </div>
            <div className="item">
                <a href="https://capico.app/l/en_bitget" target="_blank" className="item-frame" aria-label="Bitget">
                    <img src={bitget} alt="" />
                </a>
                <span className="item-text">Bitget</span>
            </div>
            <div className="item">
                <a href="https://capico.app/l/en_okx" target="_blank" className="item-frame" aria-label="OKX">
                    <img src={okx} alt="" />
                </a>
                <span className="item-text">OKX</span>
            </div>
            <div className="item">
                <a href="https://capico.app/l/en_bybit" target="_blank" className="item-frame" aria-label="Bybit">
                    <img src={bybit} alt="" />
                </a>
                <span className="item-text">Bybit</span>
            </div>
        </div>
    )
}