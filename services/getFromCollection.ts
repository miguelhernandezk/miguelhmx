import { Entry, EntryCollection } from "contentful";

export const getEntryFromCollection = (
  data: EntryCollection<any>,
  id: string
) => {
  return data.includes.Entry.filter((entry: Entry<any>) => {
    return entry.sys.id === id;
  });
};

export const getAssetFromCollection = (
  data: EntryCollection<any>,
  id: string
) => {
  return data.includes.Asset.filter((entry: Entry<any>) => {
    return entry.sys.id === id;
  });
};
