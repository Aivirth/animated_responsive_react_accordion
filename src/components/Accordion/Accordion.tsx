import Panel, { IAccordionPanel } from "./Panel";
import { useEffect, useState } from "react";
import { AccordionElement } from "../../assets/accordionData";

interface IAccordionProps {
  panels: AccordionElement[];
}

const Accordion = ({ panels }: IAccordionProps) => {
  const [activePanel, setActivePanel] = useState<string>("");

  useEffect(() => {
    const initialActivePanel = panels[0].name;
    if (initialActivePanel) {
      setActivePanel(initialActivePanel);
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="accordion">
        {panels.map(
          ({
            panelTitle,
            image,
            name,
            description,
            heading,
            Icon,
            iconColor,
          }) => (
            <Panel
              panelTitle={panelTitle}
              key={name}
              image={image}
              name={name}
              description={description}
              ariaExpanded={activePanel === name ? true : false}
              heading={heading}
              Icon={Icon}
              iconColor={iconColor}
              setActivePanelHandler={setActivePanel}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Accordion;
