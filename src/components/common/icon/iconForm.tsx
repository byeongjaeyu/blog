import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { EColor, Size } from "@defines/css";

interface IconProps {
  icon: IconDefinition,
  width: Size,
  height: Size,
  color?: EColor,
}


export function Icon(props: IconProps) {
  const {
    icon,
    width,
    height,
    color = EColor.BLACK,
  } = props;
  return (
    <>
      <FontAwesomeIcon
        icon={icon}
        style={{ width:width, height:height, color:color }}
      />
    </>
  )
}