exports.createProject = (req, res) => {

  const idea = req.body.idea;

  const roadmap = [
    "Day 1: Setup development environment",
    "Day 2: Create project structure",
    "Day 3: Build backend API",
    "Day 4: Add authentication",
    "Day 5: Deploy application"
  ];

  res.json({
    message: "Roadmap generated",
    projectIdea: idea,
    roadmap: roadmap
  });

};