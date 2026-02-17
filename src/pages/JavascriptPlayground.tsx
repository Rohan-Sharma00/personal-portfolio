import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Play,
  Terminal,
  Code2,
  ExternalLink,
  ChevronRight,
  Lightbulb,
} from "lucide-react";
import { codeToHtml } from "shiki";
import Editor from "@monaco-editor/react";
import { problems, type Problem } from "@/data/javascript-playground-data";

const DIFFICULTY_COLOR: Record<Problem["difficulty"], string> = {
  Easy: "text-green-400",
  Medium: "text-yellow-400",
  Hard: "text-red-400",
};

const DEFAULT_OUTPUT = "// Output will appear here...";

export default function JavascriptPlayground() {
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(problems[0]);
  const [code, setCode] = useState(problems[0].starterCode);
  const [output, setOutput] = useState<string>(DEFAULT_OUTPUT);
  const [isError, setIsError] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const selectProblem = (problem: Problem) => {
    setSelectedProblem(problem);
    setCode(problem.starterCode);
    setOutput(DEFAULT_OUTPUT);
    setIsError(false);
  };

  const runCode = useCallback(() => {
  setIsRunning(true);
  setOutput("Running...");
  setIsError(false);

  setTimeout(() => {
    const stringifyValue = (val: unknown) => {
      if (val === null) return "null";
      if (val === undefined) return "undefined";
      
      if (typeof val === "object" || Array.isArray(val)) {
        try {
          return JSON.stringify(val, (key, value) => 
            typeof value === 'bigint' ? value.toString() : value, 
            2
          );
        } catch {
          return "[Circular Object]";
        }
      }
      return String(val);
    };

    const originalLog = console.log;
    let logs: string[] = [];

    try {
      console.log = (...args: unknown[]) => {
        logs.push(args.map(stringifyValue).join(" "));
      };

      const execute = new Function(code);
      const result = execute();

      if (logs.length > 0) {
        setOutput(logs.join("\n"));
      } else if (result !== undefined) {
        setOutput(stringifyValue(result));
      } else {
        setOutput("// Code executed with no output");
      }
    } catch (error) {
      setIsError(true);
      setOutput(error instanceof Error ? error.message : String(error));
    } finally {
      console.log = originalLog;
      setIsRunning(false);
    }
  }, 250);
}, [code]);

  return (
    <div className="h-screen flex flex-col bg-background text-foreground overflow-hidden">
      {renderHeader()}

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {renderSidebar(
          problems,
          selectedProblem.id,
          isSidebarOpen,
          () => setIsSidebarOpen((p) => !p),
          selectProblem
        )}

        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          {renderEditor(code, setCode, runCode, isRunning)}
          {renderOutput(output, isError, () =>
            setCode(selectedProblem.solutionCode),
            selectedProblem
          )}
        </div>
      </div>
    </div>
  );
}

// Header

function renderHeader() {
  return (
    <header className="h-14 flex items-center justify-between px-4 md:px-6 border-b border-border/50 bg-card/80 backdrop-blur-md">
      <Link
        to="/"
        className="flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft size={16} />
        <span className="hidden sm:inline">Back to Portfolio</span>
      </Link>

      <div className="flex items-center gap-2 font-mono text-sm md:text-base">
        <Code2 size={18} className="text-primary" />
        <span>JavaScript Playground</span>
      </div>

      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="hidden sm:inline">GitHub</span>
        <ExternalLink size={14} />
      </a>
    </header>
  );
}

// Sidebar
function renderSidebar(
  problems: Problem[],
  selectedId: number,
  isSidebarOpen: boolean,
  toggle: () => void,
  selectProblem: (p: Problem) => void
) {


  // group by topic
  const grouped = problems.reduce<Record<string, Problem[]>>(
    (acc, p) => {
      if (!acc[p.topic]) acc[p.topic] = [];
      acc[p.topic].push(p);
      return acc;
    },
    {}
  );

  return (
    <>
      {/* mobile toggle */}
      <button
        onClick={toggle}
        className="md:hidden flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-card/50 text-sm font-mono text-muted-foreground"
      >
        <ChevronRight
          size={14}
          className={`transition-transform ${isSidebarOpen ? "rotate-90" : ""}`}
        />
        Problems ({problems.length})
      </button>

      {/* sidebar */}
      <aside
        className={`${isSidebarOpen ? "block" : "hidden"
          } md:block w-full md:w-64 lg:w-72 border-r border-border/50 bg-card/30 overflow-y-auto`}
      >

        {/* Blank Practice */}
        <div>
          <div className="px-4 py-2 mt-4 mb-2 text-xs font-mono 
  text-primary bg-primary/10 border-y border-primary/20 rounded-sm">
            Practice
          </div>

          <button
            onClick={() =>
              selectProblem({
                id: -1,
                title: "Blank Practice",
                topic: "Strings",
                difficulty: "Easy",
                starterCode: "",
                solutionCode: "",
              })
            }
            className="w-full px-4 py-3 text-left flex items-center justify-between border-l-2 border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition"
          >
            <span className="text-sm truncate">Blank Practice</span>
          </button>
        </div>

        {Object.entries(grouped).map(([topic, list]) => (
          <div key={topic}>
            {/* topic title */}
            <div className="px-4 py-2 mt-4 mb-2 text-xs font-mono 
  text-primary bg-primary/10 border-y border-primary/20 rounded-sm">
              {topic}
            </div>

            {/* problems */}
            {list.map((problem) => {
              const active = selectedId === problem.id;

              return (
                <button
                  key={problem.id}
                  onClick={() => selectProblem(problem)}
                  className={`w-full px-4 py-3 text-left flex items-center justify-between border-l-2 transition ${active
                    ? "bg-primary/10 border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                >
                  <span className="text-sm truncate">{problem.title}</span>

                  {
                    <span
                      className={`text-xs font-mono ${DIFFICULTY_COLOR[problem.difficulty]
                        }`}
                    >
                      {problem.difficulty}
                    </span>
                  }
                </button>
              );
            })}
          </div>
        ))}
      </aside>
    </>
  );
}


// Editor

function renderEditor(
  code: string,
  setCode: (v: string) => void,
  runCode: () => void,
  isRunning: boolean
) {
  return (
    <section className="flex-1 flex flex-col border-b lg:border-b-0 lg:border-r border-border/50">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border/50 bg-card/30">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <span className="ml-2 font-mono text-xs text-muted-foreground">
            solution.js
          </span>
        </div>

        <button
          onClick={runCode}
          disabled={isRunning}
          className="flex items-center gap-2 px-4 py-1.5 rounded border border-primary/30 bg-primary/15 hover:bg-primary/25 text-primary font-mono text-xs transition disabled:opacity-50"
        >
          <Play size={12} className={isRunning ? "animate-spin" : ""} />
          {isRunning ? "Running..." : "Run Code"}
        </button>
      </div>

      <div className="flex-1 bg-transparent">
  <Editor
    height="100%"
    defaultLanguage="javascript"
    value={code}
    onChange={(value) => setCode(value || "")}
    theme="transparent-dark"
    beforeMount={(monaco) => {
      monaco.editor.defineTheme("transparent-dark", {
        base: "vs-dark",
        inherit: true,

        rules: [],

        colors: {
          "editor.background": "#00000000", 
          "editorGutter.background": "#00000000",
        },
      });
    }}
    options={{
      fontSize: 14,
      minimap: { enabled: false },
      wordWrap: "on",
      scrollBeyondLastLine: false,
      automaticLayout: true,
      tabSize: 2,
    }}
  />
</div>
    </section>
  );
}

// Output

function renderOutput(
  output: string,
  isError: boolean,
  showSolution: () => void,
  selectedProblem: Problem | null
) {

  return (
    <section className="h-48 lg:h-auto lg:w-80 xl:w-96 flex flex-col">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border/50 bg-card/30 h-[6.3%]">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-primary" />
          <span className="block font-mono text-xs text-muted-foreground ">
            Output
          </span>
        </div>
        {selectedProblem.title != "Blank Practice" && <button
          onClick={showSolution}
          className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-yellow-400 border border-yellow-400/30 rounded hover:bg-yellow-400/10 transition"
        >
          <Lightbulb size={12} />
          Show Solution
        </button>}

      </div>

      <div className="flex-1 overflow-auto p-4 bg-background/50">
        {isError ? (
          <pre className="font-mono text-sm text-red-400 whitespace-pre-wrap">
            {output}
          </pre>
        ) : (
          <HighlightedCode code={output} />
        )}
      </div>
    </section>
  );
}

function HighlightedCode({ code }: { code: string }) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    async function highlight() {
      const result = await codeToHtml(code, {
        lang: "javascript",
        theme: "github-dark",
      });

      const cleaned = result
        .replace(/background-color:[^;]+;/g, "background-color: transparent;")
        .replace(/background:[^;]+;/g, "background: transparent;");

      setHtml(cleaned);
    }
    highlight();
  }, [code]);

  return (
    <div
      className="text-sm [&>pre]:!bg-transparent [&>pre]:!p-0 [&>pre]:!m-0"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}