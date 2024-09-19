import React, { useState, useRef, useEffect } from "react";
import { Layout, Button } from "antd";
import { UserOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";

const { Header } = Layout;

const CustomDropdown = ({ children, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{children}</div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {menuItems}
          </div>
        </div>
      )}
    </div>
  );
};

const HeaderComponent = ({ clientName, onLogout }) => {
  const menuItems = (
    <button
      onClick={onLogout}
      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      role="menuitem"
    >
      <LogoutOutlined className="mr-2" />
      Logout
    </button>
  );

  return (
    <Header className="bg-blue-100 px-4 flex items-center justify-between sm:px-6 sm:py-8 border-b-2">
      <div className="flex items-center">
        <img src="/logo.png" alt="Bitroot" className="h-7 sm:h-12 m-2 sm:m-4" />
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <CustomDropdown menuItems={menuItems}>
          <Button type="link" className="flex items-center bg-white rounded-full shadow-lg px-2 py-1 sm:px-4 sm:py-6">
            <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-2 bg-blue-500 rounded-full">
              <UserOutlined className="text-white text-lg sm:text-base" />
            </div>
            <span className="text-black text-lg sm:text-lg font-medium">{clientName}</span>
          </Button>
        </CustomDropdown>
        <Button
          type="text"
          icon={<SettingOutlined style={{ fontSize: "16px", sm: "28px" }} />}
          className="text-blue-500 bg-white rounded-full shadow-lg p-2 sm:p-6"
        />
      </div>
    </Header>
  );
};

export default HeaderComponent;
