"use client";

import React, { useState } from "react";
import { Button } from "./Button";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { TextArea } from "./TextArea";
import { Zap, Loader2, Copy, CheckCircle2 } from "lucide-react";

type TabType = "prompt" | "image" | "code";

interface TabConfig {
  id: TabType;
  label: string;
  endpoint: string;
  placeholder: string;
  description: string;
}

const TABS: TabConfig[] = [
  {
    id: "prompt",
    label: "Text Prompt",
    endpoint: "/api/refine/prompt",
    placeholder: "Enter the text you want to refine into a better prompt...",
    description: "Refine general text prompts for better AI responses",
  },
  {
    id: "image",
    label: "Image Prompt",
    endpoint: "/api/refine/image",
    placeholder: "Describe what image you want to generate...",
    description:
      "Create detailed prompts for AI image generators (DALL-E, Midjourney, Stable Diffusion)",
  },
  {
    id: "code",
    label: "Code Prompt",
    endpoint: "/api/refine/code",
    placeholder: "Describe the code functionality you need...",
    description: "Generate precise prompts for AI coding assistants",
  },
];

export const PromptRefiner = () => {
  const [activeTab, setActiveTab] = useState<TabType>("prompt");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [remaining, setRemaining] = useState<number | null>(null);

  const currentTab = TABS.find((tab) => tab.id === activeTab)!;

  const handleRefine = async () => {
    if (!input.trim()) {
      setError("Please enter some text to refine");
      return;
    }

    setLoading(true);
    setError("");
    setOutput("");

    try {
      const response = await fetch(currentTab.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: input }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(
          data.message || `Error: ${data.error || "Failed to refine prompt"}`,
        );
        return;
      }

      setOutput(data.refined);
      setRemaining(data.remaining);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while refining the prompt",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Remaining - Rate Limit Info */}
      {remaining !== null && (
        <div className="mb-6 rounded-lg bg-blue-50 px-4 py-3 text-sm text-blue-800">
          You have <strong>{remaining}</strong> refine
          {remaining !== 1 ? "s" : ""} remaining this minute
        </div>
      )}

      {/* Tabs */}
      <div className="mb-6 flex gap-2 border-b border-gray-200">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setOutput("");
              setInput("");
              setError("");
            }}
            className={`px-4 py-3 font-medium transition-colors ${
              activeTab === tab.id
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Input Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Original</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-sm text-gray-600">{currentTab.description}</p>
            <TextArea
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError("");
              }}
              placeholder={currentTab.placeholder}
              rows={10}
              disabled={loading}
            />
            {error && <p className="text-sm text-red-600">{error}</p>}
            <div className="flex gap-2">
              <Button
                onClick={handleRefine}
                disabled={loading || !input.trim()}
                className="flex-1"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Refining...
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-4 w-4" />
                    Refine
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                onClick={handleClear}
                disabled={loading || (!input && !output)}
              >
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Output Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Refined</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-sm text-gray-600">Your improved prompt</p>
            <TextArea
              value={output}
              readOnly
              placeholder="Your refined prompt will appear here..."
              rows={10}
              className="bg-gray-50"
            />
            {output && (
              <Button variant="outline" onClick={handleCopy} className="w-full">
                {copied ? (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy to Clipboard
                  </>
                )}
              </Button>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Footer Info */}
      <div className="mt-8 rounded-lg bg-gray-50 px-6 py-4 text-center text-sm text-gray-600">
        <p className="mb-2">This is a free service with rate limiting</p>
        <p>
          Built with{" "}
          <a
            href="https://openai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            OpenAI
          </a>{" "}
          API and deployed on Vercel
        </p>
      </div>
    </div>
  );
};
