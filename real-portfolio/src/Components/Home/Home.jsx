import { useRef, useEffect } from "react";
import { Center, Text } from "@chakra-ui/react";
import Transition from "../Transition";
import gsap from "gsap";

function Home() {
  const home = gsap.timeline();
  const homeh1 = useRef(null);

  useEffect(() => {
    home.from(
      homeh1.current,
      {
        duration: 0.6,
        skewX: 10,
        x: -100,
        opacity: 0,
      },
      "-=3.5"
    );
  });

  // Define the inline styles
  const h1Styles = {
    fontFamily: "Monument",
    color: "white",
    fontSize: "100px",
    textTransform: "uppercase",
  };

  return (
    <Center h="100vh">
      <Transition timeline={home} />
      <Text ref={homeh1} style={h1Styles}>
        Home Page
      </Text>
    </Center>
  );
}

export default Home;
