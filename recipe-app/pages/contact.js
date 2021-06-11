import Helmet from "../components/Helmet";

export default function Contact() {
  return (
    <>
      <Helmet title="Contact" />
      <div className="columns is-centered is-vcentered is-mobile">
        <div className="column is-full-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd has-text-centered">
          <h2 className="title is-2">Contact Us</h2>
        </div>
      </div>
    </>
  );
}
