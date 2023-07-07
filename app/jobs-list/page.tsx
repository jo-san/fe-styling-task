import JobCard from "@/components/JobCard";
import NetflixLogo from "../../public/netflix-logo.png";

export default function JobsList() {
  return (
    <main className="flex min-h-screen">
      <div className="flex flex-wrap gap-8 p-6 justify-center content-center">
        <JobCard
          logo={NetflixLogo}
          title="UX UI Designer"
          companyName="Great Vibes - Information Technology"
          location="Chennai, Tamilnadu, India (In-office)"
          workingType="Part-Time (9.00 am - 5.00 pm IST)"
          experience="Experience (1 - 2 years)"
          salary="INR (₹) 30,000 - 60,000 / Month"
          noOfEmployees="51-200 employees"
          buttonText="Apply Now"
        />
        <JobCard
          logo={NetflixLogo}
          title="Developer"
          companyName="Great Vibes - Information Technology"
          location="Chennai, Tamilnadu, India (In-office)"
          workingType="Part-Time (9.00 am - 5.00 pm IST)"
          experience="Experience (1 - 2 years)"
          salary="INR (₹) 50,000 - 70,000 / Month"
          noOfEmployees="51-200 employees"
          buttonText="External Apply"
          buttonVariant="secondary"
        />
        <JobCard
          logo={NetflixLogo}
          title="Interaction Designer"
          companyName="Great Vibes - Information Technology"
          location="Chennai, Tamilnadu, India (In-office)"
          workingType="Part-Time (9.00 am - 5.00 pm IST)"
          experience="Experience (1 - 2 years)"
          salary="INR (₹) 30,000 - 50,000 / Month"
          noOfEmployees="51-200 employees"
          buttonText="External Apply"
          buttonVariant="secondary"
        />
        <JobCard
          logo={NetflixLogo}
          title="SEO Analyst"
          companyName="Great Vibes - Information Technology"
          location="Chennai, Tamilnadu, India (In-office)"
          workingType="Part-Time (9.00 am - 5.00 pm IST)"
          experience="Experience (1 - 2 years)"
          salary="INR (₹) 30,000 - 50,000 / Month"
          noOfEmployees="51-200 employees"
          buttonText="Apply Now"
        />
      </div>
    </main>
  );
}
