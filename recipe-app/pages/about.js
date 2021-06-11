import Helmet from "../components/Helmet";

export default function About() {
  return (
    <>
      <Helmet title="About" />
      <div className="columns is-centered is-vcentered is-mobile">
        <div className="column is-full-mobile is-full-tablet is-12-desktop is-12-widescreen is-12-fullhd has-text-centered">
          <h2 className="title is-2">About</h2>
        </div>
      </div>
    </>
  );
}
