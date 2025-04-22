import * as http from "http";
import * as https from "https";

const urlPattern =
  /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/;
const isValidURL = (url: string): boolean => urlPattern.test(url);

const defaultUrl = "https://davidhartsough.com/";

/**
 * Get the HTML document text from a given URL.
 * @param {string} url The URL to get the HTML document text from
 * @returns {string} The HTML document of the page at the given URL as a string
 */
export default function getHTML(url: string = defaultUrl): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!isValidURL(url)) reject(new Error("Invalid URL"));
    const client = url.startsWith("https") ? https : http;
    client
      .get(url, (res) => {
        let chunks = "";
        res.on("data", (chunk) => {
          chunks += chunk;
          if (chunks.length > 1e6) {
            res.destroy();
            reject(new Error("HTML too large"));
          }
        });
        res.on("end", () => resolve(chunks));
      })
      .on("error", reject);
  });
}
