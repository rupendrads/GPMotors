import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import "./AccordioncStyle.css";

function AccordionC({ data }) {
  const [selectedvalue, setSelectedvalue] = React.useState(0);
  const onSelectionChanged = (selectedvalue) => {
    console.log(selectedvalue);
    setSelectedvalue(selectedvalue);
  };

  return (
    <Accordion.Root
      className="AccordionRoot"
      type="single"
      collapsible
      onValueChange={onSelectionChanged}
    >
      {data.map((item) => (
        <Accordion.Item className="AccordionItem" value={item.id} key={item.id}>
          <AccordionTrigger value={item.id} selectedvalue={selectedvalue}>
            {item.title}
          </AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames("AccordionTrigger", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <span className="material-icons text-teal-500">
          {props.value == props.selectedvalue ? "remove" : "add"}
        </span>
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

export default AccordionC;
