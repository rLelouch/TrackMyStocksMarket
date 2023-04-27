class ActionData {

    getAirLiquideData = async () => {
        const apiKey = '7M7EZXSZX1H4ED46';
        const symbol = 'AI.PA';
        const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${apiKey}`;
    
        const response = await fetch(apiUrl);
        const data = await response.json();

        const airLiquideData = [];
    
        for (let date in data['Time Series (Daily)'])
        {
            if (data['Time Series (Daily)'].hasOwnProperty(date))
            {
                const closePrice = parseFloat(data['Time Series (Daily)'][date]['4. close']);
                airLiquideData.push([date, closePrice]);
            }
        }

        return airLiquideData;
    };

    getOrangeData = async () => {
        const apiKey = '7M7EZXSZX1H4ED46';
        const symbol = 'ORA.PA';
        const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${apiKey}`;
    
        const response = await fetch(apiUrl);
        const data = await response.json();
    
        const orangeData = [];
    
        for (let date in data['Time Series (Daily)'])
        {
            if (data['Time Series (Daily)'].hasOwnProperty(date)) {
                const closePrice = parseFloat(data['Time Series (Daily)'][date]['4. close']);
                orangeData.push([date, closePrice]);
            }
        }

        return orangeData;
    };

    getETHData = async () => {
        const apiKey = '7M7EZXSZX1H4ED46';
        const symbol = 'ETH';
        const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${apiKey}`;
    
        const response = await fetch(apiUrl);
        const data = await response.json();

        const ethData = [];

        for (let date in data['Time Series (Daily)'])
        {
            if (data['Time Series (Daily)'].hasOwnProperty(date)) {
                const closePrice = parseFloat(data['Time Series (Daily)'][date]['4. close']);
                ethData.push([date, closePrice]);
            }
        }

        return ethData;
    };
}

export default ActionData;