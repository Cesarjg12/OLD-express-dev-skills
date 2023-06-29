const Skill = require('../models/skill')

module.export = {
    index,
    show
};

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }

  function show(req, res) {
    res.render('skills/show', {
      skills: Skill.getOne(req.params.id),
    });
  }