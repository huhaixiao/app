import { useSpring, animated } from "@react-spring/web";

const ReactSpring = () => {
  const [{ y }, api] = useSpring(() => ({
    from: { y: 0 },
    config: {
      tension: 400,
      mass: 0.8
    }
  }));

  return <animated.div style={{ translateY: y }}></animated.div>;
};

export default ReactSpring;
