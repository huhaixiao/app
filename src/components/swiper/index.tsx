import React, { useMemo } from 'react';
import 'swiper/css';
import { Swiper as InnerSwiper, SwiperSlide } from 'swiper/react';

type IType = typeof InnerSwiper;

interface IProps extends IType {
  variant?: string;
  data: React.ReactElement[];
}

export const Swiper = (props: IProps) => {
  const slides = useMemo(() => {
    const results = React.Children.map(props.data, item => {
      return <SwiperSlide>{item}</SwiperSlide>;
    });

    return results;
  }, [props.data]);
  return (
    <InnerSwiper slidesPerView={1} {...props}>
      {slides}
    </InnerSwiper>
  );
};
