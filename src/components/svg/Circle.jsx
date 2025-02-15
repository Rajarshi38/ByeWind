import { Icon } from "@chakra-ui/react";
const Dot = (props) => (
  <Icon
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z"
      fill="#1C1C1C"
      fillOpacity={0.2}
    />
  </Icon>
);
export default Dot;
