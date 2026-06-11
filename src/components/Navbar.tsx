type NavbarProps = {
  title: string;
};

export default function Navbar({ title }: NavbarProps) {
  return (
    <nav className="p-4 border-b">
      <h1>{title}</h1>
    </nav>
  );
}