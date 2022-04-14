import { articles } from "../../../data"; // my data is coming from this file, but it could be from a db as well ..

// Get all articles
export default function handler(req, res) {
  res.status(200).json(articles); // now the data displays on http://localhost:3000/api/articles
}
