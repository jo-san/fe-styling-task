"use client";

import Button from "@/components/Button";
import Column from "@/components/Column";
import FormGroup from "@/components/FormGroup";
import FromWrapper from "@/components/FormWrapper";
import Input from "@/components/Input";
import Row from "@/components/Row";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <FromWrapper title="Create a job" stepText="Step 1">
        <Column className="gap-24">
          <Column className="gap-6">
            <FormGroup label="Job title" name="jobTitle" required>
              <Input placeholder="ex. UX UI Designer" />
            </FormGroup>
            <FormGroup label="Company name" name="companyName" required>
              <Input placeholder="ex. Google" />
            </FormGroup>
            <FormGroup label="Industry" name="jobIndustry" required>
              <Input placeholder="ex. Information Technology" />
            </FormGroup>
            <Row className="gap-6 w-full">
              <FormGroup label="Location" name="location" className="w-1/2">
                <Input placeholder="ex. Chennai" />
              </FormGroup>
              <FormGroup
                label="Remote type"
                name="remoteType"
                className="w-1/2"
              >
                <Input placeholder="ex. In-office" />
              </FormGroup>
            </Row>
          </Column>
          <Row className="justify-end">
            <Button
              onClick={() => {
                router.push("/create-job");
              }}
            >
              Next
            </Button>
          </Row>
        </Column>
      </FromWrapper>
    </main>
  );
}
