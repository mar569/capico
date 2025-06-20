
interface IFeature {
    title: string;
    description: string;
    link: string;
}

interface IFeatureListProps {
    features: IFeature[];
    onSelect: (index: number) => void;
}

const FeatureList: React.FC<IFeatureListProps> = ({ features, onSelect }) => {
    return (
        <div className="slides-navigation-col">
            <ul className="jsFeatsSliderNav">
                {features.map((feature, index) => (
                    <li key={index}>
                        <button className="gradient-text" type="button" onClick={() => onSelect(index)}>
                            {feature.title}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeatureList;
