import React, { useState } from "react";

const SidebarMenu = ({ label }) => {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };
  return (
    <div className="sidebar">
      <ul>
        {label.map((item, index) => (
          <li key={index}>
            <div
              className="cursor-pointer"
              onClick={() => toggleSubMenu(index)}
            >
              {item.place}
            </div>
            {openSubMenu === index && (
              <ul>
                {item.list.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <div>{subItem.place}</div>
                    <p>{subItem.desc}</p>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
