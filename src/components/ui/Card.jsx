export function Card({ children, className }) {
    return <div className={`p-4 border rounded-xl shadow-lg ${className}`}>{children}</div>;
  }
  