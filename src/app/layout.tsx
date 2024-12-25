import { Outlet, NavLink } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-amber-50 text-stone-800 inter">
      <header className="bg-gradient-to-r from-amber-100 to-amber-200 py-8 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-stone-800 mb-2 font-serif">
            Rosario M. Ponseca
          </h1>
          <p className="text-stone-600 text-xl">1930 - 2022</p>
        </div>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }: { isActive: boolean }) =>
                  isActive
                    ? "text-amber-800"
                    : "text-stone-700 hover:text-amber-800"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }: { isActive: boolean }) =>
                  isActive
                    ? "text-amber-800"
                    : "text-stone-700 hover:text-amber-800"
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/timeline"
                className={({ isActive }: { isActive: boolean }) =>
                  isActive
                    ? "text-amber-800"
                    : "text-stone-700 hover:text-amber-800"
                }
              >
                Timeline
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/quotes"
                className={({ isActive }: { isActive: boolean }) =>
                  isActive
                    ? "text-amber-800"
                    : "text-stone-700 hover:text-amber-800"
                }
              >
                Quotes
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-12 flex-grow">
        <Outlet />
      </main>
      <footer className="bg-stone-800 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-amber-100">
          <p className="mb-2">In loving memory of Rosario M. Ponseca</p>
          <p>© {new Date().getFullYear()} - Created with love by her family</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
