import React, { useState } from "react";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import image3 from "../../Assets/Vector 3.png";
import image4 from "../../Assets/prevArrow.png";
import { Container } from "react-bootstrap";
import image from "./Illustration - composition 2.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
    {
        name: "John Doe",
        company: "Company A",
        message: "Testimonial 1 message goes here...",
        image: image,
    },
    {
        name: "Jane Smith",
        company: "Company B",
        message: "Testimonial 2 message goes here...",
        image: image,
    }, {
        name: "Kavya Smith",
        company: "Company E",
        message: "Testimonial 3 message goes here...",
        image: image,
    },
    // Add more testimonials as needed
];

function TestimonialSection() {
    // const [showslider, setShowslider] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPrevButtonDisabled, setPrevButtonDisabled] = useState(true);
    const [isNextButtonDisabled, setNextButtonDisabled] = useState(false);
    const [arrow, setarrow] = useState(false);
    const handlePrevClick = () => {
        const newIndex = currentIndex - 1;
        setCurrentIndex(newIndex);
        updateButtonStatus(newIndex);
    };

    const handleNextClick = () => {
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex);
        updateButtonStatus(newIndex);
        setarrow(true)

    };
    const NextArrowButton = ({ imgSrc, imgAlt, onClick }) => {
        return (
            <button
                className="SliderNextArrows"
                onClick={onClick}
                style={{ backgroundColor: "transparent", border: "none" }}
            >
                <img
                    src={image4}
                    alt={image4}
                />
            </button>
        );
    };
    const PrevArrowButton = ({ imgSrc, imgAlt, onClick }) => {
        return (
            <button
                className="SliderPrevArrows"
                onClick={onClick}
                style={{ backgroundColor: "transparent", border: "none" }}
            >
                <img
                    src={image3}
                    alt={image3}
                />
            </button>
        );
    };
    const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: false,      // Looping
        speed: 500,        // Transition speed in milliseconds
        slidesToShow: 1,   // Number of slides to show at once
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrowButton imgSrc={image3} className="previousArrow" imgAlt="previous-button" />,
        nextArrow: <NextArrowButton imgSrc={image3} className="nextArrow" imgAlt="next-button" />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false,
                }
            },
        ]
    };
    const updateButtonStatus = (index) => {
        setPrevButtonDisabled(index === 0);
        setNextButtonDisabled(index === testimonials.length - 1);
    };
    // const handleNext = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    // };

    // const handlePrev = () => {
    //     setCurrentIndex((prevIndex) =>
    //         prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    //     );
    // };

    const testimonial = testimonials[currentIndex];
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <section className="grid-section">
            <Container className="container-md">
                <h1 class="main-name-sect mb-40"> What <span className="text-wrapper">women </span>across India have to say</h1>
                <div className="card-mobile-sectiond">
                    <Slider {...settings} className="carousel-section">

                        {testimonials.map((testimonial) => (
                            <div >
                                <div key={testimonial} className="testimonialSlide">
                                    <div className="testimonialCardImage">
                                        <img src={testimonial.image} alt="" />
                                    </div>
                                    <div className="testimonialContent">
                                        <h1 className="header">{testimonial.name}</h1>
                                        <h2 className="subhead">{testimonial.company}</h2>
                                        <h3 className="Sub1">
                                            We make it easy for women to access
                                            information on workplaces of interest, enabling more
                                            <span className="underline"> informed decision-making </span>
                                            and <span className="underline"> honest feedback-sharing.</span>
                                        </h3>

                                    </div>
                                </div></div>))}
                    </Slider>
                </div>
            </Container>
            {/* You may include other sections/components below */}
        </section>
    );
}

export default TestimonialSection;
