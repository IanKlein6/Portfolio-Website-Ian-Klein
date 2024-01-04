export default {
    name: 'abouts',  // Schema name
    title: 'Abouts', // Display title
    type: 'document', // Document type

    // Document fields
    fields: [
        {
            name: 'title', // Title field
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description', // Description field
            title: 'Description',
            type: 'string'
        },
        {
            name: 'imgUrl', // Image URL field
            title: 'ImgUrl',
            type: 'image',
            options: { hotspot: true },
        },
    ]
};
