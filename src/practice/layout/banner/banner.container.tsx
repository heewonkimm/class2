import { useEffect, useRef, useState } from 'react';
import Myslider from './banner.presenter';

export default function LayoutPracBanner() {
  const img01 = '/slide/slide01.jpeg';
  const img02 = '/slide/slide02.jpeg';
  const img03 = '/slide/slide03.jpeg';

  const totalSlide = 2;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const onClickNext = () => {
    if (currentSlide >= totalSlide) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const onClickPrev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(totalSlide);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all .5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  });

  return <Myslider img01={img01} img02={img02} img03={img03} slideRef={slideRef} onClickNext={onClickNext} onClickPrev={onClickPrev}></Myslider>;
}
