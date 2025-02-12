import Link from "next/link";
import GithubIcon from "./github-icon";

export default function Header() {
  return (
    <header className="relative mx-auto mt-5 flex w-full items-center justify-between px-2 pb-7 sm:px-4">
      <div className="flex gap-8">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-xl tracking-tight">
            DeepSeek R1 Code Generator
          </h1>
        </Link>
        <Link href="/deepseek-image-generator" className="flex items-center gap-2">
          <h1 className="text-xl tracking-tight">
            DeepSeek Image Generator
          </h1>
        </Link>
      </div>
      <a
        href="https://github.com/sing1ee/deepseekCoder"
        target="_blank"
        className="hidden items-center gap-3 rounded-2xl bg-white px-6 py-2 sm:flex"
      >
        <GithubIcon className="h-4 w-4" />
        <span>GitHub Repo</span>
      </a>
    </header>
  );
}
