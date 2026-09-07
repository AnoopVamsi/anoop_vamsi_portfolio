import type { NextConfig } from "next";

const repositoryName = "anoop_vamsi_portfolio";
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGitHubActions ? `/${repositoryName}` : "",
  assetPrefix: isGitHubActions ? `/${repositoryName}/` : "",
};

export default nextConfig;