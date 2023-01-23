/*

Codewars, 7k: Showing X to Y of Z Products

*/

const paginationText = (pageNumber, pageSize, totalProducts) => {
  const startPage = (pageNumber - 1) * pageSize + 1;
  const endPage = Math.min(startPage + pageSize - 1, totalProducts);
  return `Showing ${startPage} to ${endPage} of ${totalProducts} Products.`;
}