import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState, useMemo } from "react";
import { useRouter } from "next/router";
import SEO from "@/components/SEO";

const PAGE_SIZE = 15;

const investments = ({ stockData }) => {
  const { query } = useRouter();
  const currentTab = query.tab || "snapshot";
  
  // State for filters and pagination
  const [filters, setFilters] = useState({
    stock_type: "All",
    exchange: "All",
    domiciled: "All",
    mine_location: "All",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState("market_cap");
  const [sortDirection, setSortDirection] = useState("desc");

  // Get unique values for filters
  const uniqueOptions = useMemo(() => {
    if (!stockData || stockData.length === 0) return {};
    
    return {
      stock_type: ["All", ...new Set(stockData.map(item => item.stock_type).filter(Boolean))],
      exchange: ["All", ...new Set(stockData.map(item => item.exchange).filter(Boolean))],
      domiciled: ["All", ...new Set(stockData.map(item => item.domiciled).filter(Boolean))],
      mine_location: ["All", ...new Set(stockData.map(item => item.mine_location).filter(Boolean))],
    };
  }, [stockData]);

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    if (!stockData) return [];
    
    let filtered = stockData.filter((stock) => {
      return Object.entries(filters).every(([key, value]) => {
        if (value === "All") return true;
        return stock[key]?.toString().toLowerCase() === value.toLowerCase();
      });
    });

    // Sort data
    filtered.sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];
      
      if (aValue == null) return 1;
      if (bValue == null) return -1;
      
      // Try to convert to numbers for numeric sorting
      const aNum = parseFloat(String(aValue).replace(/[$,]/g, ''));
      const bNum = parseFloat(String(bValue).replace(/[$,]/g, ''));
      
      if (!isNaN(aNum) && !isNaN(bNum)) {
        return sortDirection === "asc" ? aNum - bNum : bNum - aNum;
      } else {
        const aStr = String(aValue).toLowerCase();
        const bStr = String(bValue).toLowerCase();
        return sortDirection === "asc" ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr);
      }
    });

    return filtered;
  }, [stockData, filters, sortColumn, sortDirection]);

  // Paginated data
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return filteredAndSortedData.slice(startIndex, startIndex + PAGE_SIZE);
  }, [filteredAndSortedData, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedData.length / PAGE_SIZE);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const formatPercentage = (value) => {
    if (!value || value === 'N/A') return '0.00%';
    if (typeof value === 'string' && value.includes('%')) return value;
    return `${parseFloat(value).toFixed(2)}%`;
  };

  const getPercentageColor = (value) => {
    const num = parseFloat(String(value).replace('%', ''));
    if (isNaN(num)) return '';
    return num >= 0 ? 'text-green-500' : 'text-red-500';
  };

  return (
    <div>
      <SEO
        title="Copper Investment Insights - Market Trends & Stock Analysis"
        description="Explore in-depth Copper investment insights, stock analysis, and the latest market trends. Stay informed about financial updates, ETF holdings, insider transactions, and stock screening tools to make better investment decisions."
        keywords="Copper investment insights, stock market trends, ETF holdings, stock analysis, insider transactions, stock screener, market updates, investment strategies, Copper and Copper Alloys investments"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/investments"
      />

      <Navbar />
      
      {/* Investment Hero Section */}
      <div className="px-3 md:px-12 py-5 md:py-5">
        <h1 className="cambay text-[22px] sm:text-3xl font-semibold">
          Investment Insights
        </h1>
        <p className="text-gray-600 mt-2">
          Explore comprehensive stock analysis and market trends
        </p>
      </div>

      {/* Tabs Section */}
      <div className="px-3 md:px-12">
        <div className="flex space-x-4 border-b border-gray-200">
          <button 
            className={`py-2 px-4 ${currentTab === "snapshot" ? "border-b-2 border-accent text-accent" : "text-gray-600"}`}
          >
            Snapshot
          </button>
          <button 
            className={`py-2 px-4 ${currentTab === "stock-screener" ? "border-b-2 border-accent text-accent" : "text-gray-600"}`}
          >
            Stock Screener
          </button>
          <button 
            className={`py-2 px-4 ${currentTab === "insider-transactions" ? "border-b-2 border-accent text-accent" : "text-gray-600"}`}
          >
            Insider Transactions
          </button>
          <button 
            className={`py-2 px-4 ${currentTab === "etf-trust-holdings" ? "border-b-2 border-accent text-accent" : "text-gray-600"}`}
          >
            ETF Trust Holdings
          </button>
        </div>
        
        <div className="mt-6">
          {currentTab === "snapshot" && (
            <div className="text-center py-8">
              <p>Snapshot view coming soon...</p>
            </div>
          )}
          {currentTab === "stock-screener" && (
            <div className="py-5">
              <h1 className="cambay text-[22px] sm:text-3xl font-semibold">
                Stock Screener
              </h1>
              <div className="mt-1 md:mt-5">
                <div className="w-full bg-accent/10 border border-date/20 p-2 py-4 md:p-8 rounded-lg mb-24">
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">
                      Showing {filteredAndSortedData.length} of {stockData?.length || 0} stocks from database
                    </p>
                  </div>
                  
                  {/* Filter Section */}
                  <div className="overflow-x-auto pb-2 custom-scrollbar-hidden mb-4">
                    <div className="flex gap-x-4 mt-3">
                      <div className="min-w-[120px]">
                        <label className="block text-xs font-medium text-teal-600 mb-1">Stock Type</label>
                        <select 
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md"
                          value={filters.stock_type}
                          onChange={(e) => handleFilterChange('stock_type', e.target.value)}
                        >
                          {uniqueOptions.stock_type?.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                      <div className="min-w-[120px]">
                        <label className="block text-xs font-medium text-teal-600 mb-1">Stock Exchange</label>
                        <select 
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md"
                          value={filters.exchange}
                          onChange={(e) => handleFilterChange('exchange', e.target.value)}
                        >
                          {uniqueOptions.exchange?.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                      <div className="min-w-[120px]">
                        <label className="block text-xs font-medium text-teal-600 mb-1">Domiciled</label>
                        <select 
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md"
                          value={filters.domiciled}
                          onChange={(e) => handleFilterChange('domiciled', e.target.value)}
                        >
                          {uniqueOptions.domiciled?.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                      <div className="min-w-[120px]">
                        <label className="block text-xs font-medium text-teal-600 mb-1">Mine Location</label>
                        <select 
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md"
                          value={filters.mine_location}
                          onChange={(e) => handleFilterChange('mine_location', e.target.value)}
                        >
                          {uniqueOptions.mine_location?.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto custom-scrollbar-hidden relative">
                    <table className="w-full min-w-[1200px] bg-white border rounded-md">
                      <thead className="font-bold border-b">
                        <tr>
                          <th 
                            className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider cursor-pointer hover:bg-gray-50"
                            onClick={() => handleSort('stock_type')}
                          >
                            STOCK TYPE {sortColumn === 'stock_type' && (sortDirection === 'asc' ? '↑' : '↓')}
                          </th>
                          <th 
                            className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider cursor-pointer hover:bg-gray-50"
                            onClick={() => handleSort('company_name')}
                          >
                            COMPANY NAME {sortColumn === 'company_name' && (sortDirection === 'asc' ? '↑' : '↓')}
                          </th>
                          <th 
                            className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider cursor-pointer hover:bg-gray-50"
                            onClick={() => handleSort('ticker')}
                          >
                            TICKER {sortColumn === 'ticker' && (sortDirection === 'asc' ? '↑' : '↓')}
                          </th>
                          <th 
                            className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider cursor-pointer hover:bg-gray-50"
                            onClick={() => handleSort('exchange')}
                          >
                            EXCHANGE {sortColumn === 'exchange' && (sortDirection === 'asc' ? '↑' : '↓')}
                          </th>
                          <th 
                            className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider cursor-pointer hover:bg-gray-50"
                            onClick={() => handleSort('domiciled')}
                          >
                            DOMICILED {sortColumn === 'domiciled' && (sortDirection === 'asc' ? '↑' : '↓')}
                          </th>
                          <th 
                            className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider cursor-pointer hover:bg-gray-50"
                            onClick={() => handleSort('mine_location')}
                          >
                            MINE LOCATION {sortColumn === 'mine_location' && (sortDirection === 'asc' ? '↑' : '↓')}
                          </th>
                          <th 
                            className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider cursor-pointer hover:bg-gray-50"
                            onClick={() => handleSort('primary_resource')}
                          >
                            PRIMARY RESOURCE {sortColumn === 'primary_resource' && (sortDirection === 'asc' ? '↑' : '↓')}
                          </th>
                          <th 
                            className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider cursor-pointer hover:bg-gray-50"
                            onClick={() => handleSort('market_cap')}
                          >
                            MARKET CAP {sortColumn === 'market_cap' && (sortDirection === 'asc' ? '↑' : '↓')}
                          </th>
                          <th 
                            className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider cursor-pointer hover:bg-gray-50"
                            onClick={() => handleSort('last_price')}
                          >
                            LAST PRICE {sortColumn === 'last_price' && (sortDirection === 'asc' ? '↑' : '↓')}
                          </th>
                          <th 
                            className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider cursor-pointer hover:bg-gray-50"
                            onClick={() => handleSort('intraday_percentage')}
                          >
                            INTRADAY % {sortColumn === 'intraday_percentage' && (sortDirection === 'asc' ? '↑' : '↓')}
                          </th>
                          <th 
                            className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider cursor-pointer hover:bg-gray-50"
                            onClick={() => handleSort('volume')}
                          >
                            VOLUME {sortColumn === 'volume' && (sortDirection === 'asc' ? '↑' : '↓')}
                          </th>
                          <th 
                            className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider cursor-pointer hover:bg-gray-50"
                            onClick={() => handleSort('ytd_percentage')}
                          >
                            YTD % {sortColumn === 'ytd_percentage' && (sortDirection === 'asc' ? '↑' : '↓')}
                          </th>
                          <th 
                            className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider cursor-pointer hover:bg-gray-50"
                            onClick={() => handleSort('week_52_low')}
                          >
                            WEEK 52 LOW {sortColumn === 'week_52_low' && (sortDirection === 'asc' ? '↑' : '↓')}
                          </th>
                          <th 
                            className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider cursor-pointer hover:bg-gray-50"
                            onClick={() => handleSort('week_52_high')}
                          >
                            WEEK 52 HIGH {sortColumn === 'week_52_high' && (sortDirection === 'asc' ? '↑' : '↓')}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-bg text-lightgray">
                        {paginatedData.map((stock, index) => (
                          <tr key={index} className="hover:bg-accent/10 border-b border-date/10 text-[13px] cursor-pointer">
                            <td className="px-4 py-[12px]">{stock.stock_type || 'N/A'}</td>
                            <td className="px-4 py-[12px] whitespace-nowrap truncate max-w-[200px]" title={stock.company_name}>
                              {stock.company_name}
                            </td>
                            <td className="px-4 py-[12px] font-semibold">{stock.ticker}</td>
                            <td className="px-4 py-[12px]">{stock.exchange}</td>
                            <td className="px-4 py-[12px]">{stock.domiciled}</td>
                            <td className="px-4 py-[12px]">{stock.mine_location}</td>
                            <td className="px-4 py-[12px]">{stock.primary_resource}</td>
                            <td className="px-4 py-[12px] font-semibold">{stock.market_cap}</td>
                            <td className="px-4 py-[12px] font-semibold">{stock.last_price}</td>
                            <td className={`px-4 py-[12px] font-semibold ${getPercentageColor(stock.intraday_percentage)}`}>
                              {formatPercentage(stock.intraday_percentage)}
                            </td>
                            <td className="px-4 py-[12px]">{stock.volume}</td>
                            <td className={`px-4 py-[12px] font-semibold ${getPercentageColor(stock.ytd_percentage)}`}>
                              {formatPercentage(stock.ytd_percentage)}
                            </td>
                            <td className="px-4 py-[12px]">{stock.week_52_low}</td>
                            <td className="px-4 py-[12px]">{stock.week_52_high}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  <div className="flex justify-between items-center mt-6">
                    <div className="text-sm text-gray-600">
                      Showing {((currentPage - 1) * PAGE_SIZE) + 1} to {Math.min(currentPage * PAGE_SIZE, filteredAndSortedData.length)} of {filteredAndSortedData.length} entries
                    </div>
                    <div className="flex items-center space-x-2">
                      <button 
                        className="px-3 py-1 text-sm border rounded disabled:opacity-50"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      >
                        Previous
                      </button>
                      
                      {/* Page numbers */}
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        const pageNum = Math.max(1, currentPage - 2) + i;
                        if (pageNum > totalPages) return null;
                        return (
                          <button
                            key={pageNum}
                            className={`px-3 py-1 text-sm rounded ${
                              pageNum === currentPage 
                                ? 'bg-accent text-white' 
                                : 'border hover:bg-gray-50'
                            }`}
                            onClick={() => setCurrentPage(pageNum)}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                      
                      <button 
                        className="px-3 py-1 text-sm border rounded disabled:opacity-50"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentTab === "insider-transactions" && (
            <div className="text-center py-8">
              <p>Insider Transactions view coming soon...</p>
            </div>
          )}
          {currentTab === "etf-trust-holdings" && (
            <div className="text-center py-8">
              <p>ETF Trust Holdings view coming soon...</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    // Use dynamic import to avoid ES6 module issues
    const { query } = await import('../lib/database');
    
    console.log('Fetching stock data from database...');
    
    const result = await query(`
      SELECT 
        ticker,
        company_name,
        stock_type,
        exchange,
        domiciled,
        mine_location,
        primary_resource,
        market_cap,
        last_price,
        intraday_percentage,
        volume,
        ytd_percentage,
        week_52_low,
        week_52_high,
        last_updated
      FROM api_app_stockmetrics 
      ORDER BY company_name ASC
    `);

    console.log(`Found ${result.rows.length} stock records`);

    const stockData = result.rows.map(row => ({
      ticker: row.ticker,
      company_name: row.company_name,
      stock_type: row.stock_type || 'N/A',
      exchange: row.exchange || 'N/A',
      domiciled: row.domiciled || 'N/A',
      mine_location: row.mine_location || 'N/A',
      primary_resource: row.primary_resource || 'N/A',
      market_cap: row.market_cap || 'N/A',
      last_price: row.last_price || 'N/A',
      intraday_percentage: row.intraday_percentage || '0.00%',
      volume: row.volume || 'N/A',
      ytd_percentage: row.ytd_percentage || '0.00%',
      week_52_low: row.week_52_low || 'N/A',
      week_52_high: row.week_52_high || 'N/A',
      last_updated: row.last_updated ? row.last_updated.toISOString() : null
    }));

    return {
      props: {
        stockData
      }
    };
  } catch (error) {
    console.error('Database error:', error);
    return {
      props: {
        stockData: []
      }
    };
  }
}

export default investments;