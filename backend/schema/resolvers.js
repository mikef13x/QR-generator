const { User, Qr} = require("../models")
const { GraphQLError } = require('graphql')
const { signToken } = require('../utils/auth')

const resolvers = {
Query: {
    //1 user data
    getQr: async (parent, {userId}) => {
        try{
            const allUrls = await Qr.find({ userId});
            return allUrls
        } catch(error) {
            throw new GraphQLError('Error fetching URL', {
                extensions: {
                    code: 'INTERNAL_SERVER_ERROR',
                    error,
                }
            })
        }
    },
},

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
      createQr: async (parent, { userId, url, qr }) => {
        try {
          const newUser = await User.create({ userId, url, qr });
          return { userId, url, qr };
        } catch (error) {
          console.error("Error creating qr model:", error);
          throw new Error("Failed to create qr model");
        }
      },



}






}

module.exports = resolvers;