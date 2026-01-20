// Features with funding status
export const mobileFeatures = [
  { id: 1, text: 'Domain discovery, entity & use case definition', funded: true },
  { id: 2, text: 'Design database schema for hypergraph-based looms', funded: true },
  { id: 3, text: 'Integrate service for cloud backup and user authentication', funded: false },
  { id: 4, text: 'Encrypt all data in transport and at rest', funded: false },
  { id: 5, text: 'Upgrade cache mechanism to support very large loom trees (100k+ nodes)', funded: false },
  { id: 6, text: 'Add support for saving reusable system prompts', funded: true },
  { id: 7, text: 'Add pinned/bookmarked trees', funded: true },
  { id: 8, text: 'Add support for editing trees and nodes', funded: false },
  { id: 9, text: 'Add full markdown and LaTeX display support', funded: true },
  { id: 10, text: 'Add image upload support (for applicable models)', funded: false },
  { id: 11, text: 'Add document upload support (for applicable models)', funded: false },
  { id: 13, text: 'Add support for user defined models that comply with OpenAI API schema', funded: false },
  { id: 14, text: 'Add on-device audio transcription for hands-free voice mode', funded: true },
  { id: 15, text: 'Implement functional MVP of LoomDisplay (text-to-ASCII animation system)', funded: true },
  { id: 16, text: 'Add Hyperbolic model provider', funded: false },
];

export const webFeatures = [
  { id: 1, text: 'Support main app features in responsive web app for an initial cross-platform version', funded: false },
  { id: 2, text: 'Refine design and layout for desktop, tablet, and mobile', funded: false },
];

export const openLoomFeatures = [
  { id: 1, text: 'Upgrade OpenLoom protocol architecture from graph to hypergraph (better handling of multi-modal trees)', funded: false },
  { id: 2, text: 'Implement node signing requirements to ensure accurate author attribution', funded: false },
  { id: 3, text: 'Add support for non-text node types (e.g. images, documents)', funded: false },
]; 