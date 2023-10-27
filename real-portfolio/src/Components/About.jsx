import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Center, Text } from "@chakra-ui/react";
import Transition from "./Transition";

function About() {
  const about = gsap.timeline();
  const abouth1 = useRef(null);

  useEffect(() => {
    about.from(
      abouth1.current,
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
      <Transition timeline={about} />
      <Text ref={abouth1} style={h1Styles}>
        About Page
      </Text>
    </Center>
  );
}

export default About;
