# IPL Dataset Visualization 2

## Install

**1: Install Node**

https://nodejs.org/en/download/

**2: Install git**

Linux: https://git-scm.com/downloads

Windows: https://gitforwindows.org/

Watch [this tutorial on YouTube](https://www.youtube.com/watch?v=rWboGsc6CqI) if required. Feel free to refer to other tutorials as well.

**3: Install VSCode**

https://code.visualstudio.com/download

**4: Clone this repository**

```sh
https://github.com/anand-mayank/IPL2-Visualization.git
```

**5: Install npm packages**

```sh
npm install
```

**6: Prepare data**

```
npm run ipl
```

**7: Start server**

```
npm start server
```

**8: Visualize results on your browser**

Open http://127.0.0.1:8080 

---

## Project Structure

**`csv_data`**: This directory contains the dataset: `matches.csv` and `deliveries.csv`

**`ipl`**: This directory contains all your JavaScript business logic

**`public`**: This directory is contains the resulting `data.json` and also the HTML and JavaScript code required to visualize the results. The static server serves the `index.html` file present in this directory

**`node_modules`**: This directory is used by node and npm to store third party packages like `csvtojson` and `http-server`.

**`index.js`**: This file contains the code which: 1. Reads the csv data 2. Calls the JavaScript business logic functions. 3. Saves the results in `public/data.json`

**`server.js`**: This file contains the code where the data is fetched from the server into the `Data.json` file and retrive the data and display the highcharts as a result. 

---

## Problems

1. Get the Year from User and Display the Highcharts of Top 10 Bowler's Economy of IPL.
