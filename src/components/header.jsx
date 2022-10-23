export function Header() {
  return (
    <>
      <header className="pt-10 flex justify-center">
        <div className="container flex justify-between w-9/12 items-center ">
          <a href="#">
            <img  src="../src/images/logo.svg" alt="" />
          </a>
          <nav className="">
            <a className="pl-5 hover:text-amber-600 " href="#">
              Home
            </a>
            <a className="pl-5 hover:text-amber-600 " href="#">
              New
            </a>
            <a className="pl-5 hover:text-amber-600 " href="#">
              Popular
            </a>
            <a className="pl-5 hover:text-amber-600 " href="#">
              Trending
            </a>
            <a className="pl-5 hover:text-amber-600 " href="#">
              Categories
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}


