export type ProjectLinks = {
  github?: string;
  live?: string;
};

export type TrackEvent = {
  type: "CARD_CLICK" | "CV_DOWNLOAD";
  projectId?: string;
};
