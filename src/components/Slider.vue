<template>
    <div class="slider">
        <div>
            <swiper :slides-per-view="3" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

export default {
    name: 'slider-s',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
}
</script>

<style>

</style>