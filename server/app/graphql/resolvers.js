import bookController from "../book/controller.js";
import userController from "../user/controller.js";
import { handleError } from "../utils.js";

function handleNoUser(msg) {
  handleError(new Error(msg), "UNAUTHENTICATED");
}

export default {
  Query: {
    currentUser(_, __, { user }) {
      return user;
    },
  },

  Mutation: {
    async createUser(_, { user }) {
      const token = await userController.create(user);

      return { token };
    },
    async login(_, { username, password }) {
      const token = await userController.show(username, password);

      return { token };
    },
    async saveBook(_, { book }, { user }) {
      // Don't bother controller if no user
      if (!user) handleNoUser("You must be logged in to save 📖 a book.");

      return await bookController.create({ ...book, userId: user.id });
    },
    async removeBook(_, { bookId }, { user }) {
      // Don't bother controller if no user
      if (!user) handleNoUser("You must be logged in to remove 🔥 a book.");

      return await bookController.delete(bookId, user.id);
    },
  },

  // Keeping it separated means it only gets called when the modules field is requested
  // (parent is the track) - RESOLVER ⛓️
  User: {
    // We are using the parent parameter
    async books(user) {
      return await bookController.index(user.id);
    },
  },
};
