import Image, { StaticImageData } from "next/image";
import Row from "./Row";
import Column from "./Column";
import Button from "./Button";

export default function JobCard({
  logo,
  className,
  title,
  companyName,
  location,
  workingType,
  experience,
  salary,
  noOfEmployees,
  buttonText,
  buttonVariant = "primary",
}: {
  logo: StaticImageData;
  className?: string;
  title: string;
  companyName: string;
  location: string;
  workingType: string;
  experience: string;
  salary: string;
  noOfEmployees: string;
  buttonText: string;
  buttonVariant?: "primary" | "secondary";
}) {
  return (
    <div
      className={`flex py-4 px-6 rounded-[10px] bg-white w-[830px] h-[320px] ${
        className || ""
      }`}
    >
      <Row className="relative gap-2">
        <div className="w-[48px] h-[48px]">
          <Image width={48} height={48} src={logo} alt="company-logo" />
        </div>
        <Column className="gap-6">
          <Column>
            <div className="text-2xl">{title}</div>
            <div>{companyName}</div>
            <div className="text-placeholder">{location}</div>
          </Column>
          <Column className="gap-2">
            <div className="text-gray1">{workingType}</div>
            <div className="text-gray1">{experience}</div>
            <div className="text-gray1">{salary}</div>
            <div className="text-gray1">{noOfEmployees}</div>
          </Column>
          <Row>
            <Button variant={buttonVariant}>{buttonText}</Button>
          </Row>
        </Column>
      </Row>
    </div>
  );
}
