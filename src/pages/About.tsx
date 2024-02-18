import { useSpring, animated } from "@react-spring/web";

const About = () => {
  // const springs = useSpring({
  //   from: { x: 0 },
  //   to: { x: 100 },
  //   delay: 2000,
  // });
  return (
    <div className="container m-auto my-3 min-h-[50vh]">
      <h2 className="text-3xl">About page</h2>
      {/* <animated.div
        style={{
          width: 80,
          height: 80,
          background: "#ff6d6d",
          borderRadius: 8,
          ...springs,
        }}
      /> */}
    </div>
  );
};

export default About;
