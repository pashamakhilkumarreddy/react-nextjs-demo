import Helmet from "../components/Helmet";
import Recipe from "../components/Recipe";
import { sanityClient, urlFor } from "../lib/sanity";

const recipesQuery = `*[_type == "recipe"] {
  _id,
  name,
  slug,
  mainImage
}`;

export default function Home({ recipes }) {
  return (
    <>
      <Helmet title="Home" />
      <div className="columns is-centered is-vcentered is-mobile is-multiline m-auto is-justify-content-space-evenly">
        {recipes.map((recipe) => (
          <Recipe key={recipe._id} {...recipe} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const recipes = await sanityClient.fetch(recipesQuery);
    return {
      props: {
        recipes,
      },
    };
  } catch (err) {
    console.error(err);
  }
}
