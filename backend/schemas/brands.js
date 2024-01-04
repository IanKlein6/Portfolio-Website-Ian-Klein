export default {
    name: 'brands', // Identifier for this schema
    title: 'Brands', // Display name
    type: 'document', // Defines a document type schema

    fields: [
        {
            // Field for image URL
            name: 'imgUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true, // Enables image hotspot for flexible cropping
            },
        },
        {
            // Field for the brand name
            name: 'name',
            title: 'Name',
            type: 'string'
        }
    ]
}
