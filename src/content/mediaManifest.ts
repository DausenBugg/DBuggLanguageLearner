export interface MediaAttribution {
  lessonId: string;
  source: string;
  author: string;
  license: string;
  url: string;
}

export const mediaManifest: MediaAttribution[] = [
  {
    lessonId: "m1w1-greetings",
    source: "Unsplash",
    author: "Alex Knight",
    license: "Unsplash License",
    url: "https://unsplash.com/photos/Jztmx9yqjBw"
  },
  {
    lessonId: "m1w2-introductions",
    source: "Unsplash",
    author: "Jezael Melgoza",
    license: "Unsplash License",
    url: "https://unsplash.com/photos/alY6_OpdwRQ"
  },
  {
    lessonId: "m2w1-ordering-food",
    source: "Unsplash",
    author: "Louis Hansel",
    license: "Unsplash License",
    url: "https://unsplash.com/photos/UtcOhVC-3VU"
  }
];
