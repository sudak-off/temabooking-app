import './propertylist.scss';
import hotels from '../../accets/propertyType/hotels.jpeg'
import apartments from '../../accets/propertyType/apartments.jpeg'
import resorts from '../../accets/propertyType/resorts.jpeg'
import villas from '../../accets/propertyType/villas.jpeg'
import cabins from '../../accets/propertyType/cabins.jpeg'
import useFetch from '../../hooks/useFetch';

export const PropertyList = () => {

    const { data, loading, error } = useFetch('/hotels/countByType')

    const images = [
        hotels,
        apartments,
        resorts,
        villas,
        cabins
    ]


    return (
        <div className="pList">
            {loading ? 'Loading please wait...' : <>
                {data && images.map((img, i) => (
                    <div className="pListItem" key={i}>
                        <img
                            src={img}
                            alt=""
                            className="pListImg"
                        />
                        <div className="pListTitles">
                            <h1>{data[i]?.type}</h1>
                            <h2>{data[i]?.count} {data[i]?.type}</h2>
                        </div>
                    </div>
                ))}

            </>}
        </div>
    );
};
