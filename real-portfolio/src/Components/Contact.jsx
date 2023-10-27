import { useEffect, useRef } from "react";
import { Text, Center } from "@chakra-ui/react";
import Transition from "./Transition";
import gsap from "gsap";

function Contact() {
  const contact = gsap.timeline();
  const contacth1 = useRef(null);

  useEffect(() => {
    contact.from(
      contacth1.current,
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
      <Transition timeline={contact} />
      <Text ref={contacth1} style={h1Styles}>
        Contact Page
      </Text>
    </Center>
  );
}

export default Contact;
