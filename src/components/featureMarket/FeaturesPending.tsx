import { useState } from 'react';
import FeatureSlider from './FeatureSlider';
import FeatureList from './FeatureList';

const features = [
    {
        title: "Chart trading",
        description: "Manage your smart trades and bots quickly. Right in the chart.",
        link: "https://doc.capico.app/terminal/chart",
    },
    {
        title: "TP Ladder and averaging",
        description: "Create your own order ladders to enter and exit positions. The platform will count your average entry price and your total profit automatically.",
        link: "https://doc.capico.app/terminal/ladder",
    },
    {
        title: "Automatic Breakeven",
        description: "As soon as your first take is executed, the platform will move your Stop Loss to break even, shielding your position from unwanted loss.",
        link: "https://doc.capico.app/terminal/breakeven",
    },
    {
        title: "Booster",
        description: "Trade on Binance Futures with just 2 buttons that let you enter a position, and flip it from long to short and back with a single click.",
        link: "https://doc.capico.app/features/booster",
    },
    {
        title: "Panic Sell",
        description: "Close all your active smart trades quickly, and exit the positions at the current market price.",
        link: "https://youtu.be/CDLcey_27Gc?t=721",
    },
    {
        title: "Stop Loss and Take Profit",
        description: "Set both Stop Loss and multiple Take Profits for each trade to limit your risks and increase your earnings.",
        link: "https://doc.capico.app/terminal/sltp",
    },
    {
        title: "Trailing",
        description: "Buy and sell assets at better prices with different trailing options.",
        link: "https://doc.capico.app/terminal/trailing",
    },
    {
        title: "SL Timeout and Candlestick Close",
        description: "You will only exit your position when the timer runs out, or when the candlestick of your selected timeframe closes.",
        link: "https://doc.capico.app/terminal/sl",
    },
    {
        title: "Conditional orders",
        description: "You can place these orders both above and below the price. Your funds will not be reserved.",
        link: "https://doc.capico.app/terminal/orders#conditional-order",
    },
    {
        title: "Channel bot",
        description: "Get maximum profit from trading within a set price range. Auto-restart lets you do unlimited trades without your direct input.",
        link: "https://doc.capico.app/features/bot",
    }
];

export const FeaturesPending: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
    };

    return (
        <div className="features-section" id="features" data-scroll-add="20">
            <div className="container">
                <div className="sect-title-row">
                    <h2>Features</h2>
                    <span className="sect-subtitle">Master the market</span>
                </div>
                <div className="feats-slider-row">
                    <FeatureList features={features} onSelect={setCurrentIndex} />
                    <FeatureSlider features={features} currentIndex={currentIndex} onNext={handleNext} onPrev={handlePrev} />
                </div>
            </div>
        </div>
    );
};


