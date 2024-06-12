import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Routes = () => {
  return (
    <div className="bg-zinc-50">
      <div className="h-full w-full flex justify-center bg-neutral-300 p-4">
        <nav className="container">
          <NavLink to="/">
            <span className="text-cyan-700 font-semibold text-xl">Rifqx</span>
            <span className="text-red-700 font-semibold text-xl">Quran</span>
          </NavLink>
        </nav>
      </div>
      <Outlet />
      <footer className="p-10 flex justify-center items-center">
        <p>
          <a href="https://github.com/sirWerq" target="_blank">
            Github: sirWerq
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Routes;
