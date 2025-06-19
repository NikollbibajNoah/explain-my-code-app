export type ExplanationRequest = {
  prompt: string; // the code to be explained
  stream: boolean; // generate output in chunks
  model: string; // phi-3 for now
};
