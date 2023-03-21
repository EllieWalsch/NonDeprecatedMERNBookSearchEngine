import bookController from "../book/controller.js";
import userController from "../user/controller.js";

const resolvers = {
  Mutation: {
    createUser: async (_, { user }) => {
      const token = await userController.create(user);

      return { token };
    },
    login: async (_, { username, password }) => {
      const token = await userController.show(username, password);

      return { token };
    },
    saveBook: async (_, { book }, { user }) => {
      return await bookController.create({ ...book, userId: user.id });
    },
  },
};

export default resolvers;
