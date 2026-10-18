
import "./Card.css";

export default function Card({
  children,
  className = "",
  hover = true,
  padding = "md", // 'sm' | 'md' | 'lg' | 'none'
  onClick,
  ...rest
}) {
  const classes = [
    "bfs-card",
    hover ? "bfs-card-hover" : "",
    `bfs-card-pad-${padding}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} onClick={onClick} {...rest}>
      {children}
    </div>
  );
}
