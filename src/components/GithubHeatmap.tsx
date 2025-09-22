import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function GithubHeatmap() {
  return (
    <GitHubCalendar
      username="veeral1603"
      blockSize={14}
      blockRadius={1}
      blockMargin={4}
      fontSize={12}
      theme={{
        dark: ["#2b2b2b", "#f5f5f5"],
      }}
    />
  );
}
