// connect sanity client to app

import snaityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = snaityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    // apiToken: 
    token: process.env.REACT_APP_SANITY_TOCKEN,
});


// cade that is always needed when using sanity 
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);