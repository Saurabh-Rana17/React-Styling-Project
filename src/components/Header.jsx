import logo from "../assets/logo.png";
// import classes from "../components/Header.module.css";

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
      <img
        className="h-44 w-44 object-contain mb-8"
        src={logo}
        alt="A canvas"
      />
      <h1 className="m-0 font-semibold  text-4xl tracking-widest text-center uppercase text-amber-800 font-title">
        ReactArt
      </h1>
      <p className="text-stone-500">A community of artists and art-lovers.</p>
    </header>
  );
}
