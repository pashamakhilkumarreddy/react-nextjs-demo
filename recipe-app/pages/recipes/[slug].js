import { useState } from "react";
import PropTypes from "prop-types";
import { HeartIcon } from "@heroicons/react/solid";
import {
  sanityClient,
  urlFor,
  usePreviewSubscription,
  PortableText,
} from "../../lib/sanity";
import Helmet from "../../components/Helmet";

const recipeQuery = `*[_type == "recipe" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    mainImage{
      asset->{
        _id, 
        url,
      }
    },
    likes,
    ingredient[]{
      _key,
      unit,
      wholeNumber,
      fraction,
      ingredient->{
        name
      }
    },
    instructions
  }`;

export default function SingleRecipe({ data: { recipe }, preview }) {
  if (!recipe && Object.values(recipe).length) return <div>Loading</div>;
  // const {data: recipe} = usePreviewSubscription(recipeQuery, {
  //   params: {
  //     slug: data.recipe.slug,
  //     initialData: data,
  //     enabled: preview && slug,
  //   },
  // });

  const { _id, name, slug, likes, mainImage, ingredient, instructions } =
    recipe;
  const [allLikes, setLikes] = useState(likes);
  const addLike = async () => {
    try {
      const res = await fetch("/api/handle-like", {
        method: "POST",
        body: JSON.stringify({
          _id,
        }),
      });
      const data = await res.json();
      setLikes(data.likes);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
    <Helmet title={name} />
      <div className="columns is-centered is-vcentered is-mobile">
        <div className="column is-full-mobile has-text-centered">
          <h1 className="title is-1">{name}</h1>
        </div>
      </div>
      <article
        className="columns is-centered is-vcentered is-mobile is-multiline"
        data-id={_id}
      >
        <div className="column is-full-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd">
          <figure>
            <img src={urlFor(mainImage).url()} />
          </figure>
        </div>
        <div className="column is-full-mobile is-12-tablet is-6-desktop is-6-widescreen is-6-fullhd has-text-centered">
          {ingredient && ingredient.length ? (
            <>
              <h4 className="title is-4">Ingredients</h4>
              {ingredient.map(
                ({ _key, unit, wholeNumber, fraction, ingredient }, i) => (
                  <li key={_key}>
                    <span>{ingredient.name}</span>&nbsp;
                    <span>{wholeNumber}</span>&nbsp;
                    <span>{fraction}</span>&nbsp;
                    <span> - {unit}</span>
                  </li>
                )
              )}
            </>
          ) : null}
          {instructions ? (
            <div className="instructions">
              <PortableText blocks={instructions} />
            </div>
          ) : null}
          <button className="button is-link mt-2" onClick={addLike}>
            <span className="icon-text">
              <span className="icon">
                <HeartIcon />
              </span>
              <span>{allLikes}</span>
            </span>
          </button>
        </div>
        <style jsx>
          {`
            .instructions {
              margin: 1rem 0;
            }
          `}
        </style>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "recipe" && defined(slug.current)]{
      "params": {
        "slug": slug.current
      }
    }`
  );
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  try {
    const { slug } = params;
    const recipe = await sanityClient.fetch(recipeQuery, { slug });
    return {
      props: {
        data: {
          recipe,
        },
        preview: true,
      },
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
}

SingleRecipe.propTypes = {
  data: PropTypes.object.isRequired,
};
