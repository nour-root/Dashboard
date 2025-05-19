import Header from "./header";
import Main from "./main";
import DataProvider from "../arrayContext";
export default function DashBoard() {
  return (
    <DataProvider>
      <Header />
      <Main />
    </DataProvider>
  );
}
