import { config, collection, fields } from "@keystatic/core";

export default config({
  storage: process.env.KEYSTATIC_GITHUB_REPO
    ? {
        kind: "github",
        repo: process.env.KEYSTATIC_GITHUB_REPO as `${string}/${string}`,
      }
    : { kind: "local" },
  ui: {
    brand: { name: "OpesFlux Blog" },
  },
  collections: {
    blog: collection({
      label: "Blog Posts",
      slugField: "title",
      path: "src/content/blog/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({
          name: { label: "Title", description: "The main heading of the post (also becomes the URL slug)" },
        }),
        description: fields.text({
          label: "Meta Description",
          description: "Short summary shown in search results and the blog listing (150–160 chars)",
          multiline: true,
          validation: { isRequired: true },
        }),
        date: fields.date({
          label: "Publish Date",
          validation: { isRequired: true },
        }),
        updated: fields.date({
          label: "Last Updated (optional)",
          description: "Leave blank if post has never been updated",
        }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Company News", value: "Company News" },
            { label: "MTD & VAT", value: "MTD & VAT" },
            { label: "Growth", value: "Growth" },
            { label: "Payroll", value: "Payroll" },
            { label: "Features", value: "Features" },
            { label: "Guides", value: "Guides" },
            { label: "Industry", value: "Industry" },
          ],
          defaultValue: "Guides",
        }),
        tags: fields.array(
          fields.text({ label: "Tag" }),
          {
            label: "Tags",
            description: "Add relevant tags (e.g. UK Tax, ERP, Retail)",
            itemLabel: (props) => props.value || "Tag",
          }
        ),
        featured: fields.checkbox({
          label: "Feature on homepage",
          description: "Tick to show this post in the featured section of the blog listing",
          defaultValue: false,
        }),
        coverImage: fields.image({
          label: "Cover Image",
          description: "Displayed at the top of the post and in social sharing cards (1200×630px recommended)",
          directory: "public/blog",
          publicPath: "/blog/",
        }),
        coverImageAlt: fields.text({
          label: "Cover Image Alt Text",
          description: "Describe the image for screen readers and SEO",
        }),
        author: fields.object(
          {
            name: fields.text({ label: "Author Name" }),
            role: fields.text({ label: "Author Role", description: "e.g. CEO & Co-founder" }),
            avatar: fields.text({
              label: "Avatar Path",
              description: "Path relative to /public (e.g. /team/james.jpg)",
            }),
          },
          { label: "Author" }
        ),
        seoKeywords: fields.array(
          fields.text({ label: "Keyword" }),
          {
            label: "SEO Keywords",
            description: "Keywords for search engine optimisation",
            itemLabel: (props) => props.value || "Keyword",
          }
        ),
        content: fields.mdx({
          label: "Content",
          options: {
            heading: [2, 3, 4],
            image: {
              directory: "public/blog",
              publicPath: "/blog/",
            },
          },
        }),
      },
    }),
  },
});
