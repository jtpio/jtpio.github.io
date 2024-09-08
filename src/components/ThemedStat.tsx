import { createSignal } from "solid-js";

type Props = {
  repoUrl: string;
  alt?: string;
};

function ThemedStat({ repoUrl, alt }: Props) {
  const [theme, setTheme] = createSignal("default");

  const observeThemeChange = () => {
    const targetElement = document.documentElement;

    const getTheme = () =>
      targetElement.classList.contains("dark") ? "dark" : "default";

    // Create a new MutationObserver instance
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setTheme(getTheme());
        }
      });
    });

    const config = {
      attributes: true,
      attributeFilter: ["class"],
    };

    observer.observe(targetElement, config);

    setTheme(getTheme());
  };

  const extractRepoDetails = (url: string) => {
    const match = url.match(/https:\/\/github\.com\/([^\/]+)\/([^\/]+)/);
    if (match) {
      return {
        username: match[1],
        repo: match[2],
      };
    }
    return {
      username: "",
      repo: "",
    };
  };

  // start observing theme changes
  observeThemeChange();

  const { username, repo } = extractRepoDetails(repoUrl);

  return (
    <a href={repoUrl} target="_blank" rel="noopener noreferrer">
      <img
        class="items-center justify-center w-full h-auto rounded-lg shadow-lg p-2"
        src={`https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${repo}&theme=${theme()}&show_owner=true&description_lines_count=2&hide_border=true`}
        alt={alt}
      />
    </a>
  );
}

export default ThemedStat;
