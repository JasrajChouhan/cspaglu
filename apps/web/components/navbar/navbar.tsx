import { navbarItemsData } from "../../constant";
import NavbarItem from "./navbar-item";

export default function Navbar() {
  return (
    <ul className="flex gap-4 items-center">
      {navbarItemsData.map((item) => (
        <NavbarItem key={item.name} data={item} />
      ))}
    </ul>
  );
}
