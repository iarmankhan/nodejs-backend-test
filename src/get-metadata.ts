import { Metadata } from "./types";

/**
 * Gets the URL, site name, title, description, keywords, and author info out of the <head> meta tags from a given html string.
 * 1. Get the URL from the <meta property="og:url"> tag.
 * 2. Get the site name from the <meta property="og:site_name"> tag.
 * 3. Get the title from the the <title> tag.
 * 4. Get the description from the <meta property="og:description"> tag or the <meta name="description"> tag.
 * 5. Get the keywords from the <meta name="keywords"> tag.
 * 6. Get the author from the <meta name="author"> tag.
 * If any of the above tags are missing, then the corresponding value will be an empty string.
 * @param {string} html The complete HTML document text to parse
 * @returns {Metadata} A Metadata object with data from the HTML <head>
 */
export default function getMetadata(html: string): Metadata {
  // TODO: delete and replace this with your code
  console.log(html);
  return {
    url: "https://www.example.com/something/to-test",
    siteName: "Example Site Name",
    title: "Example Title",
    description: "Example description.",
    keywords: ["example", "keywords"],
    author: "Example Author",
  };
}
