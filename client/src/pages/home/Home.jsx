import { Navbar } from '../../components/navbar/Navbar'
import { Header } from '../../components/header/Header'
import { Featured } from '../../components/featured/Featured'
import './home.scss'
import { PropertyList } from '../../components/propertyList/PropertyList'
import { FeaturedProperties } from '../../components/featuredProperties/FeaturedProperties'
import { MailList } from '../../components/mailLIst/MailList'
import { Footer } from '../../components/footer/Footer'


export const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h2 className='homeTitle'>Browse by property type</h2>
                <PropertyList />
                <h2 className="homeTitle">Homes quests love</h2>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>
    )
}
