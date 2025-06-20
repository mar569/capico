
import logo from '../../assets/images/logo.png';

export const LogoCols: React.FC = () => {
    return (
        <div className="logo-col" style={{ display: 'flex', alignItems: 'center' }}>

            <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px', }}><img src={logo}
            />
                capico
            </h3>
            <span className="copy" style={{ marginLeft: '10px' }}>© 2025 Capico</span>
        </div>
    );
}
