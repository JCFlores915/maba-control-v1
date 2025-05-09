import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom"; // o el hook que uses
import { MenuItems, type CustomMenuItem } from "../utils/menu"; // Ajusta la ruta según tu estructura de carpetas
import type { MenuProps } from "antd";

const SidebarMenu: React.FC = () => {
  const navigate = useNavigate();

  // Renderiza los ítems recursivamente
  const renderMenuItems = (items: CustomMenuItem[]):  MenuProps["items"] =>
    items.map((item) => {
      if (item.children) {
        return {
          ...item,
          children: renderMenuItems(item.children),
        };
      }
      return {
        ...item,
        onClick: () => {
          if (item.path) navigate(item.path);
        },
      };
    });

  return (
    <Menu
      mode="inline"
      items={renderMenuItems(MenuItems)}
      style={{ height: "100%", borderRight: 0 }}
    />
  );
};

export default SidebarMenu;
