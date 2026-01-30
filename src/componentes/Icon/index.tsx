interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className = "" }: IconProps) {
  return (
    <i className={`bx ${name} ${className}`}></i>
  );
}
