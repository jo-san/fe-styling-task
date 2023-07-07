export default function Input({
  className,
  placeholder,
}: {
  className?: string;
  placeholder?: string;
}) {
  return (
    <input
      className={`flex w-full py-2 px-4 rounded-md border border-gray ${className || ''}`}
      placeholder={placeholder}
      type="text"
    />
  );
}
