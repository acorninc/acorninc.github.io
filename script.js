const apiUrl = 'https://m2m.cr.usgs.gov/api/api/json/stable/dataset-search';

// Example request body for searching datasets
const requestBody = {
    datasetName: "landsat_8", // dataset name (e.g., Landsat 8)
    spatialFilter: {
        filterType: "mbr", // filter type is 'minimum bounding rectangle'
        lowerLeft: { latitude: 34.56, longitude: -100.55 }, // lower left corner of bounding box
        upperRight: { latitude: 36.45, longitude: -98.76 }  // upper right corner of bounding box
    },
    temporalFilter: {
        startDate: "2024-01-01", // start date for query
        endDate: "2024-10-04"    // end date for query
    }
};

// Function to perform POST request
async function fetchUSGSData() {
    try {
        // Sending a POST request
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody) // convert JavaScript object to JSON string
        });
        
        // Parse the JSON response
        const data = await response.json();
        
        if (response.ok) {
            // Successfully retrieved the data
            window.alert('Data:', data);
        } else {
            // Error handling
            window.alert('Error:', data.message);
        }
    } catch (error) {
        window.alert('Fetch error:', error);
    }
}
