import { TbMountain as Icon1 } from "react-icons/tb";
import { TbMountainOff as Icon2 } from "react-icons/tb";
import { FaMountain as Icon3 } from "react-icons/fa";
import {
  GiMountaintop as Icon4,
  GiMountainCave as Icon5,
} from "react-icons/gi";

import { IAccordionPanel } from "../components/Accordion/Panel";

export type AccordionElement = Omit<
  IAccordionPanel,
  "ariaExpanded" | "setActivePanelHandler"
>;
const accordionPanels: AccordionElement[] = [
  {
    image: {
      src: "https://images.pexels.com/photos/14129911/pexels-photo-14129911.jpeg?auto=compress&cs=tinysrgb&w=630&h=325&dpr=1",
      alt: "",
      title: "",
    },
    panelTitle: "Mountain 1",
    name: "mountain_1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    heading: "h2",
    Icon: Icon1,
    iconColor: "hsl(160, 70%, 50%)",
  },
  {
    image: {
      src: "https://images.pexels.com/photos/14329555/pexels-photo-14329555.jpeg?auto=compress&cs=tinysrgb&w=630&h=325&dpr=1",
      alt: "",
      title: "",
    },
    panelTitle: "Mountain 2",
    name: "2",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    heading: "h2",
    Icon: Icon2,
    iconColor: "hsl(184, 70%, 50%)",
  },
  {
    image: {
      src: "https://images.pexels.com/photos/10712996/pexels-photo-10712996.jpeg?auto=compress&cs=tinysrgb&w=630&h=325&dpr=1",
      alt: "",
      title: "",
    },
    panelTitle: "Mountain 3",
    name: "3",
    description:
      "Aliquam id arcu id dolor fringilla viverra. Proin semper, neque et dictum suscipit, nisl tellus rhoncus dolor, sit amet auctor nibh leo eu elit.",
    heading: "h2",
    Icon: Icon3,
    iconColor: "hsl(220, 70%, 50%)",
  },
  {
    image: {
      src: "https://images.pexels.com/photos/8956357/pexels-photo-8956357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "",
      title: "",
    },
    panelTitle: "Mountain 4",
    name: "4",
    description:
      "raesent porttitor imperdiet enim, ut porttitor leo lacinia ut. Phasellus in ultrices nulla, non varius magna. ",
    heading: "h2",
    Icon: Icon4,
    iconColor: "hsl(350, 70%, 50%)",
  },
  {
    image: {
      src: "https://images.pexels.com/photos/6873228/pexels-photo-6873228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "",
      title: "",
    },
    panelTitle: "Mountain 5",
    name: "5",
    description:
      "Etiam vehicula ex dui, ac lacinia felis ultrices sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    heading: "h2",
    Icon: Icon5,
    iconColor: "hsl(20, 70%, 50%)",
  },
];

export default accordionPanels;
