// import { Demo } from '../components/picker-view/demo';
import { Demo } from '../components/swiper/demo';
import { Swiper } from '../components/swiper/';

const Components = () => {
  return (
    <>
      {/* <Demo /> */}
      <hr />
      <hr />
      <Swiper data={[<div>test</div>, <div>big</div>]} />
    </>
  );
};

export default Components;
