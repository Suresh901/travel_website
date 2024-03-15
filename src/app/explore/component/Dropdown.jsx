import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = ({
  label,
  data,
  toggleSubItem,
  toggleOpen,
  selectedId,
  open,
}) => {
  return (
    <div className="flex flex-col mx-10 rounded-lg mb-10">
      <div
        style={{
          backgroundImage:
            "url('https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/bg-shape-04.png')",
        }}
        className="bg-brand p-2 text-white w-auto cursor-pointer flex items-center justify-between h-20 rounded-lg"
        onClick={toggleOpen}
      >
        <h1>Explore {label}</h1>
        <IoIosArrowDown />
      </div>
      {open && (
        <ul className="bg-gray-100 p-2">
          {data.map((item) => (
            <div key={item.id}>
              <div
                className="flex items-center justify-between"
                onClick={() => toggleSubItem(item.id)}
              >
                <li className="font-bold pb-3">{item.place}</li>
                <IoIosArrowDown />
              </div>
              {selectedId === item.id && (
                <ul>
                  {item.list &&
                    item.list.map((subItem) => (
                      <div key={subItem.id}>
                        <li className="pb-3">{subItem.place}</li>
                      </div>
                    ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
