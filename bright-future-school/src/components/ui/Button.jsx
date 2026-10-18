
import { Link } from "react-router-dom";
import "./Button.css";

export default function Button({
  children,
  to,
  href,
  variant = "primary", // 'primary' | 'navy' | 'outline' | 'outline-navy' | 'ghost'
  size = "md", // 'sm' | 'md' | 'lg'
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ariaLabel,
  ...rest
}) {
  const classes = `bfs-btn bfs-btn-${variant} bfs-btn-${size} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </button>
  );
}
