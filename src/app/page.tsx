import { Navbar } from "@/components/Navbar";
import { PromptRefiner } from "@/components/PromptRefiner";
import {
  Sparkles,
  Zap,
  Code2,
  GitBranch,
  Heart,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      id: "text-prompt",
      icon: MessageSquare,
      title: "Text to Prompt",
      description:
        "Transform your raw ideas into perfectly crafted prompts for ChatGPT, Claude, and other AI models. Get better responses instantly.",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "text-image",
      icon: Sparkles,
      title: "Text to Image",
      description:
        "Create stunning, detailed prompts for DALL-E, Midjourney, and Stable Diffusion. Describe your vision and we'll refine it.",
      color: "from-cyan-500 to-purple-500",
    },
    {
      id: "text-app",
      icon: Code2,
      title: "Text to App",
      description:
        "Generate precise prompts for AI coding assistants. Get better code suggestions and implementations from your descriptions.",
      color: "from-pink-500 to-cyan-500",
    },
  ];

  const examples = [
    {
      id: "examples",
      title: "Real-World Examples",
      items: [
        {
          type: "Text Prompt",
          before: "make me a recipe",
          after:
            "Create a step-by-step recipe for a classic Italian pasta carbonara with exact measurements, cooking times, and pro tips for achieving perfect results.",
        },
        {
          type: "Image Prompt",
          before: "a beautiful landscape",
          after:
            "A serene mountain landscape at golden hour with snow-capped peaks reflecting in a pristine alpine lake, cinematic photography, Nikon D850, dramatic lighting",
        },
        {
          type: "Code Prompt",
          before: "make a todo app",
          after:
            "Create a React todo application with TypeScript, featuring add/delete/complete functionality, local storage persistence, and a clean Material-UI design",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 sm:px-6 lg:px-8"
      >
        {/* Animated Background Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full blur opacity-75"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-200 via-pink-200 to-cyan-200 bg-clip-text text-transparent">
            Refine Your Prompts,
            <br />
            Unlock AI&apos;s Potential
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your rough ideas into perfectly crafted prompts for
            ChatGPT, image generators, and coding assistants. Get better AI
            results in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#text-prompt">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition">
                Start Refining Free
              </button>
            </Link>
            <button className="px-8 py-4 border-2 border-purple-500/50 text-purple-400 font-bold rounded-xl hover:border-purple-400 hover:bg-purple-500/10 transition">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-12">
            <div className="bg-gradient-to-br from-purple-900/50 to-transparent p-4 rounded-lg border border-purple-500/20">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                50K+
              </div>
              <div className="text-gray-400 text-sm">Prompts Refined</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/50 to-transparent p-4 rounded-lg border border-cyan-500/20">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                100%
              </div>
              <div className="text-gray-400 text-sm">Free to Use</div>
            </div>
            <div className="bg-gradient-to-br from-pink-900/50 to-transparent p-4 rounded-lg border border-pink-500/20">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                2 Sec
              </div>
              <div className="text-gray-400 text-sm">Average Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-200 to-cyan-200 bg-clip-text text-transparent text-center">
            Three Ways to Refine
          </h2>
          <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-16">
            Whether you&apos;re working with text, images, or code, we&apos;ve
            got you covered
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  id={feature.id}
                  className="group relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition duration-300 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition duration-300`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition`}
                    >
                      <Icon className="text-white" size={24} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prompt Refiner Tool Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Try It Now
            </h2>
            <p className="text-gray-400 text-lg">
              Start refining your prompts instantly
            </p>
          </div>
          <PromptRefiner />
        </div>
      </section>

      {/* Examples Section */}
      <section
        id="examples"
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-purple-900"
      >
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-200 to-cyan-200 bg-clip-text text-transparent text-center">
            See the Magic in Action
          </h2>
          <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-16">
            Real examples of prompt transformations
          </p>

          <div className="space-y-6">
            {examples[0].items.map((example, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-500/20 to-transparent border border-purple-500/30 rounded-xl p-6 md:p-8 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 bg-purple-500/30 rounded-full text-sm font-semibold text-purple-300">
                    {example.type}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Before</p>
                    <p className="text-gray-300 italic border-l-2 border-red-500/50 pl-4">
                      &quot;{example.before}&quot;
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm mb-2">After</p>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 font-semibold border-l-2 border-green-500/50 pl-4">
                      &quot;{example.after}&quot;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section
        id="why-us"
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900 to-cyan-900"
      >
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Why Choose PromptRefiner?
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Everything you need to master AI prompts
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                desc: "Get refined prompts in just 2 seconds",
              },
              {
                icon: Heart,
                title: "100% Free",
                desc: "No sign-up required, always free to use",
              },
              {
                icon: GitBranch,
                title: "Multiple Types",
                desc: "Text, image, and code prompt refinement",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20 hover:border-white/40 transition"
                >
                  <Icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <button className="mt-12 px-8 py-4 bg-white text-purple-900 font-bold rounded-xl hover:shadow-2xl transition">
            Get Started Now →
          </button>
        </div>
      </section>
    </main>
  );
}
