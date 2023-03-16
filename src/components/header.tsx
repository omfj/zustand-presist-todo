import Link from "next/link";

const Header = () => {
  return (
    <header className="navbar bg-base-100 max-w-5xl mx-auto">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Zustand Demo
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/count">Count</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
