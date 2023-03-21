import { handleError } from "../utils.js";
import Book from "./index.js";

const controller = {
  create(newBook) {
    return Book.create(newBook);
  },
  index(userId) {
    return Book.find({ userId });
  },
  show(bookId) {
    return Book.findOne({ bookId });
  },
  async delete(bookId, userId) {
    // Does this  📖  belong to the logged in user?
    const bookToDelete = await this.show(bookId);

    if (!bookToDelete)
      handleError(new Error("Book not found."), "BAD_USER_INPUT");

    if (bookToDelete.userId !== userId) {
      handleError(
        new Error("You are not authorized to delete this book."),
        "UNAUTHORIZED"
      );
    }

    await Book.deleteOne({ bookId });

    return bookToDelete;
  },
};

export default controller;
