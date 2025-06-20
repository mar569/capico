import { PartnerList } from "./PartnerList";


export default function Partners() {
    return (
        <div className="partners-section">
            <div className="container">
                <div className="bordered-heading">
                    <h2>Partners</h2>
                    <div className="content-col">
                        <p><b>The Capico platform is an official broker</b> for leading cryptocurrency exchanges</p>
                    </div>
                </div>
                <PartnerList />
            </div >
        </div >
    );
}
