const sheetId = "1j9bIVNfSAqP27qqCjtO8ogmXsZ1ADx3sDSJoUBJZdsI";
const apiKey = "AIzaSyARXao2aKy8YD-P5252hjBMSovZPQYaRmI";
const sheetName = "Sheet1";
const range = `${sheetName}!A:E`; // Adjust this range as needed
const sheetURL = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

function updateAttendance(data) {
    // Map attendance values to names
    const attendanceMapping = {
        "55005A1BF6E2": "MD Wasim",
        "3A00EBBEEB84": "P.Mahesh babu",
        "55002BEC188A": "R.Sandeep",
        "3A00ED0D18C2": "M.Udaykiran",
        "3A00ED7001A6": "M.Shivakumar",
        "3A00EB8B4218": "S.Yashwanth",
        "3C00976934F6": "GUNTI SINDHU SAGAR",
        "3F006664724F": "RAMAGIRI MAHESH BABU",
        "3F006661A79F": "BOGOLU UMESH REDDY",
        "55003995B841": "Unknown User"
    };

    const Attendance = [];

    // Extract the relevant rows
    for (let i = data.length - 1; i >= 1; i--) { // Start from 1 if row 0 is header
        const attendanceValue = data[i][3];
        if (attendanceValue && attendanceValue.length === 12) { // Check if Attendance column is non-empty and has length 12
            Attendance.push(data[i]);
        }
    }

    // Display the data for the latest 9 entries
    Attendance.slice(0, 9).forEach((row, i) => {
        const attendanceValue = row[3]; // Attendance column (index 3)
        const nameElement = document.querySelector(`#name${i + 1}`);
        const desgElement = document.querySelector(`#Desig${i + 1}`);
        const timeElement = document.querySelector(`#Time${i + 1}`);

        if (nameElement) {
            const name = attendanceMapping[attendanceValue];
            console.log(`Attendance Value: ${attendanceValue}, Mapped Name: ${name}`);
            nameElement.innerHTML = name || "Unknown";
        }
        if (desgElement) {
            desgElement.innerHTML = row[0] || "No Date"; // Date column (index 0)
        }
        if (timeElement) {
            timeElement.innerHTML = row[1] || "No Time"; // Time column (index 1)
        }
    });

    console.log('Attendance Data:', Attendance);

    // Cache the data
    localStorage.setItem('cachedAttendanceData', JSON.stringify(data));
}

$(document).ready(function() {
    const cachedData = localStorage.getItem('cachedAttendanceData');
    if (cachedData) {
        console.log('Using cached data.');
        updateAttendance(JSON.parse(cachedData));
    }

    $.ajax({
        type: "GET",
        url: sheetURL,
        dataType: "json",
        success: function (response) {
            // The data is in the `values` property
            var data = response.values;
            if (data && data.length) {
                console.log('New data fetched.');
                updateAttendance(data);
            } else {
                console.log('No new data.');
            }
        },
        error: function (error) {
            console.error('Error fetching new data:', error);
        }
    });
});
