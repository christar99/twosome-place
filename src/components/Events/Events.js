import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './css/events.module.css';
import 'swiper/swiper-bundle.css';


const Events = () => {
    return (
        <div className={styles.events}>
            <span className={styles.events_subject}>EVENT</span>
            <Swiper
                className={styles.banner}
                // spaceBetween={10}
                slidesPerView={3}
                loop={true}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide className={styles.eventContainer}><div>
                    <img className={styles.eventImage} alt='event1' src={require("./image/twosome_event1.jpg").default} />
                    <span className={styles.eventTitle}>요기요로 주문하면 최대 6,000원 할인</span>
                </div></SwiperSlide>

                <SwiperSlide className={styles.eventContainer}><div>
                    <img className={styles.eventImage} alt='event2' src={require("./image/twosome_event2.jpg").default} />
                    <span className={styles.eventTitle}>투썸플레이스의 추천 빙수!</span>
                </div></SwiperSlide>

                <SwiperSlide className={styles.eventContainer}><div>
                    <img className={styles.eventImage} alt='event3' src={require("./image/twosome_event3.jpg").default} />
                    <span className={styles.eventTitle}>투썸플레이스 여름캠핑용품 3종출시</span>
                </div></SwiperSlide>

                <SwiperSlide className={styles.eventContainer}><div>
                    <img className={styles.eventImage} alt='event4' src={require("./image/twosome_event4.jpg").default} />
                    <span className={styles.eventTitle}>새콤달콤 신종메뉴 프라페!</span>
                </div></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Events;