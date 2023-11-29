import { ButtonGroup, Container, Img, SlideButton, SlideGroup, Wrapper } from './banner.styles';
import { IMysliderProps } from './banner.types';

const SlideImg = (props) => {
  return <Img src={props.img} />;
};
export default function Myslider(props: IMysliderProps): JSX.Element {
  return (
    <Wrapper>
      <Container>
        <SlideGroup ref={props.slideRef}>
          <SlideImg img={props.img01}></SlideImg>
          <SlideImg img={props.img02}></SlideImg>
          <SlideImg img={props.img03}></SlideImg>
        </SlideGroup>
        <ButtonGroup>
          <SlideButton onClick={props.onClickPrev}>Prev</SlideButton>
          <SlideButton onClick={props.onClickNext}>Next</SlideButton>
        </ButtonGroup>
      </Container>
    </Wrapper>
  );
}
