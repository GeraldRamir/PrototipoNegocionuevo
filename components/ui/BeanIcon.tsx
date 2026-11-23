type BeanIconProps = {
  className?: string;
  /** Degrees of tilt */
  rotate?: number;
  title?: string;
};

/** Solid coffee bean with a transparent centre crease; colour follows `currentColor`. */
export function BeanIcon({ className, rotate = 30, title }: BeanIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <path
        transform={`rotate(${rotate} 12 12)`}
        fill="currentColor"
        fillRule="evenodd"
        d="M5 12a7 10.5 0 1 0 14 0a7 10.5 0 1 0 -14 0Z M12.9 2.3C8.7 7.6 15.7 15.4 11.1 21.7L12.7 21.6C17.2 15.3 10.3 7.6 14.4 2.7Z"
      />
    </svg>
  );
}
