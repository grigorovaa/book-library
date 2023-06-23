export const fetchBook = async (isbn) => {
  const response = await fetch(`https://openlibrary.org/isbn/${isbn}.json`);
  const data = await response.json();
  return data;
};
