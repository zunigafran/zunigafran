"use client";

import React, { useEffect, useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const messages = [
    <span key="message-0">
      <i>&quot;Your warmth radiates upon those around you.&quot;</i>
      <br />
      <br />A Panda Express Fortune Cookie
    </span>,
    <span key="message-1">
      <i>&quot;Some people feel the rain, others just get wet.&quot;</i>
      <br />
      <br />
      Bob Dylan
    </span>,
    <span key="message-2">
      <i>&quot;A person who never made a mistake, never tried anything new.&quot;</i>
      <br />
      <br />
      Albert Einstein
    </span>,
    <span key="message-3">
      <i>&quot;When someone shows you who they are, believe them the first time.&quot;</i>
      <br />
      <br />
      Maya Angelou
    </span>,
    <span key="message-4">
      <i>&quot;The truth is rarely pure and never simple.&quot;</i>
      <br />
      <br />
      Oscar Wilde
    </span>,
    <span key="message-5">
      <i>&quot;There is no monopoly on truth&quot;</i>
      <br />
      <br />
      Justice Elena Kagan
    </span>,
  ]; // Example messages

  useEffect(() => {
    const interval = setInterval(() => {
      const messageElement = document.getElementById("messages");
      if (messageElement) {
        messageElement.classList.add("fade-out");

        setTimeout(() => {
          setCurrentMessageIndex(
            (prevIndex) => (prevIndex + 1) % messages.length
          );
          messageElement.classList.remove("fade-out");
          messageElement.classList.add("fade-in");

          setTimeout(() => {
            messageElement.classList.remove("fade-in");
          }, 1000); // Match the transition duration
        }, 1000); // Match the transition duration
      }
    }, 15000); // Change message every 15 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <main className="bg-primary text-[#fff]">
        <nav className="py-5 flex justify-between text-center place-items-center px-8 hidden lg:flex">
          {/* "LOGO */}
          <a href="/" className="text-2xl place-content-center">
            Francisco Zuniga
          </a>
          {/* MENU */}
          <ul className="flex col-span-2 gap-8 place-items-center text-xl -ml-28">
            <li>
              <a className="none" href="#competencies">
                Competencies
              </a>
            </li>
            <li>
              <a className="none" href="#work">
                Work
              </a>
            </li>
            <li>
              <a className="none" href="#experience">
                Experience
              </a>
            </li>
            <li>
              <a className="none" href="#contact">
                Contact Me
              </a>
            </li>
          </ul>
          <button className="bg-gradient-to-b from-[#4ade80] to-[#3b8af6] p-2 rounded-xl text-xl">
            <a
              className="none"
              href="/Francisco Zuniga.pdf"
              alt="resume"
              download="Francisco Zuniga"
            >
              Resume
            </a>
          </button>
        </nav>
        {/* SIDEBAR/MOBILE MENU */}
        <details class="bg-primary cursor-pointer group grid sticky top-0 z-[999] flex lg:hidden">
          <summary class="group cursor-pointer list-none font-semibold h-[12svh] justify-items-stretch content-center grid grid-cols-3 inline">
            <div className="justify-self-start col-start-1 pl-8 z-[999] mt-4">
              <FaBars className="block text-4xl group-open:hidden" />
              <FaTimes className="hidden text-4xl group-open:block" />
            </div>
            <a
              href="/"
              className="flex flex-col text-center place-items-stretch text-3xl z-20"
            >
              Francisco Zuniga
            </a>
          </summary>
          <ul className="top-0 left-0 w-full h-screen flex flex-col text-center bg-primary">
            <li className="py-5 text-3xl">
              <a className="none" href="#competencies">
                Competencies
              </a>
            </li>
            <li className="py-5 text-3xl">
              <a className="none" href="#work">
                Work
              </a>
            </li>
            <li className="py-5 text-3xl">
              <a className="none" href="#experience">
                Experience
              </a>
            </li>
            <li className="py-5 text-3xl">
              <a
                className="none"
                href="/Francisco Zuniga.pdf"
                alt="resume"
                download="Francisco Zuniga"
              >
                Resume
              </a>
            </li>
            <li className="py-5 text-3xl">
              <a className="none" href="#contact">
                Contact Me
              </a>
            </li>
          </ul>
        </details>

        {/* HERO */}
        <section className="min-h-screen grid-cols-4">
          <div className="h-screen flex items-end text-center">
            <div className="backgroundImage opacity-50"></div>
            <div className="container mx-auto text-center content-end absolute bottom-5">
              <h2 className="text-5xl py-2 font-medium lg:text-6xl">
                Francisco Zuniga
              </h2>
              <h3 className="text-2xl py-2 lg:text-4xl">
                Full-Stack Developer
              </h3>
              <p className="text-md py-5 leading-8 mx-[18%] lg:text-xl">
                I am a junior full-stack developer, adept at utilizing
                cutting-edge technologies and methodologies to develop robust
                software solutions. I have a proven track record of applying my
                knowledge to my tasks and projects to meet and exceed project
                goals. Seeking opportunities to apply my expertise in software
                development to drive innovation and contribute to the growth of
                a dynamic organization.
              </p>
            </div>
          </div>
        </section>

        {/* COMPETENCIES */}
        <section
          className="container mx-auto px-4 md:px-20 lg:px-8 py-16"
          id="competencies"
        >
          <h2 className="block antialiased tracking-normal text-4xl text-center leading-1 !leading-snug lg:!text-4xl">
            My Competencies
          </h2>
          <div className="flex justify-items-center mt-10 gap-2 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-8">
            <div className="relative flex flex-col bg-clip-border rounded-xl shadow-fz max-w-sm lg:h-72 items-end overflow-hidden">
              <div className="bg-gradient-to-br from-[#ec4899] to-[#eab308] absolute inset-0"></div>
              <div className="p-6 relative flex flex-col justify-end hover:-translate-y-3 duration-300">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug">
                  Full-Stack Development
                </h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed my-2">
                  Expert in full-stack development, building industry-grade
                  projects with diverse programming languages and frameworks.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border rounded-xl shadow-fz max-w-sm lg:h-72 items-end overflow-hidden">
              <div className="bg-gradient-to-br from-[#4ade80] to-[#3b82f6] absolute inset-0"></div>
              <div className="p-6 relative flex flex-col justify-end hover:-translate-y-3 duration-300">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug">
                  Problem-Solving and Analytical Skills
                </h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed my-2">
                  Skilled in solving complex problems and detailed analysis,
                  contributing significantly in software and financial roles.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border rounded-xl shadow-fz max-w-sm lg:h-72 items-end overflow-hidden">
              <div className="bg-gradient-to-br from-[#f869d5] to-[#5650de] absolute inset-0"></div>
              <div className="p-6 relative flex flex-col justify-end hover:-translate-y-3 duration-300">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug">
                  Project Management and Agile Methodology
                </h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed my-2">
                  Proficient in agile project management, successfully planning
                  and executing numerous reports and applications.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border rounded-xl shadow-fz max-w-sm lg:h-72 items-end overflow-hidden">
              <div className="bg-gradient-to-br from-[#f00b51] to-[#7366ff] absolute inset-0"></div>
              <div className="p-6 relative flex flex-col justify-end hover:-translate-y-3 duration-300">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug">
                  Communication and Mentorship
                </h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed my-2">
                  Effective communicator and mentor, highly rated for work ethic
                  and delivering clear, comprehensive briefs and reports.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="container mx-auto lg:py-16" id="work">
          <h2 className="block antialiased tracking-normal text-4xl text-center leading-1 !leading-snug lg:!text-4xl">
            My Work
          </h2>

          {/* CARD 1 */}
          <div className="flex justify-center grid grid-col-1 lg:grid-cols-2">
            <div className="relative mx-auto w-full max-w-sm pt-6">
              <a
                href="/"
                className="relative inline-block w-full transform transition-transform duration-300 ease-in-out bg-accent rounded-xl pb-2 shadow-fz2"
              >
                <div className="rounded-lg">
                  <div className="relative flex h-60 justify-center overflow-hidden rounded-t-xl">
                    <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                      <img src="/barton.png" alt="portfolioSite" />
                    </div>
                  </div>
                  <div className="pl-2">
                    <div className="mt-4 grid grid-cols-2">
                      <div className="flex items-center">
                        <div className="relative">
                          <h2 className="line-clamp-1 text-base font-medium lg:text-lg">
                            Portfolio
                          </h2>
                          <p className="mt-2 line-clamp-1 text-sm">
                            Web Development
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* CARD 2 */}
            <div className="relative mx-auto w-full max-w-sm pt-6 shadow drop-shadow-[10px 10px 5px 1px rgba(255, 255, 255, .2)]">
              <a
                href="/"
                className="relative inline-block w-full transform transition-transform duration-300 ease-in-out bg-accent rounded-xl pb-2 shadow-fz2"
              >
                <div className="rounded-lg">
                  <div className="relative flex h-60 justify-center overflow-hidden rounded-t-xl">
                    <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                      <Image
                        src="/pika.gif"
                        alt="pikaJackHammer"
                        width={384}
                        height={240}
                      />
                    </div>
                  </div>
                  <div className="pl-2">
                    <div className="mt-4 grid grid-cols-2">
                      <div className="flex items-center">
                        <div className="relative">
                          <h2 className="text-base font-medium  lg:text-lg">
                            More Coming Soon...
                          </h2>
                          <p className="mt-2 text-sm">Web3, Finance, etc...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section
          className="container mx-auto py-16 sm:py-16 w-3/4 lg:py-24"
          id="experience"
        >
          <h2 className="block antialiased tracking-normal text-4xl text-center leading-1 !leading-snug lg:!text-4xl">
            Professional Experience
          </h2>
          <div className="max-w-3xl mx-auto mt-8 space-y-4 lg:mt-16">
            <details class="bg-accent border-gray-200 cursor-pointer group rounded-xl shadow-fz2">
              <summary class="group flex cursor-pointer list-none items-center justify-between w-full p-4 font-semibold">
                Account Expeditor @ ProSource Wholesale
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="block h-5 w-5 group-open:hidden"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="hidden h-5 w-5 group-open:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
              </summary>
              <div className="grid grid-cols-3">
                <div className="col-start-1 col-span-2">
                  <div class="pl-4 pb-12">
                    Providing full-time support role aiding sales, warehouse,
                    and operations teams, providing product knowledge training,
                    using proprietary software, and fostering client
                    relationships.
                  </div>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center text-sm">
                      Proprietary Software Proficiency
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center place-content-center">
                      {" "}
                      Process Optimization{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      Client Interaction{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      Agile Methodology{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      Time Management{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      Financial Acumen{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      Attention to Detail{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      Critical Thinking{" "}
                    </span>
                  </div>
                </div>
                <a
                  href="https://www.prosourcewholesale.com/showrooms/tx-prosource-of-austin"
                  className="justify-self-center hover:opacity-50"
                >
                  <img
                    src="https://play-lh.googleusercontent.com/Wv2EpksNIai7HcQFi_OOmpZ8ysWNEvEZq8LsJH4xGYHWrcB1XK71Ki5siEmjMS_ZQCk=w480-h960-rw"
                    alt="proIcon"
                    className="w-24 rounded-xl shadow-md hover:opacity-50"
                  ></img>
                </a>
              </div>
              <div className="ml-5 pb-5"></div>
            </details>
            <details class="bg-accent border-gray-200 shadow-lg cursor-pointer group rounded-xl shadow-fz2">
              <summary class="flex cursor-pointer list-none items-center justify-between w-full p-4 font-semibold">
                Software Engineer @ Springboard
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="block h-5 w-5 group-open:hidden"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="hidden h-5 w-5 group-open:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
              </summary>
              <div className="grid grid-cols-3">
                <div className="col-start-1 col-span-2">
                  <div class="pl-4 pb-12">
                    Learned code in popular programming languages, understand
                    development theory and tools, and build web applications
                    through hands-on projects to prepare for a job in the field.
                  </div>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-4">
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      DSA{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      HTML5{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      CSS3{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      JavaScript{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      React{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      Node.JS{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      Python{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      Flask{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      Express{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      OOP{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      APIs{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      SQL{" "}
                    </span>
                  </div>
                </div>
                <a
                  href="https://www.springboard.com/courses/software-engineering-career-track/"
                  className="justify-self-center"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkJvBi-YFMb_1o0k78tsmekdfbqszGsImtCw&s"
                    alt="springIcon"
                    className="w-24 rounded-xl shadow-md hover:opacity-50"
                  ></img>
                </a>
              </div>
              <div className="ml-5 pb-5"></div>
            </details>
            <details class="bg-accent border-gray-200 shadow-lg cursor-pointer group rounded-xl shadow-fz2">
              <summary class="flex cursor-pointer list-none items-center justify-between w-full p-4 font-semibold">
                Signals Intelligence Analyst (35N) @ U.S. Army
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="block h-5 w-5 group-open:hidden"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="hidden h-5 w-5 group-open:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
              </summary>
              <div className="grid grid-cols-3">
                <div className="col-start-1 col-span-2">
                  <div class="pl-4 pb-12">
                    Analyzed foreign communications and activities, produce
                    strategic reports for senior leaders, assist in surveillance
                    equipment placement, and track operational patterns to aid
                    in attack planning, functioning akin to a detective in
                    gathering intelligence on enemy activities.
                  </div>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      Data Analysis{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      Data Interpretation{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      Database Management{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      Metadata{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      Telecommunications{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      System Administration{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      Technical Reporting{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      Collaboration Tools{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      Leadership{" "}
                    </span>
                    <span className="bg-[#2563eb] rounded-full p-2 ml-6 drop-shadow-lg text-center">
                      {" "}
                      Project Management{" "}
                    </span>
                  </div>
                </div>
                <a
                  href="https://www.goarmy.com/careers-and-jobs/signal-intelligence/languages-code/35n-signals-intelligence-analyst"
                  className="justify-self-center"
                >
                  <img
                    src="https://www.artbrands.com/wp-content/uploads/25093ED-1.png"
                    alt="armyIcon"
                    className="bg-[#000] p-2 w-24 rounded-xl shadow-md hover:opacity-50"
                  ></img>
                </a>
              </div>
              <div className="ml-5 pb-5"></div>
            </details>
          </div>
        </section>

        {/* FOOTER */}
        <section id="contact">
          <footer className="w-full bg-secondary body-font flex">
            <div className="container items-start px-12 py-8">
              <h1 className="text-2xl font-semibold">
              Available for Interships and Full-Time Opportunities.
              </h1>
              <p className="text-xl font-normal py-4">
                Send me an email or message me on my socials!
              </p>
              <div className="container flex flex-col flex-wrap mx-auto items-start">
                <a
                  className="text-xl font-semibold underline decoration-[#2563eb] pb-2"
                  href="mailto:fzuniga325@gmail.com"
                >
                  fzuniga325@gmail.com
                </a>
                <a
                  className="flex justify-between text-lg font-normal underline decoration-[#2563eb] text-justify"
                  href="https://linkedin.com/in/zunigafran"
                >
                  <AiFillLinkedin size={24} />
                  LinkedIn
                </a>
                <a
                  className="flex justify-between text-lg font-normal underline decoration-[#2563eb] text-justify"
                  href="https://github.com/zunigafran"
                >
                  <AiFillGithub size={24} />
                  Github
                </a>
              </div>
            </div>
            <div className="bg-[#000] flex min-h-full place-content-baseline w-[30rem]">
              <h1 className="text-xl px-[15%] pt-10 ${fadeClass}" id="messages">
                {messages[currentMessageIndex]}
              </h1>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
}
