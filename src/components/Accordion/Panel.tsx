import { IconType } from "react-icons";
import { useFocusWithin } from "react-aria";
import { useState } from "react";

export interface IAccordionPanel {
  image: {
    src: string;
    alt: string;
    title: string;
  };
  panelTitle: string;
  name: string;
  description: string;
  ariaExpanded: boolean;
  heading: "h2" | "h3" | "h4" | "h5" | "h6";
  Icon: IconType;
  iconColor?: string;
  setActivePanelHandler: React.Dispatch<React.SetStateAction<string>>;
}

const Panel = ({
  image: { src, alt, title },
  panelTitle,
  name,
  description,
  ariaExpanded = false,
  heading,
  Icon,
  iconColor = "#FFF",
  setActivePanelHandler,
}: IAccordionPanel) => {
  // let [isFocusWithin, setFocusWithin] = useState(false);
  const [outlineStyle, setOutlineStyle] = useState("0");
  const { focusWithinProps } = useFocusWithin({
    onFocusWithin() {
      setOutlineStyle(`${iconColor} 3px solid`);
    },
    onBlurWithin() {
      setOutlineStyle(`0`);
    },
    // onFocusWithinChange: (isFocusWithin) => setFocusWithin(!isFocusWithin),
  });
  const HeadingHtmlTag = heading;

  return (
    <div
      className="accordion__panel"
      onClick={() => setActivePanelHandler(name)}
      {...focusWithinProps}
      style={{
        outline: outlineStyle,
        outlineOffset: "3px",
      }}
    >
      <HeadingHtmlTag className={`panel${name}__heading`}>
        <button
          className="accordion__trigger"
          aria-controls={`panel${name}__content`}
          aria-expanded={ariaExpanded}
        >
          <span className="accordion__title" id={`panel${name}__title`}>
            {panelTitle}
          </span>
          <Icon
            aria-hidden={!ariaExpanded}
            className="accordion__icon"
            preserveAspectRatio="none"
            fill={iconColor}
          />
        </button>
      </HeadingHtmlTag>
      <div
        className="accordion__content"
        id={`panel${name}__content`}
        aria-labelledby={`panel${name}__heading`}
        role={"region"}
        aria-hidden={!ariaExpanded}
      >
        <p>{description}</p>
        <img className="accordion__image" src={src} alt={alt} title={title} />
      </div>
    </div>
  );
};

export default Panel;
