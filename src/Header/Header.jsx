import { ToggleTheme } from "./ToggleTheme";

const tabs = ["Home", "About", "Contact", "News", "FAQ"];

export const Header = () => {
  return (
    <div
      id="header"
      className="bg-gray-700 text-white p-4 flex justify-between"
    >
      <div id="desktopMenu" className="justify-start gap-4 hidden sm:flex">
        {tabs.map((tab) => (
          <button key={tab} className="btn btn-secondary third">
            {tab}
          </button>
        ))}
      </div>
      <ToggleTheme />
    </div>
  );
};
