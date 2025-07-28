import React from "react";
import { Link } from "react-router";
import Navbar from "~/components/Navbar";

export default function NotFound() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16">
          <div className="flex flex-col items-center gap-8 max-w-4xl text-center">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-8xl max-sm:text-6xl font-bold text-gradient">
                404
              </h1>
              <h2 className="text-4xl max-sm:text-2xl text-dark-200 font-semibold">
                Page Not Found
              </h2>
              <p className="text-xl max-sm:text-lg text-dark-200 max-w-2xl">
                Oops! The page you're looking for doesn't exist. It might have
                been moved, deleted, or you entered the wrong URL.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/" className="primary-button w-fit">
                Go Back Home
              </Link>
              <Link to="/upload" className="primary-button w-fit">
                Upload Resume
              </Link>
            </div>

            <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg max-w-md">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                <div
                  className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-green-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
              <p className="text-sm text-dark-200 text-center">
                While you're here, why not analyze your resume?
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
