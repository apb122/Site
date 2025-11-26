import appsData from "./apps.json";

export type AppMeta = {
  name: string;
  description: string;
  url: string;
  status: string;
  stack?: string;
};

// Export as typed constant to keep runtime lean while preserving type-safety
export const apps: AppMeta[] = appsData satisfies AppMeta[];
