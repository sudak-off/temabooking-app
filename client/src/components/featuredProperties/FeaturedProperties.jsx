import './featuredProperties.scss'
import hemo from '../../accets/propertyType/hemo.jpeg'
import CitadelInn from '../../accets/propertyType/CitadelInn.jpeg'
import FairmontGrandHotel from '../../accets/propertyType/FairmontGrandHotel.webp'
import MiraxSapphireBoutique from '../../accets/propertyType/MiraxSapphireBoutique.webp'

export const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img
                    src={hemo}
                    alt="hemo"
                    className="fpImg"
                />
                <span className="fpName">Hemo</span>
                <span className="fpCity">Odessa</span>
                <span className="fpPrice">Starting from $120</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src={FairmontGrandHotel}
                    alt="FairmontGrandHotel"
                    className="fpImg"
                />
                <span className="fpName">Fairmont Grand Hotel</span>
                <span className="fpCity">Kyiv</span>
                <span className="fpPrice">Starting from $140</span>
                <div className="fpRating">
                    <button>9.3</button>
                    <span>Exceptional</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src={MiraxSapphireBoutique}
                    alt="MiraxSapphireBoutique"
                    className="fpImg"
                />
                <span className="fpName">Mirax Sapphire Boutique Hotel</span>
                <span className="fpCity">Kharkov</span>
                <span className="fpPrice">Starting from $99</span>
                <div className="fpRating">
                    <button>8.8</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src={CitadelInn}
                    alt="CitadelInn"
                    className="fpImg"
                />
                <span className="fpName">Citadel Inn</span>
                <span className="fpCity">Lviv</span>
                <span className="fpPrice">Starting from $105</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}
