import PropTypes from "prop-types";
import Link from "next/link";
import { urlFor } from "../../lib/sanity";

const Recipe = ({ _id, name, slug, mainImage }) => {
  return (
    <Link href={`/recipes/${slug.current}`}>
      <a className="card column is-11-mobile is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd mb-4">
        <div className="card-image">
          <figure className="image is-square">
            <img
              src={urlFor(mainImage).url()}
              alt={name}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48"></figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{name}</p>
            </div>
          </div>

          <div className="content"></div>
          <time dateTime=""></time>
        </div>
      </a>
    </Link>
  );
};

Recipe.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.object.isRequired,
  mainImage: PropTypes.object.isRequired,
};

export default Recipe;
