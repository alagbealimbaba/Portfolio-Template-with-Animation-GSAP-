import { useEffect, useRef } from "react";
import { Text, Center } from "@chakra-ui/react";
import Transition from "./Transition";
import gsap from "gsap";

function Resume() {
  const resume = gsap.timeline();
  const resumeh1 = useRef(null);

  useEffect(() => {
    resume.from(
      resumeh1.current,
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
      <Transition timeline={resume} />
      <Text ref={resumeh1} style={h1Styles}>
        Resume Page
      </Text>
    </Center>
  );
}

export default Resume;
