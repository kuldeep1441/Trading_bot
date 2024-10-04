### Stock Price Generation Mechanism

1. *Fluctuation Based on Stock Type*:
   - *Large-cap stocks*: Price changes are limited to ±0.2%.
   - *Mid-cap stocks*: Price changes are within ±0.5%.
   - *Small-cap stocks*: These experience more volatility, with changes of up to ±1%.

2. *Bias and Trend Influence*:
   - Every 15 minutes, each stock’s bias is updated with a random value between 0 and 1.
   - If *bias > 0.6*, the stock has a 75% chance of positive price changes.
   - If *bias < 0.4*, the stock has a 75% chance of negative price changes.
   - If *bias* falls between 0.4 and 0.6, the probability of positive and negative changes is equal.

This bias-based mechanism drives the price fluctuations and trends in the simulation, allowing for dynamic stock movements.


### Trading Algorithms and Mechanism

#### 1. *Basic Selling Mechanism*
After every price change, we try to sell stocks based on the following criteria:
- *Large-cap stocks*: Sell when profit or loss reaches ±1%.
- *Mid-cap stocks*: Sell when profit or loss reaches ±3%.
- *Small-cap stocks*: Sell when profit or loss reaches ±5%.

This helps in booking profits or cutting losses, depending on the stock's performance.

#### 2. *Algo 1: Momentum Trading*
Momentum trading involves tracking the last 10 price changes of a stock:
- If there are *8 or more negative changes*, the stock is in a negative trend, and we sell it.
- If there are *8 or more positive changes*, the stock is in a positive trend, and we buy more of it.

This algorithm identifies strong price movements and acts accordingly.

#### 3. *Algo 2: Moving Average Trading*
This algorithm compares the stock’s current price with its moving average for the last hour:
- If the *current price* crosses *above* the moving average, a new positive trend is detected, and we buy the stock.
- If the *current price* crosses *below* the moving average, a negative trend is detected, and we sell the stock.

#### 4. *Buying Mechanism*
To balance risk, we invest a fixed percentage of available cash:
- *6%* in large-cap stocks.
- *3%* in mid-cap stocks.
- *1%* in small-cap stocks.

This strategy stabilizes the portfolio while capturing growth across different stock categories.
