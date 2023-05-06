import { RichTextDataTarget } from "contentful";

export interface AuthorContentful {
  name: string;
  nickname: string;
  description: string;
  profilePicture: RichTextDataTarget;
  instagram: URL;
  twitter: URL;
  facebook: URL;
  websites: URL[];
}

export interface Author {
  name: string;
  nickname: string;
  description: string;
  profilePicture: URL;
  instagram: URL;
  twitter: URL;
  facebook: URL;
  websites: URL[];
}
