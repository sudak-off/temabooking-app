import './featuredProperties.scss'
import hemo from '../../accets/propertyType/hemo.jpeg'
import CitadelInn from '../../accets/propertyType/CitadelInn.jpeg'
import FairmontGrandHotel from '../../accets/propertyType/FairmontGrandHotel.webp'
import MiraxSapphireBoutique from '../../accets/propertyType/MiraxSapphireBoutique.webp'
import useFetch from '../../hooks/useFetch'

export const FeaturedProperties = () => {

    const { data, loading, error } = useFetch('/hotels?featured=false&limit=4')


    return (
        <div className="fp">
            {loading ? 'Loading please wait...' : <>
                {data.map((item) => (
                    <div className="fpItem" key={item._id}>
                        <img
                            src={item.photos[0]}
                            alt=""
                            className="fpImg"
                        />
                        <span className="fpName">{item.name}</span>
                        <span className="fpCity">{item.city}</span>
                        <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
                        {item.rating && <div className="fpRating">
                            <button>{item.rating}</button>
                            <span>Excellent</span>
                        </div>}
                    </div>
                ))}
            </>}
        </div>
    )
}
