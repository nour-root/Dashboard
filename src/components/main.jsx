import SideBar from "./sideBar";
import Tables from "./table";
export default function Main() {
  return (
    <div className="flex gap-10">
      <SideBar />
      <div className="flex-1">
        <Tables />
      </div>
    </div>
  );
}
