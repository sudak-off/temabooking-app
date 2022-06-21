import './propertylist.scss';
import hotels from '../../accets/propertyType/hotels.jpeg'
import apartments from '../../accets/propertyType/apartments.jpeg'
import resorts from '../../accets/propertyType/resorts.jpeg'
import villas from '../../accets/propertyType/villas.jpeg'
import cabins from '../../accets/propertyType/cabins.jpeg'

export const PropertyList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <img
                    src={hotels}
                    alt=""
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>890 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img
                    src={apartments}
                    alt=""
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>Apartments</h1>
                    <h2>670 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img
                    src={resorts}
                    alt=""
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>Resorts</h1>
                    <h2>360 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img
                    src={villas}
                    alt=""
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>54 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img
                    src={cabins}
                    alt=""
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>Cabins</h1>
                    <h2>120 hotels</h2>
                </div>
            </div>
        </div>
    );
};
