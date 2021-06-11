import { sanityClient } from "../../lib/sanity";

sanityClient.config({
  token: process.env.SANITY_TOKEN,
});

export default async function likeButtonHandler(req, res) {
  try {
    const { _id } = JSON.parse(req.body);
    const data = await sanityClient
      .patch(_id)
      .setIfMissing({ likes: 0 })
      .inc({ likes: 1 })
      .commit();
    res.status(200).json({
      likes: data.likes,
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
}
