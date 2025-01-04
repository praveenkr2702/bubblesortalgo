import { Share2, ArrowUpRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-4 flex items-center justify-between border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">BUBBLESORTALGO</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="relative">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
            JAVA
            <br />
            & DSA COURSE
          </h1>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          {["Java", "Data Structures", "Algorithms", "Problem Solving"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 border border-zinc-800 rounded-lg text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

      </section>

      {/* Moving Text Strip */}
      <div className="bg-[#CEFF00] overflow-hidden py-2 mb-12">
        <div className="animate-marquee">
          <div className="marquee-content">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="text-black text-2xl font-bold mx-4">BUBBLESORTALGO</span>
            ))}
          </div>
          <div className="marquee-content">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="text-black text-2xl font-bold mx-4">BUBBLESORTALGO</span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl md:text-5xl font-bold max-w-4xl leading-tight mb-16">
          MASTER JAVA AND DATA STRUCTURES
          FROM SCRATCH. FREE COMPREHENSIVE
          COURSE DESIGNED TO MAKE YOU
          A CONFIDENT PROGRAMMER
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              number: "01",
              title: "Java Fundamentals",
              description: "Start with basics: syntax, OOP concepts, collections, and advanced Java features. Perfect for beginners.",
              highlight: true,
            },
            {
              number: "02",
              title: "Data Structures",
              description: "Deep dive into Arrays, LinkedLists, Trees, Graphs, and Hash Tables with practical implementations.",
            },
            {
              number: "03",
              title: "Algorithms",
              description: "Master sorting, searching, dynamic programming, and graph algorithms with step-by-step explanations.",
            },
            {
              number: "04",
              title: "Problem Solving",
              description: "Practice with 100+ carefully selected coding problems to strengthen your algorithmic thinking.",
            },
          ].map((card) => (
            <div
              key={card.number}
              className={`p-6 rounded-3xl relative ${
                card.highlight ? "bg-[#CEFF00] text-black" : "bg-zinc-900"
              }`}
            >
              <span className="text-4xl font-bold opacity-50">{card.number}</span>
              <h3 className="text-xl font-bold mt-4 mb-2">{card.title}</h3>
              <p className="text-sm opacity-70">{card.description}</p>
              <div className="mt-4 px-4 py-2 rounded-full border border-current inline-flex items-center gap-2 text-sm">
                {card.highlight ? "Starting Soon" : "Coming Soon"}
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

