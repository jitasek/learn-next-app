import { articles } from "../../../data";

// Get a single article
// export default function handler(req, res) {      //   //   // replace req for the concrete request for query --> id to be able to get a single id (article):
export default function handler({ query: { id } }, res) {
  const filtered = articles.filter((article) => article.id === id); // filter out the article where article id is equal to the id that's passed in the request

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found.` });
  }
}
