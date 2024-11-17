import Nav from "./Nav"

export default function Header({ setMenuOpen, isMenuOpen }) {
    return (
      <div className="relative flex justify-between items-center">
        {/* <h1 className="text-2xl font-bold">Mochima Pool Logo</h1> */}
        <img className="max-w-40  rounded-lg" src="/logo2.jpg" alt="mochima poll logo" />
        <Nav setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen} />
      </div>
    );
  }
  