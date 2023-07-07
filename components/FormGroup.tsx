import Column from "./Column";

export default function FormGroup({
  label,
  name,
  required,
  className,
  children,
}: {
  label?: string;
  name: string;
  required?: boolean;
  children: React.ReactNode | string;
  className?: string;
}) {
  return (
    <Column className={`gap-1 justify-end ${className || ""}`}>
      {label ? (
        <label htmlFor={name} className="text-sm font-medium leading-5">
          {label}
          {required ? <span className="text-error">*</span> : null}
        </label>
      ) : null}
      {children}
    </Column>
  );
}
