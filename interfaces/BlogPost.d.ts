import { Asset, Link, RichTextDataTarget } from "contentful";
import { SEOMetadata } from "./SEOMetadata";
import { Project } from "./Project";
import { AuthorResolved } from "./Author";
import { Image } from "./Assets";

export interface BlogPostContentful {
  id: string;
  name: string;
  pageTitle: string;
  category: string;
  seo?: RichTextDataTarget;
  datePublished: Date;
  project: RichTextDataTarget;
  author: RichTextDataTarget;
  relatedPages: BlogPost[];
  body: string;
  tags?: string[];
  embedImage?: RichTextDataTarget;
  highlightImage?: RichTextDataTarget;
  slug: string;
  summary: string;
}

export interface BlogPost {
  id: string;
  name: string;
  pageTitle: string;
  category: string;
  seo?: SEOMetadata;
  datePublished: Date;
  project: Project;
  author: AuthorResolved;
  relatedPages: BlogPost[];
  body: string;
  tags?: string[];
  embedImage?: Image;
  highlightImage?: Image;
  slug: string;
  summary: string;
}
