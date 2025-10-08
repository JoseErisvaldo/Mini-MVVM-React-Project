type Props = React.InputHTMLAttributes<HTMLInputElement> & { label: string };
export const Input = ({ label, ...p }: Props) => (
  <div className="flex flex-col mb-3">
    <label className="text-gray-300 text-sm mb-1">{label}</label>
    <input
      {...p}
      className="p-2 rounded bg-gray-800 text-white border border-gray-600"
    />
  </div>
);
