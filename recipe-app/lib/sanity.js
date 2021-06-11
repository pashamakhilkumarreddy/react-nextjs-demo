import {
  createClient,
  createPreviewSubscriptionHook,
  createImageUrlBuilder,
  createPortableTextComponent,
} from "next-sanity";

const config = {
  projectId: process.env.REACT_APP_PROJECT_ID || "8omjhkc7",
  dataset: process.env.REACT_APP_SANITY_DATASET || "production",
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "prod" ? true : false,
};

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {},
});
