import { TurbochargerIcon } from "../../components/icons";

export const MainLayout = ({children}) => (
  <div className="flex flex-col h-screen">
    <Header/>
    {children}
  </div>
);

export const Header = () => (
  <header className="flex items-center bg-white shadow-sm px-4 py-2 z-10">
    <span className="text-gray-300"><TurbochargerIcon size={29}/></span>
  </header>
);