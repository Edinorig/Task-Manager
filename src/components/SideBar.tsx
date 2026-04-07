import inboxIcon from "../assets/icons/inboxIcon.svg";
import projectsIcon from "../assets/icons/projectsIcon.svg";
import archivesIcon from "../assets/icons/archivesIcon.svg";

function SideBar() {
  return (
    <aside className="w-22 h-[88vh] bg-[#F3F3F4] border-r-4 border-r-[#C6C6C6]/10">
      <nav>
        <ul className="flex flex-col pt-8">
          <li className="sideBarWrapper">
            <a href="" className="flex flex-col items-center">
              <img src={inboxIcon} alt="" className="w-5" />
              <p className="text-xs pt-3">INBOX</p>
            </a>
          </li>
          <li className="sideBarWrapper">
            <a href="" className="flex flex-col items-center">
              <img src={projectsIcon} alt="" className="w-5" />
              <p className="text-xs pt-3">PROJECTS</p>
            </a>
          </li>
          <li className="sideBarWrapper">
            <a href="" className="flex flex-col items-center">
              <img src={archivesIcon} alt="" className="w-5" />
              <p className="text-xs pt-3">ARCHIVES</p>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
