// ["ai", "bs", "bi", "ci", "cg", "di", "fi", "fc", "fa", "fa6", "gi", "go", "gr", "hi", "hi2", "im", "lia", "io", "io5", "lu", "nd", "pi", "rx", "ri", "si", "sl", "tb", "tfi", "ti", "vsc", "wi"]
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as CiIcons from "react-icons/ci";
import * as CgIcons from "react-icons/cg";
import * as DiIcons from "react-icons/di";
import * as FiIcons from "react-icons/fi";
import * as FcIcons from "react-icons/fc";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as GiIcons from "react-icons/gi";
import * as GoIcons from "react-icons/go";
import * as GrIcons from "react-icons/gr";
import * as HiIcons from "react-icons/hi";
import * as Hi2Icons from "react-icons/hi2";
import * as ImIcons from "react-icons/im";
import * as LiaIcons from "react-icons/lia";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as LuIcons from "react-icons/lu";
import * as PiIcons from "react-icons/pi";
import * as RxIcons from "react-icons/rx";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as SlIcons from "react-icons/sl";
import * as TbIcons from "react-icons/tb";
import * as TfiIcons from "react-icons/tfi";
import * as TiIcons from "react-icons/ti";
import * as VscIcons from "react-icons/vsc";
import * as WiIcons from "react-icons/wi";
import React from "react";

const customIcons = {
  ...AiIcons,
  ...BsIcons,
  ...BiIcons,
  ...CiIcons,
  ...CgIcons,
  ...DiIcons,
  ...FiIcons,
  ...FcIcons,
  ...FaIcons,
  ...Fa6Icons,
  ...GiIcons,
  ...GoIcons,
  ...GrIcons,
  ...HiIcons,
  ...Hi2Icons,
  ...ImIcons,
  ...LiaIcons,
  ...IoIcons,
  ...Io5Icons,
  ...LuIcons,
  ...PiIcons,
  ...RxIcons,
  ...RiIcons,
  ...SiIcons,
  ...SlIcons,
  ...TbIcons,
  ...TfiIcons,
  ...TiIcons,
  ...VscIcons,
  ...WiIcons,
};

export const CustomIcon = ({
  name,
  ...props
}: {
  name: string;
  [key: string]: string;
}) => {
  const Icon =
    customIcons?.[name as unknown as keyof typeof customIcons] ||
    customIcons.RxCross2;
  return <Icon {...props} />;
};

export default customIcons;
