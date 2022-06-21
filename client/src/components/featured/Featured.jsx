import './featured.scss'
import kharkov from '../../accets/img/kharkov.jpeg'
import kyiv from '../../accets/img/kyiv.jpeg'
import odessa from '../../accets/img/odessa.webp'
import useFetch from '../../hooks/useFetch';

export const Featured = () => {

    const { data, loading, error } = useFetch('/hotels/countByCity?cities=Odessa,london')

    return (
        <div className="featured">
            {loading ? "Loading please wait..." :
                <>
                    <div className="featuredItem">
                        <img
                            src={odessa}
                            alt="Odessa"
                            className="featuredImg"
                        />
                        <div className="featuredTitles">
                            <h1>Odessa</h1>
                            <h2>{data[0]} properties</h2>
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
                            <h2>{data[1]} properties</h2>
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
                            <h2>{data[2]} properties</h2>
                        </div>
                    </div>
                </>
            }
        </div>
    )
};
