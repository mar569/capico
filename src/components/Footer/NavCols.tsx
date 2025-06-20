
export const NavCols: React.FC = () => {
    return (
        <nav className="nav-col">
            <ul>
                <li>
                    <span>Documents</span>
                    <ul>
                        <li>
                            <a href="https://doc.capico.app/docs/terms-of-use" target="_blank">User  agreement</a>
                        </li>
                        <li>
                            <a href="https://doc.capico.app/docs/privacy-policy" target="_blank">Privacy policy</a>
                        </li>
                        <li>
                            <a href="https://doc.capico.app/docs/referral-agreement" target="_blank">Referral agreement</a>
                        </li>
                        <li>
                            <a href="https://doc.capico.app/docs/refund-policy" target="_blank">Refund policy</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul>
                <li>
                    <span>Platform</span>
                    <ul>
                        <li>
                            <a href="/en/#features" className="js_scrollToLink" data-pagelink="true">Features</a>
                        </li>
                        <li>
                            <a href="/en/prices/">Prices</a>
                        </li>
                        <li>
                            <a href="/en/partners/">Partners</a>
                        </li>
                        <li className="hidden">
                            <a href="#">Academy</a>
                        </li>
                        <li>
                            <a href="https://doc.capico.app/" target="_blank">Knowledge base</a>
                        </li>
                        <li>
                            <a href="https://doc.capico.app/start/faq" target="_blank">FAQ</a>
                        </li>
                        <li className="hidden">
                            <a href="#">Careers</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="/app/">Sign in</a>
                </li>
                <li>
                    <a href="/app/signup">Create an account</a>
                </li>
            </ul>
        </nav>
    )
}