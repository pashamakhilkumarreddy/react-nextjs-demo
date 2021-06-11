import { memo } from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p className="title is-4">
          &copy; 2021 <strong>Next.js Sanity Demo</strong>
        </p>
      </div>
      <style jsx>
        {`
          .footer {
            position: absolute;
            width: 100vw;
            bottom: -6rem;
            padding: 1.5rem !important;
            border-top: 1px solid #eaeaea;
          }
        `}
      </style>
    </footer>
  );
};

export default memo(Footer);
