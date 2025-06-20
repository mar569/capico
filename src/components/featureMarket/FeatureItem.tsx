
import { IoIosArrowRoundForward } from "react-icons/io";
interface FeatureItemProps {
    title: string;
    description: string;
    link: string;
    imgSrc?: string;
    isActive: boolean;
    index: number;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description, link, imgSrc, isActive, index }) => {
    return (
        <div
            className={`swiper-slide ${isActive ? 'swiper-slide-visible swiper-slide-fully-visible swiper-slide-active' : ''}`}
            data-swiper-slide-index={index}
            style={{

                height: '430px',
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'scale(1)' : 'scale(0.9)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                border: '1px solid #ad93e2',
                borderRadius: '37px',
            }}
        >
            <div className="slide-holder">
                <div className="text-col">
                    <div className="top-box">
                        <span className="slide-title">{title}</span>
                        <p>{description}</p>
                    </div>
                    <button onClick={() => window.open(link, '_blank')} className="learn-more-btn">
                        <span>Learn more</span>
                        <IoIosArrowRoundForward style={{ color: '#fff', width: '40px', height: '40px' }} />
                    </button>
                </div>
                {imgSrc && (
                    <div className="slide-pic">
                        <img src={imgSrc} alt={title} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default FeatureItem;
