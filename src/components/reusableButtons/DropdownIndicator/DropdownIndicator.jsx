import { components } from "react-select";
import { BsChevronDown } from "react-icons/bs";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <BsChevronDown size={20} color={"#000"} />
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
