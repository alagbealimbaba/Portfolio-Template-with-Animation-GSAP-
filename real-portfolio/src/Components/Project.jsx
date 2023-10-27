import { useEffect, useRef } from "react";
import { Text, Center } from "@chakra-ui/react";
import Transition from "./Transition";
import gsap from "gsap";

function Project() {
  const project = gsap.timeline();
  const projecth1 = useRef(null);

  useEffect(() => {
    project.from(
      projecth1.current,
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
      <Transition timeline={project} />
      <Text ref={projecth1} style={h1Styles}>
        Project Page
      </Text>
    </Center>
  );
}

export default Project;
