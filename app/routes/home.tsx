import { resumes } from "../../constants";
import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeAI" },
    {
      name: "description",
      content: "Welcome to ResumeAI! Your placement companion",
    },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track Your Application & Ratings</h1>
          <h2>
            Upload your resume and get a detailed analysis of your application
            status.
          </h2>
        </div>

        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
