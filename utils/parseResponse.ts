import { Image } from "@/interfaces/Assets";
import { Author } from "@/interfaces/Author";
import { BlogPost, BlogPostContentful } from "@/interfaces/BlogPost";
import { Project } from "@/interfaces/Project";
import { SEOMetadata } from "@/interfaces/SEOMetadata";
import { Asset, Entry, EntryCollection } from "contentful";

export const parseBlogColletion = (
  blogCollection: EntryCollection<BlogPostContentful>
): BlogPost[] => {
  const blogPosts: BlogPost[] = [];
  blogCollection.items.map((item) => {
    const authorEntry: Author = blogCollection.includes.Entry.find(
      (relatedObject: Entry<Author>) =>
        relatedObject.sys.id === item.fields.author.sys.id
    ).fields;
    const projectEntry: Project = blogCollection.includes.Entry.find(
      (relatedObject: Entry<Project>) =>
        relatedObject.sys.id === item.fields.project?.sys.id
    ).fields;
    const seoEntry: SEOMetadata = blogCollection.includes.Entry.find(
      (relatedObject: Entry<SEOMetadata>) =>
        relatedObject.sys.id === item.fields.seo?.sys.id
    ).fields;
    let blogPost: BlogPost = {
      ...item.fields,
      id: item.sys.id,
      author: authorEntry,
      embedImage: undefined,
      highlightImage: undefined,
      project: projectEntry,
      seo: seoEntry,
    };
    if (
      item.fields.embedImage !== undefined &&
      item.fields.highlightImage !== undefined
    ) {
      const embedImageAsset: Image = blogCollection.includes.Asset.find(
        (relatedObject: Asset) =>
          relatedObject.sys.id === item.fields.embedImage?.sys.id
      ).fields;
      const highlightImageAsset: Image = blogCollection.includes.Asset.find(
        (relatedObject: Asset) =>
          relatedObject.sys.id === item.fields.highlightImage?.sys.id
      ).fields;
      blogPost.embedImage = embedImageAsset;
      blogPost.highlightImage = highlightImageAsset;
    }
    blogPosts.push(blogPost);
  });
  return blogPosts;
};
