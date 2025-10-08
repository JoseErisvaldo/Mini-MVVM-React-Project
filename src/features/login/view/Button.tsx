type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = ({ children, ...p }: Props) => (
  <button
    {...p}
    className="bg-green-600 hover:bg-green-700 p-2 rounded text-white font-medium"
  >
    {children}
  </button>
);
