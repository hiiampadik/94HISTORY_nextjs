import SanityClient from 'next-sanity-client';

export const client = new SanityClient({
    projectId: 'ssih3zec',
    dataset: 'production',
    useCdn: process.env.NODE_ENV === 'production',
});