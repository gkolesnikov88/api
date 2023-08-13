module.exports = {
  notes: async (_parent, _args, { models }) => {
    return await models.Note.find({});
  },
  note: async (_parent, args, { models }) => {
    return await models.Note.findById(args.id);
  },
  user: async (_parent, { username }, { models }) => {
    // find a user given their username
    return await models.User.findOne({ username });
  },
  users: async (_parent, _args, { models }) => {
    // find all users
    return await models.User.find({});
  },
  me: async (_parent, args, { models, user }) => {
    // find a user given the current user context
    return await models.User.findById(user.id);
  }
};
