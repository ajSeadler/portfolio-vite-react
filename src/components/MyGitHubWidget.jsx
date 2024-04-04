import React from 'react';

const MyGitHubWidget = () => {
  const githubUsername = 'ajSeadler'; // Replace with your GitHub username
  const githubStatsUrl = `https://github-readme-stats.vercel.app/api?username=${githubUsername}&hide=stars&theme=gruvbox&show_icons=true&hide_rank=true`;


  return (
    <div className='github-stats'>
      <h2>GitHub Activity</h2>
      <img src={githubStatsUrl} alt="GitHub Stats" />
    </div>
  );
};

export default MyGitHubWidget;
