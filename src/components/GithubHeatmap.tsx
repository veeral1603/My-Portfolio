import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function GithubHeatmap() {
  return (
    <GitHubCalendar
      username="veeral1603"
      blockSize={14}
      blockRadius={3}
      blockMargin={4}
      fontSize={12}
    />
  );
}
