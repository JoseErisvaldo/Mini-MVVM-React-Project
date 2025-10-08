export const ErrorMessage = ({ message }: { message: string | null }) =>
  message ? <p className="text-red-500 mt-2">{message}</p> : null;
