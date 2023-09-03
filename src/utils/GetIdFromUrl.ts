const getIdFromUrl = (url: string) => {
  const match = url.match(/\/(\d+)\/$/);

  return match ? parseInt(match[1]) : null;
};

export default getIdFromUrl;
