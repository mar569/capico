
export const Holder: React.FC = () => {
    return (
        <div className="sect-holder">
            <div className="stat-main-row">
                <div className="stat-left-col">
                    <div className="numbers-holder">
                        <div className="numbers ">
                            $
                            <div className="number-box">
                                <span className="num">15</span>B+
                            </div>
                        </div>
                        <span className="numbers-subtitle">Total trading volume</span>
                    </div>
                    <span className="stat-subtitle">The data is valid <br />on 25.12.2024</span>
                </div>
                <div className="stat-main-col">
                    <div className="stat-list">
                        <div className="stat-item">
                            <div className="item-holder">
                                <div className="numbers">
                                    <span className="num">68</span><em>М+</em>
                                </div>
                                <span className="bottom-info">Months online</span>
                            </div>
                        </div>
                        <div className="stat-item ">
                            <div className="item-holder">
                                <div className="numbers">
                                    <span className="num">15</span><em>K+</em>
                                </div>
                                <span className="bottom-info">Traders <br />on the platform</span>
                            </div>
                        </div>
                        <div className="stat-item">
                            <div className="item-holder">
                                <div className="numbers">
                                    <span className="num">12</span><em>М+</em>
                                </div>
                                <span className="bottom-info">Total <br />trades</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}