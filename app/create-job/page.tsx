"use client";

import Button from "@/components/Button";
import Column from "@/components/Column";
import FormGroup from "@/components/FormGroup";
import FromWrapper from "@/components/FormWrapper";
import Input from "@/components/Input";
import Radio from "@/components/Radio";
import Row from "@/components/Row";
import { useRouter } from "next/navigation";

export default function CreateJob() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <FromWrapper title="Create a job" stepText="Step 2">
        <Column className="gap-24">
          <Column className="gap-6">
            <Row className="gap-6 w-full">
              <FormGroup label="Experience" name="experience" className="w-1/2">
                <Input placeholder="Minimum" />
              </FormGroup>
              <FormGroup name="maxExperience" className="w-1/2">
                <Input placeholder="Maximum" />
              </FormGroup>
            </Row>

            <Row className="gap-6 w-full">
              <FormGroup label="Salary" name="salary" className="w-1/2">
                <Input placeholder="Minimum" />
              </FormGroup>
              <FormGroup name="maxExperience" className="w-1/2">
                <Input placeholder="Maximum" />
              </FormGroup>
            </Row>

            <FormGroup label="Total employee" name="jobIndustry">
              <Input placeholder="ex. 100" />
            </FormGroup>

            <Row className="gap-4 w-full">
              <FormGroup label="Apply type" name="applyType">
                <Radio label="Minimum" name="applyType" id="applyType1" />
              </FormGroup>
              <FormGroup name="maxExperience">
                <Radio label="Maximum" name="applyType" id="applyType2" />
              </FormGroup>
            </Row>
          </Column>
          <Row className="justify-end">
            <Button
              onClick={() => {
                router.push("/jobs-list");
              }}
            >
              Save
            </Button>
          </Row>
        </Column>
      </FromWrapper>
    </main>
  );
}
