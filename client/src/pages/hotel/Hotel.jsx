import React, { useState } from 'react'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { MailList } from '../../components/mailLIst/MailList'
import { Navbar } from '../../components/navbar/Navbar'
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';
import "./hotel.scss"
import pic1 from '../../accets/slider/1.jpeg'
import pic2 from '../../accets/slider/2.jpeg'
import pic3 from '../../accets/slider/3.jpeg'
import pic4 from '../../accets/slider/4.jpeg'
import pic5 from '../../accets/slider/5.jpeg'
import pic6 from '../../accets/slider/6.jpeg'

export const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const photos = [
        {
            src: pic1,
        },
        {
            src: pic2,
        },
        {
            src: pic3,
        },
        {
            src: pic4,
        },
        {
            src: pic5,
        },
        {
            src: pic6,
        },
    ];

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber)
    };

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {open && (
                    <div className="slider">
                        <AiOutlineClose
                            className="close"
                            onClick={() => setOpen(false)}
                        />
                        <AiOutlineLeft
                            className="arrow"
                            onClick={() => handleMove("l")}
                        />
                        <div className="sliderWrapper">
                            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                        </div>
                        <AiOutlineRight
                            className="arrow"
                            onClick={() => handleMove("r")}
                        />
                    </div>
                )}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Tower Street Apartments</h1>
                    <div className="hotelAddress">
                        <IoLocationSharp />
                        <span>Elton St 125 New york</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location – 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo, i) => (
                            <div className="hotelImgWrapper" key={i}>
                                <img
                                    onClick={() => handleOpen(i)}
                                    src={photo.src}
                                    alt=""
                                    className="hotelImg"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of City</h1>
                            <p className="hotelDesc">
                                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                                Street Apartments has accommodations with air conditioning and
                                free WiFi. The units come with hardwood floors and feature a
                                fully equipped kitchenette with a microwave, a flat-screen TV,
                                and a private bathroom with shower and a hairdryer. A fridge is
                                also offered, as well as an electric tea pot and a coffee
                                machine. Popular points of interest near the apartment include
                                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                                airport is John Paul II International Kraków–Balice, 16.1 km
                                from Tower Street Apartments, and the property offers a paid
                                airport shuttle service.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real heart of Kyiv, this property has an
                                excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}
