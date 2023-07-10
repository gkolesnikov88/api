module.exports = {
  notes: async (_parent, _args, { models }) => {
    return await models.Note.find({});
  },
  note: async (_parent, args, { models }) => {
    return await models.Note.findById(args.id);
  }
};
