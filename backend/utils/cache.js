import NodeCache from 'node-cache';
export const cache = new NodeCache({ stdTTL: 60 * 5 }); // 5 minutes
