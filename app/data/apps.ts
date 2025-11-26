export type AppEntry = {
  name: string;
  description: string;
  url: string;
  status: "Live" | "In development" | "Coming soon" | string;
};

// TODO: Update this list with your actual applications
export const apps: AppEntry[] = [
  {
    name: "App Name 1",
    description: "Short one-line description of what this app does.",
    url: "https://example.com/app1",
    status: "Live · Updated this month"
  },
  {
    name: "App Name 2",
    description: "Short one-line description of what this app does.",
    url: "https://example.com/app2",
    status: "In development · Iterating weekly"
  },
  {
    name: "App Name 3",
    description: "Short one-line description of what this app does.",
    url: "https://example.com/app3",
    status: "Coming soon · Join the waitlist"
  }
];
