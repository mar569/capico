
import FeatureItem from './FeatureItem';
import { LuArrowDown } from 'react-icons/lu';
import { FiArrowUp } from 'react-icons/fi';

interface IFeature {
    title: string;
    description: string;
    link: string;
    imgSrc?: string;
}

interface IFeatureSliderProps {
    features: IFeature[];
    currentIndex: number;
    onNext: () => void;
    onPrev: () => void;
}

const FeatureSlider: React.FC<IFeatureSliderProps> = ({ features, currentIndex, onNext, onPrev }) => {
    return (
        <div className="slider-col">
            <div className="swiper swiper-creative swiper-3d">
                <div className="swiper-wrapper">
                    {features.map((feature, index) => (
                        <FeatureItem
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            link={feature.link}
                            imgSrc={feature.imgSrc}
                            isActive={currentIndex === index}
                            index={index}
                        />
                    ))}
                </div>
            </div>
            <div className="arrows-box">
                <button type="button" className="swiper-button-prev" aria-label="prev" onClick={onPrev}>
                    <FiArrowUp style={{ color: '#fff' }} />
                </button>
                <button type="button" className="swiper-button-next" aria-label="next" onClick={onNext}>
                    <LuArrowDown style={{ color: '#fff' }} />
                </button>
            </div>

        </div>
    );
};

export default FeatureSlider;
