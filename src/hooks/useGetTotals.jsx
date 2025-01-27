function useGetTotals() {
  const handleCountReturnSales = (filteredSales) => {
    const count = filteredSales.filter((sale) => !sale.estado).length;
    return count;
  };

  const handleCountProducts = (filteredSales) => {
    const count = filteredSales.reduce((acc, sale) => acc + sale.cantidad, 0);
    return count;
  };

  const handleCountProfit = (filteredSales) => {
    const totalProfit = filteredSales.reduce((acc, sale) => {
      const cleanedPrice = sale.precio.replace(/[^\d.-]/g, "");
      const price = parseFloat(cleanedPrice);
      const qua = parseInt(sale.cantidad, 10);

      return acc + price * qua;
    }, 0);

    return `$${totalProfit}`;
  };

  return { handleCountReturnSales, handleCountProducts, handleCountProfit };
}

export default useGetTotals;
