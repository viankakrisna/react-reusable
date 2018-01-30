const showFile = (key, value) =>
  value instanceof File
    ? {
        lastModified: value.lastModified,
        lastModifiedDate: value.lastModifiedDate,
        name: value.name,
        size: value.size,
        type: value.type,
      }
    : value;
export default showFile;
