import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const clientConfig = {
  projectId: "is6mjiag",
  dataset: "production",
  apiVersion: "2023-07-12",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
};

export const client = createClient(clientConfig);

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
