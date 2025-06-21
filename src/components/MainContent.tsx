import { useState } from 'react';
import { ToastContainer } from "react-toastify";
import { useAuth } from "./contexts/AuthContext";

import { Header } from "./Header/Header";
import CryptoPlayer from "./VideoCrypto/CryptoPlayer";
import TotalTraid from "./NumberSection/TotalTraid";
import Features from "./FeaturesPage/Features";
import Carousel from "./Carousel";
import CryptoInfo from "./CryptoIfoPage/CryptoInfo";
import Security from "./SecurutyPage/Security";
import { Footer } from "./Footer/Footer";
import Partners from "./ParthnersPage/Partners";
import Capico from "./CapicoPage/Capico";

import Trade from "./TradePage/Trade";
import AuthModal from './contexts/Modal/AuthModal';
import { AutoAnimateWrapper } from './AutoAnimateWrapper';


const MainContent: React.FC = () => {
    const { user, logout } = useAuth();

    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const openModal = () => setIsAuthModalOpen(true);

    const closeModal = () => setIsAuthModalOpen(false);

    const handleSignClick = async () => {
        if (user) {
            await logout();
        } else {
            openModal();
        }
    };
    return (
        <div className="page-main-wrap">
            <div className="body-page">
                <Header onSignInClick={handleSignClick} user={user} />
                <div className="main-page-holder" id="scrolled" data-scrollbar="true" tabIndex={-1}>
                    <div className="scroll-content">
                        <AutoAnimateWrapper>
                            <div className="all-page-wrapper">
                                <div className="all-page-holder">
                                    <CryptoInfo />
                                    <CryptoPlayer />
                                    <TotalTraid />
                                    <Features />
                                    <Carousel />
                                    <Trade />
                                    <Security />
                                    <Partners />
                                    <Capico />
                                    <Footer />
                                </div>
                            </div>
                        </AutoAnimateWrapper>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
            <AuthModal show={isAuthModalOpen} onClose={closeModal} />
        </div>
    );
};

export default MainContent;
