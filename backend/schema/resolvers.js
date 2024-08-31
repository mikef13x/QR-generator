const { User, Qr} = require("../models")
const { GraphQLError } = require('graphql')
const { signToken } = require('../utils/auth')

const resolvers = {
    Mutation: {
      createUser: async (parent, { username, email, password }) => {
        try {
          const newUser = await User.create({ username, email, password });
          const token = signToken(newUser);
          return { token, user: newUser };
        } catch (error) {
          console.error("Error creating user model:", error);
          throw new Error("Failed to create user model");
        }
      },
      login: async (parent, { username, password }) => {
        const user = await User.findOne({ username });
        if (!user) {
          throw new GraphQLError("Invalid credentials", { 
            extensions: { code: 'UNAUTHENTICATED' },
          });
        }
        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
          throw new GraphQLError("Invalid credentials", { 
            extensions: { code: 'UNAUTHENTICATED' },
          });
        }
        const token = signToken(user);
        return { token, user };
      },
      createQr: async (parent, {userId, url, qr }) => {
        try {
          const newQr = await Qr.create({ userId: userId.toString(), url, qr });
          return newQr;
        } catch (error) {
          console.error("Error creating qr model:", error);
          throw new Error("Failed to create qr model");
        }
      },
    },
  };

module.exports = resolvers;