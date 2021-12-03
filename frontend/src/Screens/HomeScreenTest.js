import BrandSelection from "../componets/BrandSelection";
import DeviceSelection from "../componets/DeviceSelection";
import FeatureSelection from "../componets/FeatureSelection";
import PriceSelection from "../componets/PriceSelection";
import RatingsSelection from "../componets/RatingsSelection";

export default function HomeScreenTest(){


            return (
                <div>

                <div className="row">
                <h2>Welcome to EZ Tech Advisor - Please choose your Device preferences</h2>
                </div>
           
                <div className="row">
                    <div className="row">
                        <DeviceSelection></DeviceSelection>
                        <PriceSelection></PriceSelection>
                        <FeatureSelection></FeatureSelection>
                        <BrandSelection></BrandSelection>
                        <RatingsSelection></RatingsSelection>
                    </div>
                </div>
                </div>

            )
}

