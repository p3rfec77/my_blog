export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  groups: [
    {
      name: 'meta',
      title: 'Meta',
    },
    {
      name: 'content',
      title: 'Content',
    },
  ],
  fields: [
    {
      name: 'meta_title',
      type: 'string',
      title: 'Meta title',
      group: 'meta',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      group: 'content',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedDate',
      type: 'date',
      title: 'Published Date',
      group: 'content',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      group: 'content',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      group: 'content',
      options: {
        source: 'title',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      group: 'content',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      group: 'content',
      of: [{type: 'block'}, {type: 'image'}],
      validation: (Rule) => Rule.required(),
    },
  ],
}
