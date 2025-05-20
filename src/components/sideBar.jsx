export default function SideBar() {
  return (
    <nav className="bg-primary dark:bg-dark-secondary dark:text-white w-fit  h-[calc(100dvh-68px)]">
      <ul className="capitalize text-lg flex flex-col w-fit">
        <li className="bg-white px-10 py-5 cursor-pointer  dark:bg-secondary">
          users
        </li>
      </ul>
    </nav>
  );
}
