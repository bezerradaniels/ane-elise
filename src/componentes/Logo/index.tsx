import logo from "../../assets/brand/logo-ane-elise.png";

type Props = {
  className?: string;
};

export default function Logo({ className = "" }: Props) {
  return (
    <img
      src={logo}
      alt="Logo Dra. Ane Elise"
      className={`w-auto ${className}`}
    />
  );
}
