/**

https://swiperjs.com/

 */
import { Navigation, Pagination, Scrollbar, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import styled, { createGlobalStyle } from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
  background: lightgreen;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const SliderContainer = styled.div<{ color: string }>`
  width: 100%;
  height: 100%;
  background-color: ${props => props.color};
`;

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
  } 
`;

export const Demo = () => {
  const [slides, setSlides] = useState<any[]>(() => {
    const result = [
      <SwiperSlide>
        <SliderContainer color="#e4393c">
          Sli
          <hr />
          de 1
        </SliderContainer>
      </SwiperSlide>,
      <SwiperSlide>
        <SliderContainer color="#e439fc">Slide 2</SliderContainer>
      </SwiperSlide>,
      <SwiperSlide>
        <SliderContainer color="#a4303c">Slide 3</SliderContainer>
      </SwiperSlide>,
      <SwiperSlide>
        <SliderContainer color="#ef393c">Slide 4</SliderContainer>
      </SwiperSlide>
    ];

    for (let i = 5; i < 50; i += 1) {
      result.push(
        <SwiperSlide>
          <SliderContainer color="#ef393c">Slide {i}</SliderContainer>
        </SwiperSlide>
      );
    }

    return result;
  });
  return (
    <Container>
      <button
        style={{
          width: 300,
          height: 50,
          border: '1px solid black',
          borderRadius: '32px',
          margin: '24px auto',
          display: 'block'
        }}
        onClick={() => {
          const nextSlides = [...slides];
          const index = nextSlides.length;
          nextSlides.push(
            <SwiperSlide>
              <SliderContainer color={`rgb(${index * 10}, 105, 255)`}>
                Slide ${index}{' '}
              </SliderContainer>
            </SwiperSlide>
          );

          setSlides(nextSlides);
        }}>
        +
      </button>
      <GlobalStyle />
      <Swiper
        height={300}
        modules={[FreeMode]}
        autoHeight={false}
        effect="fade"
        followFinger={true}
        loop={true}
        freeMode={{
          enabled: true,
          minimumVelocity: 0.02,
          momentum: true,
          // momentumBounce: true,
          // momentumBounceRatio: 100,
          momentumRatio: 1.5
        }}
        // modules={[Navigation, Pagination, Scrollbar, FreeMode]}
        // freeMode={{
        //   enabled: true,
        //   sticky: true
        // }}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}>
        {slides}
      </Swiper>
    </Container>
  );
};
