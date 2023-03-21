import Navigation from "./navigation";
import SearchBar from "./search-bar";

export default function Header() {
  return (
    <header className="bg-dark pt-5 pb-3">
      <Navigation />
      <SearchBar
        handleSubmit={(e) => {
          e.preventDefault();
          console.log(e.target.search.value);
        }}
      />
    </header>
  );
}
