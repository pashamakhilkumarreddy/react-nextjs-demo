import { memo } from "react";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Helmet from "../components/Helmet";

const PageNotFound = () => {
  return (
    <>
      <Helmet title="PageNotFound" />
      <div className="columns is-centered is-vcentered is-mobile">
        <div className="column is-12-mobile has-text-centered">
          <h2 className="title is-1">Lost in space?</h2>
          <Link href="/">
            <a className="button is-info is-medium">
              <span className="icon-text is-align-items-center">
                <span className="icon">
                  <ArrowNarrowLeftIcon />
                  &nbsp;&nbsp;
                </span>
                <span>Go to Home</span>
              </span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default memo(PageNotFound);
