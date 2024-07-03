import { AccordionItem as Item } from "@szhsin/react-accordion";
import { ChevronRight } from "react-bootstrap-icons";

const AccordionItem = ({ header, req_no, title, ...rest }) => (
    <Item
      {...rest}
      header={
        <div className="list-button px-10 py-1 fc-darkgrey">
          <span>{req_no}</span>
          <p>{title}</p>
          <ChevronRight />
        </div>
      }
      className="item"
      buttonProps={{
        className: ({ isEnter }) =>
          `itemBtn ${isEnter && 'itemBtnExpanded'}`,
      }}
      contentProps={{ className: 'itemContent' }}
      panelProps={{ className: 'itemPanel' }}
    />
);

export default AccordionItem