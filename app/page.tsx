"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Star, Play, ArrowRight, Code, Zap, Target, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MasterclassLanding() {
  const modules = [
    {
      icon: "🖥️",
      title: "Dev Environment Setup",
      description: "Learn to configure a high-efficiency development environment to boost productivity.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "✨",
      title: "Clean Code Practices",
      description:
        "Understand how the SOLID principles should be applied to create code that is clean, modular, testable, and future-proof.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "✅",
      title: "Testing Mastery",
      description: "Write unit tests using lifecycle methods, assertions, spies, mocks, and fakes.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "📊",
      title: "Logging & Data Handling",
      description: "Implement robust logging systems. Process and manage file-based data effectively.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: "🌀",
      title: "Git Best Practices",
      description: "Maintain a clean, organized codebase with Git workflows optimized for team collaboration.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: "💡",
      title: "Object-Oriented Programming (OOP)",
      description: "Understand core OOP concepts to achieve abstraction, robustness, reusability, and flexibility.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: "🔗",
      title: "Design Pattern Solutions",
      description:
        "Master 8+ design patterns to solve common design challenges with reusable, scalable solutions, including: Bridge • Builder • Adapter • Repository • Singleton • Factory • Chain of Responsibility • Decorator",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: "📂",
      title: "Database Management",
      description:
        "Migrate from file-based storage to SQL databases and manage them effectively with a Singleton DB Manager.",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: "📜",
      title: "API Design & Development",
      description:
        "Design API schemas using Swagger, set up Express.js frameworks, create custom exception classes, and implement logger APIs for advanced request tracking and consistency.",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: "🔍",
      title: "Advanced Query Handling",
      description: "Handle complex queries in controllers with ease using the Specification pattern.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: "🚀",
      title: "CI/CD Pipelines",
      description:
        "Automate workflows and streamline deployments with GitHub Actions, empowering you to deliver high-quality software efficiently.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: "🎓",
      title: "Bonus",
      description:
        "This masterclass is packed with hands-on learning, real-world applications, and industry best practices. We will guide you the way corporations implement their enterprise projects.",
      color: "from-amber-500 to-yellow-500",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Software Engineer at Google",
      content:
        "This masterclass transformed my understanding of software architecture. The practical examples and real-world scenarios made complex concepts easy to grasp.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Tech Lead at Microsoft",
      content:
        "Samish's teaching style is exceptional. The course content is up-to-date with industry standards and the projects are genuinely useful.",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      role: "Full Stack Developer",
      content:
        "I went from junior to senior developer in 8 months after taking this course. The system design module alone was worth the entire investment.",
      rating: 5,
    },
  ]

  const faqs = [
    {
      question: "What is this course about?",
      answer:
        "This course is about learning the main architectural styles and patterns that help you build scalable, maintainable, and testable software systems. We will discuss the main architectural styles and patterns, trade-offs, and key design decisions.",
    },
    {
      question: "For whom is this course?",
      answer:
        "The course is for Javascript developers, 3rd year undergraduates in Computer Science (or its equivalent), junior developers, and mid-senior developers who are willing to learn and discuss the main project architectural style, trade-offs, and key design decisions.",
    },
    {
      question: "What are the prerequisites for this course?",
      answer:
        "You should have at least some hands-on experience in software development using Javascript/Typescript programming language.",
    },
    {
      question: "How is the learning process organized?",
      answer: "The course is a mix of video lectures, documents, live weekly discussions, and hands-on exercises.",
    },
    {
      question: "What tech will be used for demos/exercises?",
      answer:
        "We'll be using Typescript and Express, but the architectural styles and patterns discussed in this course will be technology-agnostic and useful in any coding ecosystem.",
    },
    {
      question: "Do I need to prepare for this course?",
      answer:
        "You will need a machine with Node.js and npm installed, VSCode as IDE, and access to GitHub. To make the best out of this training, you'll receive a number of articles that we recommend reading. The reading list will be shared seven days before the course. To grasp everything that will be explained in this course, You should have general knowledge of Javascript Roadmap (until Asynchronous JS) and Typescript Roadmap (until Generics).",
    },
    {
      question: "Will I receive a certificate upon completion of the course?",
      answer:
        "Yes, you'll receive a certificate of accomplishment. (+ we are working on making it digitally verifiable).",
    },
    {
      question: "Will I receive recording of the course?",
      answer: "You will have a permanent access to the course lectures and recordings.",
    },
    {
      question: "What is the language of instruction?",
      answer: "The course is taught in Arabic, and the resources are in English.",
    },
    {
      question: "Which timezone does the course run?",
      answer: "Eastern European Standard Time / Beirut time.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src="/Icon.png"
                alt="SE² Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Samish.dev
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#modules" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              Modules
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              About
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              Reviews
            </Link>
            <a target="_blank" href="https://samishdev.notion.site/18c68ecb8f3780889385f37306d1c4e8?pvs=105">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300">
              Enroll Now
            </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 lg:py-24 relative">
        {/* Subtle Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-indigo-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                  🚀 Software Engineering Excellence
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                  Welcome to the{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Software Engineering Excellence
                  </span>{" "}
                  Master Class
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  We've condensed 5+ years of professional programming experience into a Master Class designed to help
                  you thrive in your software engineering career so you can level up faster!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#enrollment">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  See the Offer
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 transform hover:scale-105 transition-all duration-300 hover:bg-blue-50"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Preview
                </Button>
              </div>

              <div className="pt-4 md:pt-8">
                <p className="text-lg text-gray-700 font-medium">
                  Software Engineering career can completely change your life - it changed mine.
                </p>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 md:p-8 transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 group">
                <div className="aspect-video bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  <Play className="h-12 md:h-16 w-12 md:w-16 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Course Preview</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Get a sneak peek of what you'll learn in this comprehensive masterclass.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Free preview</span>
                  <span>30+ hours content</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 rounded-2xl transform -rotate-3 group-hover:rotate-1 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Message Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 md:w-24 h-20 md:h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Image
                  src="/sami.png?height=96&width=96"
                  alt="Sami"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Meet Sami 👋</h2>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-2xl"></div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 md:space-y-6 relative z-10">
                <p className="text-lg md:text-xl">If we haven't met before – hi, my name's Sami 👋</p>

                <p>
                  I started learning about Software Engineering in 2017, while in my first year of Computer Science at
                  the Lebanese University 🎓.
                </p>

                <p>I started off with knowing nothing – no Data Structures, no Algorithms, and no Design Patterns.</p>

                <p>I knew absolutely nothing about building a scalable, maintainable, production-ready application.</p>

                <p>All I knew was how to declare a function that can reverse a linked list or search a binary tree.</p>

                <p>
                  But after mastering the fundamentals of programming 🧠, and solving countless LeetCode questions 🧩, I
                  thought I was ready for the job market.
                </p>

                <p className="text-lg font-semibold text-red-600">
                  To my surprise, those were just the minimal requirements ❗
                </p>

                <p>
                  Employers expected me to understand how to engineer a codebase by adding the right code in the right
                  place while following best practices for automation ⚙️, scalability 📈, and maintainability 🔧.
                </p>

                <p>
                  Through five years of gaining real-world experience and advancing to senior roles, I sharpened my
                  skills, built impactful projects, and earned a reputation for clean, efficient engineering.
                </p>

                <p>
                  Eventually, I landed a position as a <strong>senior software engineer</strong> at a top-ranked FinTech
                  company worldwide, earning over <strong>$3000 monthly</strong> 💵.
                </p>

                <p>This journey wasn't easy, but it was absolutely worth it.</p>

                <p className="text-lg font-semibold text-blue-700">
                  And now, I want to help you achieve the same kind of transformation. Join the Software Engineering
                  Excellence Master Class 🎓 to gain the tools, knowledge, and mentorship you need to level up your
                  career and achieve your own success story 🌟.
                </p>

                <p className="text-lg md:text-xl font-bold text-center text-blue-600">Your journey starts here 🚀.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who's Not For Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
              Who's the course{" "}
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                not for?
              </span>
            </h2>

            <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg">
              <p className="text-lg text-gray-600 mb-8">
                This master class isn't for everyone, so this isn't for you if:
              </p>

              <div className="space-y-6 text-left max-w-3xl mx-auto">
                <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                  <div className="text-red-500 text-2xl flex-shrink-0 mt-1">❌</div>
                  <p className="text-gray-700">
                    You're not willing to put in the time and effort and commit to consistency for the long term.
                  </p>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                  <div className="text-red-500 text-2xl flex-shrink-0 mt-1">❌</div>
                  <p className="text-gray-700">
                    You have no previous experience in coding, this is a booster master class not a starter course.
                    (Check FAQ for more details)
                  </p>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                  <div className="text-red-500 text-2xl flex-shrink-0 mt-1">❌</div>
                  <p className="text-gray-700">
                    You believe this course will instantly land you a job. While this program equips you with the skills
                    and knowledge to advance your career, it's not a guarantee of immediate employment. Your success
                    depends on your dedication and effort beyond the course.
                  </p>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                  <div className="text-red-500 text-2xl flex-shrink-0 mt-1">❌</div>
                  <p className="text-gray-700">
                    You're only looking for theory. This course focuses on hands-on learning, I promise you that you
                    will write an insane amount of code to craft the experience in your finger muscle memory. If you're
                    not ready to get your hands dirty, this might not be the right fit.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                <p className="text-lg font-semibold text-gray-800 text-center">
                  Again, the one thing we can guarantee is that if you apply the learnables, apply the skills, and build
                  several projects, your career will rise to the next level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section
        id="modules"
        className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-block relative">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  What am I going to learn?
                </span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-6 md:mt-8 leading-relaxed">
              Master the essential skills and technologies that will transform you into a{" "}
              <span className="font-semibold text-blue-600">senior software engineer</span>
            </p>
          </div>

          {/* Enhanced Modules Grid - Fixed Height Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <div key={index} className="group relative hover:z-10 h-full">
                {/* Subtle background effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${module.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-110`}
                ></div>

                {/* Main card with fixed height */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-white/50 group-hover:border-white/80 overflow-hidden h-full flex flex-col">
                  {/* Corner accent */}
                  <div
                    className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-br ${module.color} opacity-10 rounded-bl-2xl transform translate-x-3 -translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300`}
                  ></div>

                  {/* Icon */}
                  <div className="relative mb-6 flex-shrink-0">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${module.color} rounded-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300 transform group-hover:scale-110`}
                    ></div>
                    <div className="relative text-3xl md:text-4xl group-hover:scale-110 transition-all duration-300 flex items-center justify-center h-16">
                      <span>{module.icon}</span>
                    </div>
                  </div>

                  {/* Content - Flexible height */}
                  <div className="space-y-4 flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight flex-shrink-0">
                      {module.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300 flex-grow">
                      {module.description}
                    </p>
                  </div>

                  {/* Number indicator */}
                  <div
                    className={`absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-r ${module.color} rounded-full flex items-center justify-center text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110`}
                  >
                    {index + 1}
                  </div>

                  {/* Bottom accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${module.color} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16 md:mt-20">
            <div className="inline-block bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-white/50">
              <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Ready to Master These Skills?
              </h3>
              <p className="text-gray-600 mb-6">Join the next cohort and transform your software engineering career</p>
              <a href="#enrollment">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                See the Offer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <Badge className="bg-indigo-100 text-indigo-700">Meet Your Instructor</Badge>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  Learn from a{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Senior Engineer
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  With many years of experience at top tech companies, we brings real-world expertise and
                  practical insights to every lesson.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Industry Experience</h3>
                    <p className="text-gray-600">Many years building scalable systems at top companies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Teaching Excellence</h3>
                    <p className="text-gray-600">Mentored many engineers and led technical training programs</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
                    <p className="text-gray-600">Students have landed jobs, got raises, and finished personal projects</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="relative z-10">
                <Image
                  src="/image.png?height=600&width=500"
                  alt="Samish - Course Instructor"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              What Students{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Are Saying
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">Join thousands of successful software engineers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic text-sm md:text-base">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Enrollment Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div id="enrollment" className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 md:mb-20">
              <div className="inline-block relative">
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Master Class Enrollment 🚀
                </h2>
              </div>
              <p className="text-lg md:text-xl lg:text-2xl opacity-90 mt-6 md:mt-8 max-w-3xl mx-auto leading-relaxed">
                Everything you need to become a{" "}
                <span className="text-yellow-400 font-semibold">senior-level software engineer</span>
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Left Column - What's Included */}
              <div className="lg:col-span-2 space-y-6">
                {/* Core Curriculum Card */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20 hover:border-white/30 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-xl md:text-2xl">🧠</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold">The Core SE2 Curriculum</h3>
                    </div>
                    <p className="mb-6 opacity-90 text-base md:text-lg">
                      30+ hours covering clean code, design patterns, testing, API development, and CI/CD pipelines to
                      level up your engineering skills.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "⚙️ Write Clean Code using SOLID principles",
                        "🧩 Master 8+ Design Patterns for scalable applications",
                        "📂 Upgrade to SQL Databases with a Singleton DB Manager",
                        "🌀 Use Git Best Practices for a clean, organized codebase",
                        "🔍 Optimize Queries with the Specification Pattern",
                        "☁️ Automate Deployments with CI/CD pipelines",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3 group/item">
                          <CheckCircle className="h-5 w-5 text-green-400 group-hover/item:scale-110 transition-transform duration-200 flex-shrink-0" />
                          <span className="group-hover/item:text-white transition-colors duration-200 text-sm md:text-base">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Additional Features Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: "📚",
                      title: "SE2 Bonus Modules",
                      desc: "Extra lessons on Git, databases, advanced queries, and real-world case studies.",
                    },
                    {
                      icon: "🔑",
                      title: "Lifetime Access",
                      desc: "Revisit lessons anytime to stay ahead in your career.",
                    },
                    {
                      icon: "🔥",
                      title: "Real-World Projects",
                      desc: "Learn to engineer codebases like a senior developer.",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="text-2xl md:text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </div>
                        <h4 className="font-bold mb-2 text-base md:text-lg">{feature.title}</h4>
                        <p className="text-xs md:text-sm opacity-80">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Pricing Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <div className="relative group">
                    {/* Glowing border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-3xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative bg-white text-gray-900 rounded-3xl p-6 md:p-8 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                      {/* Price Section */}
                      <div className="text-center mb-8">
                        <div className="relative">
                          <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                            $200
                          </div>
                          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                            Limited Time
                          </div>
                        </div>
                        <div className="text-base md:text-lg text-gray-600 mb-6">Next cohort: June 1st, 2025</div>

                        <a target="_blank" href="https://samishdev.notion.site/18c68ecb8f3780889385f37306d1c4e8?pvs=105">
                        <Button
                          size="lg"
                          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-base md:text-lg py-4 md:py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                          <span className="mr-2">🚀</span>
                          Enroll Now
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        </a>
                      </div>

                      {/* Bonuses Section */}
                      <div className="space-y-6">
                        <h4 className="text-lg md:text-xl font-bold text-center mb-6 text-gray-800">
                          🎁 Exclusive Bonuses:
                        </h4>

                        <div className="space-y-4">
                          {[
                            {
                              icon: <Users className="h-5 md:h-6 w-5 md:w-6" />,
                              title: "👥 Elite SE2 Community",
                              desc: "Network with engineers in a private Discord",
                            },
                            {
                              icon: <Calendar className="h-5 md:h-6 w-5 md:w-6" />,
                              title: "🎤 Live Online & In-Person Events",
                              desc: "Gain mentorship and hands-on experience",
                            },
                          ].map((bonus, index) => (
                            <div
                              key={index}
                              className="flex items-start space-x-3 p-3 md:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                            >
                              <div className="text-blue-600 mt-1 flex-shrink-0">{bonus.icon}</div>
                              <div>
                                <h5 className="font-semibold text-gray-800 text-sm md:text-base">{bonus.title}</h5>
                                <p className="text-xs md:text-sm text-gray-600">{bonus.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Guarantee */}
                        <div className="border-t pt-6 text-center">
                          <div className="bg-green-50 rounded-xl p-4">
                            <div className="text-green-600 font-semibold mb-1 text-sm md:text-base">
                              ✅ 100% Satisfaction Guarantee
                            </div>
                            <div className="text-green-600 font-semibold text-sm md:text-base">
                              💰 Money-Back Promise
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
              🎁 Wait, There're{" "}
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Free Bonuses?
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 mb-12">
              Yes! When you enroll today, you'll also get these exclusive bonuses at no extra cost:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-yellow-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-14 md:w-16 h-14 md:h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users className="h-6 md:h-8 w-6 md:w-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">👥 Elite SE2 Community</h3>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">
                    Join our private Discord community with 500+ engineers. Get help, share projects, and network with
                    like-minded developers.
                  </p>
                  <Badge className="bg-yellow-100 text-yellow-700">Worth $97</Badge>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-14 md:w-16 h-14 md:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Calendar className="h-6 md:h-8 w-6 md:w-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">🎤 Live Events Access</h3>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">
                    Attend exclusive live online workshops and in-person meetups. Get direct mentorship and hands-on
                    experience.
                  </p>
                  <Badge className="bg-orange-100 text-orange-700">Worth $197</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee Details */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                ✅ 100% Satisfaction Guarantee &{" "}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Money-Back Promise
                </span>
              </h2>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 md:p-8 lg:p-12">
              <p className="text-base md:text-lg text-gray-700 mb-8">
                We want the investment in this master class to be an absolute no-brainer for you - if you are actually
                going to do the work!
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-4">
                    To qualify for our money-back guarantee, you must:
                  </h3>
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <span className="text-sm md:text-base">
                        Complete all core modules, including the major project.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        2
                      </span>
                      <span className="text-sm md:text-base">
                        Submit proof of effort, such as screenshots or link to your Github repository showing your
                        completed work, and commit history since you've started.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        3
                      </span>
                      <span className="text-sm md:text-base">
                        Email us within 30 days of purchase, detailing your reason for requesting a refund and including
                        your proof of effort.
                      </span>
                    </li>
                  </ol>
                </div>

                <div className="bg-white rounded-xl p-4 md:p-6">
                  <p className="text-gray-700 mb-4 text-sm md:text-base">
                    Refunds are designed for students who fully engage with the course but still find it doesn't meet
                    their expectations. If you've met the criteria above and are not 100% happy with your experience,
                    we'll happily refund your payment in full.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Please note:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start space-x-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span className="text-sm md:text-base">
                            This course requires prerequisite knowledge of JavaScript and TypeScript. If you struggle
                            with the fundamentals of these languages, this course may not be suitable for you, and any
                            difficulties stemming from a lack of prerequisite knowledge will not qualify for a refund.
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span className="text-sm md:text-base">
                            The guarantee is only valid for students who show commitment to completing the course.
                            Non-participation, lack of effort, or simply changing your mind will not qualify for a
                            refund.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600">Everything you need to know about the SE2 Masterclass</p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
              Still Have{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Questions?
              </span>
            </h2>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8">
              <p className="text-base md:text-lg text-gray-700 mb-6">
                I'm here to help! If you have any questions about the course, enrollment, or anything else, don't
                hesitate to reach out.
              </p>

              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg md:text-xl">📧</span>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-600">Send an email to:</p>
                  <a
                    href="mailto:samish.business.dev@gmail.com"
                    className="text-base md:text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    samish.business.dev@gmail.com
                  </a>
                </div>
              </div>

              <p className="text-sm text-gray-600">I typically respond within 24 hours during business days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4 col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image
                    src="/Icon.png"
                    alt="SE² Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-lg md:text-xl font-bold">Sami Shames El Deen</span>
              </div>
              <p className="text-gray-400 text-sm md:text-base">Software Engineering Excellence Master Class</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <Link target="_blank" href="https://www.instagram.com/samish.dev/" className="hover:text-white transition-colors">
                    My Instagram page
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="https://www.youtube.com/@SamiSh-Dev?skip_registered_account_check=true" className="hover:text-white transition-colors">
                    My Youtube channel
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="https://www.linkedin.com/in/samish-dev" className="hover:text-white transition-colors">
                    My LinkedIn profile
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Interested in a workshop?</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <Link target="_blank" href="https://www.whatsapp.com/channel/0029Vais5VxKgsNwxnai1K0s" className="hover:text-white transition-colors">
                    Stay updated
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="mailto:samish.business.dev@gmail.com" className="hover:text-white transition-colors">
                    Reach out to setup one
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <a target="_blank" href="mailto:samish.business.dev@gmail.com" className="hover:text-white transition-colors">
                    samish.business.dev@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-gray-400 text-sm md:text-base">
            <p>&copy; Sami Shames El Deen 2025. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
