import NavButton from "../components/NavButton";

export default function Header() {
  return (
    <header className="p-10">
      <nav>
        <ul className="flex gap-6">
          <li>
            <NavButton href={"/"}>Shop</NavButton>
          </li>
          <li>
            <NavButton href={"/cart"}>Shopping Cart</NavButton>
          </li>
          <li>
            <NavButton href={"/history"}>Order history</NavButton>
          </li>
          <li>
            <NavButton href={"/coupons"}>Coupons</NavButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}
