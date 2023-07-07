import Column from "./Column";
import Row from "./Row";

export default function FormWrapper({
  title,
  stepText,
  children,
}: {
  title: string;
  stepText: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex max-w-xl bg-white w-[577px] p-8 rounded-[10px]">
      <Column className="w-full gap-6">
        <Row className="justify-between flex-1 w-full">
          <p className="font-dark text-xl">{title}</p>
          <p className="font-dark">{stepText}</p>
        </Row>
        {children}
      </Column>
    </div>
  );
}
