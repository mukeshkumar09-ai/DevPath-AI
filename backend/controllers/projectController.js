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


exports.getProjects = (req, res) => {

  const projects = [
    {
      idea: "Build a cloud security project",
      roadmap: [
        "Day 1: Setup environment",
        "Day 2: Create backend",
        "Day 3: Deploy project"
      ]
    },
    {
      idea: "Build a DevOps automation tool",
      roadmap: [
        "Day 1: Research tools",
        "Day 2: Create scripts",
        "Day 3: Test automation"
      ]
    }
  ];

  res.json(projects);

};