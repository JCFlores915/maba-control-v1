import React from "react";
import {
  DashboardOutlined,
  FolderOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export interface CustomMenuItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  path?: string;
  children?: CustomMenuItem[];
}

export const MenuItems: CustomMenuItem[] = [
  {
    key: "1",
    label: "Dashboard",
    icon: React.createElement(DashboardOutlined),
    path: "/",
  },
  {
    key: "2",
    label: "Archivos",
    icon: React.createElement(FolderOutlined),
    children: [
      {
        key: "2-1",
        label: "Subfolder 1",
        path: "/archivos/subfolder1",
      },
      {
        key: "2-2",
        label: "Subfolder 2",
        path: "/archivos/subfolder2",
      },
    ],
  },
  {
    key: "3",
    label: "Settings",
    icon: React.createElement(SettingOutlined),
    path: "/settings",
  },
];
