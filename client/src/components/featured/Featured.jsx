import './featured.scss'
import kharkov from '../../accets/img/kharkov.jpeg'
import kyiv from '../../accets/img/kyiv.jpeg'
import odessa from '../../accets/img/odessa.webp'

export const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img
                    src={odessa}
                    alt="Odessa"
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Odessa</h1>
                    <h2>56 properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img
                    src={kyiv}
                    alt="Kyiv"
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Kyiv</h1>
                    <h2>321 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src={kharkov}
                    alt="Kharkov"
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Kharkov</h1>
                    <h2>198 properties</h2>
                </div>
            </div>
        </div>
    )
};
