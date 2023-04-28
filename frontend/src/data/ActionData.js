import * as fs from 'fs';

class ActionData {
    constructor() {
        this.airLiquideData = [];
        this.orangeData = [];
        this.ethData = [];
    }

    getAirLiquideData = async () => {
        // ... existing code to retrieve data
        const apiKey = '7M7EZXSZX1H4ED46';
        const symbol = 'AI.PAR';
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

        this.airLiquideData = [];

        for (let date in data['Time Series (Daily)']) {
            if (data['Time Series (Daily)'].hasOwnProperty(date)) {
                const closePrice = parseFloat(data['Time Series (Daily)'][date]['4. close']);
                this.airLiquideData.push([date, closePrice]);
            }
        }

        this.writeToFile('airLiquideData.json', this.airLiquideData);
    };

    getOrangeData = async () => {
        // ... existing code to retrieve data
        const apiKey = '7M7EZXSZX1H4ED46';
        const symbol = 'ORA.PAR';
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

        this.orangeData = [];

        for (let date in data['Time Series (Daily)']) {
            if (data['Time Series (Daily)'].hasOwnProperty(date)) {
                const closePrice = parseFloat(data['Time Series (Daily)'][date]['4. close']);
                this.orangeData.push([date, closePrice]);
            }
        }

        this.writeToFile('orangeData.json', this.orangeData);
    };

    getETHData = async () => {
        // ... existing code to retrieve data
        const apiKey = '7M7EZXSZX1H4ED46';
        const symbol = 'MC.PAR';
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

        this.ethData = [];

        for (let date in data['Time Series (Daily)']) {
            if (data['Time Series (Daily)'].hasOwnProperty(date)) {
                const closePrice = parseFloat(data['Time Series (Daily)'][date]['4. close']);
                this.ethData.push([date, closePrice]);
            }
        }

        this.writeToFile('ethData.json', this.ethData);
    };

    writeToFile = (filename, data) => {
        fs.writeFile(filename, JSON.stringify(data), (err) => {
            if (err) {
                console.error(err);
            }
        });
    };
}

export default ActionData;