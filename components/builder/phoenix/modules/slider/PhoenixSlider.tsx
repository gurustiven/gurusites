/* eslint-disable @next/next/no-img-element */
import styles from './Slider.module.scss'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'

export default function PhoenixSlider({ data, style }: any) {
  // If exist
  if (data?.config)
    return (
      <section className={styles.slider} style={style}>
        <div
          className={styles.container}
          style={{ maxWidth: data?.style?.general?.containerWidth }}
        >
          <span style={{ color: 'white' }}>{JSON.stringify(data)}</span>
          <Swiper
            centeredSlides={true}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {data?.config?.items?.map(({ source, text }: any, key: any) => (
              <SwiperSlide className={styles.item} key={key}>
                {text && <div className={styles.text}>{text}</div>}
                <img src={source} alt={text ? text : 'photo'} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    )

  // If doesn't exist
  return null
}
