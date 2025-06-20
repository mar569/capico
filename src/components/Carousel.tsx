import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import speed from '../assets/images/vector/Vector (1).png';
import hotkeys from '../assets/images/vector/Vector (2).png';
import notific from '../assets/images/vector/Vector (3).png';
import demo from '../assets/images/vector/Vector (4).png';
import { CgChevronRight, CgChevronLeft } from "react-icons/cg";

export default function Carousel() {
    return (
        <div className="comfort-section">
            <div className="sect-holder">
                <div className="container">
                    <div className="bordered-title-box">
                        <h2>Everything you need <br />for comfortable work</h2>
                    </div>
                    <div className="comfort-slider-wrapper">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            pagination={{ clickable: true }}
                            spaceBetween={10}
                            slidesPerView={1}
                        >
                            <div className="swiper-button-prev">
                                <CgChevronLeft />
                            </div>
                            <div className="swiper-button-next">
                                <CgChevronRight />
                            </div>
                            <div className='swiper-wrapper'>
                                <SwiperSlide>
                                    <div className="top-info">
                                        <span className="slide-title">Speed</span>
                                        <img src={speed} alt="Speed icon" />
                                    </div>
                                    <p>Instantaneous order placement and on-the-fly exchange account switching.</p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="top-info">
                                        <span className="slide-title">Hotkeys</span>
                                        <img src={hotkeys} alt="Hotkeys icon" />
                                    </div>
                                    <p>Make your trading efficient with hotkeys.</p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="top-info">
                                        <span className="slide-title">Notifications</span>
                                        <img src={notific} alt="Notifications icon" />
                                    </div>
                                    <p>Get all the important updates to your email or Telegram.</p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="top-info">
                                        <span className="slide-title">Demo account</span>
                                        <img src={demo} alt="Demo account icon" />
                                    </div>
                                    <p>Practice. Learn. Put features and strategies to the test. Risk and charge free.</p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="top-info">
                                        <span className="slide-title">Cloud service</span>
                                        <img src={demo} alt="Cloud service icon" />
                                    </div>
                                    <p>Silent updates causing no interference with trading. Access from any device.</p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="top-info">
                                        <span className="slide-title">Dark theme</span>
                                        <img src={demo} alt="Dark theme icon" />
                                    </div>
                                    <p>Trade anytime. Even at night.</p>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}
