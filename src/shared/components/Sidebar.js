import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import {
  Chat,
  EmojiFlags,
  ExpandMoreOutlined,
  LocalHospital,
  People,
  Storefront,
  VideoLibrary,
} from "@mui/icons-material";
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const user = useSelector((state) => state.user.authUser);
  return (
    <div className="sidebar">
      <SidebarRow src={user && user.picture} title={user && user.fullName} />
      <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messenger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} />
    </div>
  );
};

export default Sidebar;
