import LayoutPracBanner from './banner/banner.container';
import LayoutPracFooter from './footer';
import LayoutPracHeader from './header';
import LayoutPracNavigation from './navigation';

export default function LayoutPrac(props) {
  return (
    <>
      <LayoutPracHeader></LayoutPracHeader>
      <LayoutPracBanner></LayoutPracBanner>
      <LayoutPracNavigation></LayoutPracNavigation>
      <div style={{ display: 'flex', height: '400px' }}>
        <div style={{ background: 'skyblue', width: '30%' }}>사이드바 영역</div>
        <div style={{ width: '70%' }}>{props.children}</div>
      </div>
      <LayoutPracFooter></LayoutPracFooter>
    </>
  );
}
