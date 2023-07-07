export default function Radio({
  className,
  label,
  name,
  id,
}: {
  className?: string;
  label?: string;
  name: string;
  id: string;
}) {
  return (
    <div className="flex items-center gap-1">
      <label className="relative flex items-center cursor-pointer rounded-full">
        <input
          className={`peer relative appearance-none w-5 h-5 border-2 rounded-full border-gray cursor-pointer transition-all text-gray checked:border-blue-500 checked:before:bg-blue-500 ${
            className || ""
          }`}
          type="radio"
          name={name}
          id={id}
        />
        <span className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
          </svg>
        </span>
      </label>
      <label className="select-none cursor-pointer mt-px text-placeholder" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
