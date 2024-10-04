import React, { useEffect, useState } from 'react';
import './Portfolio.css'; // Import the CSS module

const Portfolio = () => {
    const [portfolioData, setPortfolioData] = useState({});
    const [logs, setLogs] = useState([]);
    
    // Function to fetch portfolio data
    const fetchPortfolioData = async () => {
        const response = await fetch('http://localhost:3000/portfolio');
        const data = await response.json();
        setPortfolioData(data);
    };

    // Function to fetch logs
    const fetchLogs = async () => {
        const response = await fetch('http://localhost:3000/logs');
        const data = await response.json();
        setLogs(data);
    };

    // Fetch data every 5 seconds
    useEffect(() => {
        fetchPortfolioData();
        fetchLogs();
        const interval = setInterval(() => {
            fetchPortfolioData();
            fetchLogs();
        }, 5000);
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    // Calculate profit percentage
    const totalPortfolioValue = portfolioData.totalPortpholioValue || 0;
    const startingInvestment = 100000;
    const profitPercentage = ((portfolioData.netProfit / startingInvestment) * 100).toFixed(2);

    return (
        <div className="portfolio-container">
            <h1>Your Portfolio</h1>
            <div className="summary">
                <p>Net Profit: ${portfolioData.netProfit ? portfolioData.netProfit.toFixed(2) : '0.00'}</p>
                <p>Total Portfolio Value: ${totalPortfolioValue.toFixed(2)}</p>
                <p>Cash in Hand: ${portfolioData.cash ? portfolioData.cash.toFixed(2) : '0.00'}</p>
                <p>Profit Percentage: {profitPercentage}%</p>
            </div>
            
            <table className="investment-table">
                <thead>
                    <tr>
                        <th>Stock Symbol</th>
                        <th>Amount Invested</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(portfolioData).map(([symbol, investment]) => 
                        symbol !== "cash" && symbol !== "netProfit" && symbol !== "totalPortfolioValue" && (
                            <tr key={symbol}>
                                <td>{symbol}</td>
                                <td>${investment.toFixed(2)}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>

            <h2>Transaction Logs</h2>
            <table className="logs-table">
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Log</th>
                    </tr>
                </thead>
                <tbody>
                    {logs.slice(-20).map((log, index) => (
                        <tr key={index}>
                            <td>{new Date(log.timestamp).toLocaleString()}</td>
                            <td>{log.logValue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Portfolio;
