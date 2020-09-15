const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  userID: Number,
  username: String,
  repoID: Number,
  repoName: String,
  repoURL: String,
  forks: Number,
  watchers: Number,
  repoScore: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;