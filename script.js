// Scroll to section
// Scroll to section

function scrollToSection(sectionId) {

    document
        .getElementById(sectionId)
        .scrollIntoView({
            behavior: "smooth"
        });

}


// Open booking modal

function openBooking(centerName) {

    document
        .getElementById("bookingModal")
        .style.display = "flex";

    document
        .getElementById("selectedCenter")
        .innerText = "Selected Center: " + centerName;

}


// Close modal

function closeModal() {

    document
        .getElementById("bookingModal")
        .style.display = "none";

}


// Booking form

document
    .getElementById("bookingForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        closeModal();

        showToast(
            "Booking successful! Your token is #126 🎟️"
        );

    });


// Toast message

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.innerText = message;

    toast.style.display = "block";

    setTimeout(function() {

        toast.style.display = "none";

    }, 4000);

}


// Notification button

function showNotification() {

    showToast(
        "🔔 Your procurement slot is scheduled soon!"
    );

}


// Simulated live queue

let currentToken = 110;

setInterval(function() {

    if (currentToken < 125) {

        currentToken++;

        let farmersAhead =
            125 - currentToken;

        let waitingTime =
            farmersAhead * 3;

        let progress =
            ((currentToken - 110) / 15) * 100;


        document
            .getElementById("currentToken")
            .innerText = "#" + currentToken;


        document
            .getElementById("farmersAhead")
            .innerText =
            farmersAhead;


        document
            .getElementById("waitingTime")
            .innerText =
            waitingTime + " min";


        document
            .getElementById("progressText")
            .innerText =
            Math.round(progress) + "%";


        document
            .getElementById("progressBar")
            .style.width =
            progress + "%";

    }

}, 8000);
// ADMIN DASHBOARD - CALL NEXT TOKEN

function nextToken() {

    const currentTokenElement =
        document.getElementById("adminCurrentToken");

    const nextTokenElement =
        document.getElementById("nextTokenNumber");

    const waitingElement =
        document.getElementById("adminWaiting");

    const totalWaitingElement =
        document.getElementById("waitingFarmers");


    if (!currentTokenElement) {
        return;
    }


    let currentToken =
        parseInt(
            currentTokenElement.innerText.replace("#", "")
        );

    let waiting =
        parseInt(
            waitingElement.innerText
        );


    currentToken++;

    waiting--;


    currentTokenElement.innerText =
        "#" + currentToken;


    nextTokenElement.innerText =
        "#" + (currentToken + 1);


    waitingElement.innerText =
        waiting;


    if (totalWaitingElement) {

        totalWaitingElement.innerText =
            waiting;

    }

}


// UPDATE FARMER STATUS

function updateStatus(button) {

    const row =
        button.parentElement.parentElement;


    const status =
        row.querySelector(".status");


    status.innerText =
        "Completed";


    status.classList.remove(
        "waiting",
        "verification"
    );


    status.classList.add(
        "completed"
    );


    button.innerText =
        "Completed";


    button.disabled = true;


    button.style.opacity =
        "0.6";

}


// SEARCH FARMER

function searchFarmer() {

    const input =
        document
            .getElementById("farmerSearch");


    const filter =
        input.value.toUpperCase();


    const table =
        document
            .getElementById("farmerTable");


    const rows =
        table
            .getElementsByTagName("tr");


    for (let i = 1; i < rows.length; i++) {

        const farmerName =
            rows[i]
                .getElementsByTagName("td")[1];


        if (farmerName) {

            const text =
                farmerName.textContent ||
                farmerName.innerText;


            if (
                text.toUpperCase()
                    .indexOf(filter) > -1
            ) {

                rows[i].style.display = "";

            }

            else {

                rows[i].style.display = "none";

            }

        }

    }

}
// ======================================
// FIND NEARBY PROCUREMENT CENTERS
// ======================================

const procurementCenters = [

    {
        name: "Ghaziabad Wheat Center",
        city: "Ghaziabad",
        crop: "Wheat",
        latitude: 28.6692,
        longitude: 77.4538,
        waiting: 18,
        waitTime: 35,
        slots: 24
    },

    {
        name: "Noida Rice Center",
        city: "Noida",
        crop: "Rice",
        latitude: 28.5355,
        longitude: 77.3910,
        waiting: 32,
        waitTime: 48,
        slots: 15
    },

    {
        name: "Meerut Crop Center",
        city: "Meerut",
        crop: "Maize",
        latitude: 28.9845,
        longitude: 77.7064,
        waiting: 12,
        waitTime: 22,
        slots: 5
    },

    {
        name: "Hapur Procurement Center",
        city: "Hapur",
        crop: "Wheat",
        latitude: 28.7306,
        longitude: 77.7759,
        waiting: 8,
        waitTime: 16,
        slots: 32
    },

    {
        name: "Bulandshahr Procurement Center",
        city: "Bulandshahr",
        crop: "Rice",
        latitude: 28.4069,
        longitude: 77.8498,
        waiting: 21,
        waitTime: 40,
        slots: 18
    }

];


// Get user's current location

function findNearbyCenters() {

    const status =
        document.getElementById("locationStatus");

    status.innerHTML =
        "📍 Detecting your location...";


    if (!navigator.geolocation) {

        status.innerHTML =
            "❌ Geolocation is not supported by your browser.";

        return;
    }


    navigator.geolocation.getCurrentPosition(

        function(position) {

            const userLatitude =
                position.coords.latitude;

            const userLongitude =
                position.coords.longitude;


            status.innerHTML =
                "✅ Location detected. Showing nearest procurement centers.";


            calculateNearbyCenters(
                userLatitude,
                userLongitude
            );

        },

        function(error) {

            status.innerHTML =
                "⚠️ Location permission denied. Please allow location access.";

        }

    );

}



// Calculate distance between two coordinates

function calculateDistance(
    lat1,
    lon1,
    lat2,
    lon2
) {

    const earthRadius = 6371;

    const dLat =
        degreesToRadians(lat2 - lat1);

    const dLon =
        degreesToRadians(lon2 - lon1);


    const a =
        Math.sin(dLat / 2) *
        Math.sin(dLat / 2) +

        Math.cos(
            degreesToRadians(lat1)
        ) *

        Math.cos(
            degreesToRadians(lat2)
        ) *

        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);


    const c =
        2 *
        Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );


    return earthRadius * c;

}



// Convert degrees into radians

function degreesToRadians(degrees) {

    return degrees * (Math.PI / 180);

}



// Sort and display centers

function calculateNearbyCenters(
    userLatitude,
    userLongitude
) {

    const centersWithDistance =
        procurementCenters.map(function(center) {

            const distance =
                calculateDistance(

                    userLatitude,
                    userLongitude,

                    center.latitude,
                    center.longitude

                );


            return {

                ...center,

                distance: distance

            };

        });


    centersWithDistance.sort(
        function(a, b) {

            return a.distance - b.distance;

        }
    );


    displayNearbyCenters(
        centersWithDistance
    );

}



// Display center cards

function displayNearbyCenters(centers) {

    const container =
        document.querySelector(
            ".center-container"
        );


    container.innerHTML = "";


    centers.forEach(function(center, index) {

        let crowdClass =
            "low-crowd";

        let crowdText =
            "Low Crowd";


        if (center.waiting > 25) {

            crowdClass =
                "high-crowd";

            crowdText =
                "High Crowd";

        }

        else if (center.waiting > 15) {

            crowdClass =
                "medium-crowd";

            crowdText =
                "Moderate Crowd";

        }


        const recommendedBadge =
            index === 0

                ? `<span class="recommended-badge">
                        ⭐ Nearest
                   </span>`

                : "";


        const card = `

            <div class="center-card nearby-center-card">

                <div class="center-header">

                    <div>

                        <h3>
                            🌾 ${center.name}
                        </h3>

                        <p>
                            📍 ${center.city},
                            Uttar Pradesh
                        </p>

                    </div>

                    ${recommendedBadge}

                </div>


                <div class="distance-box">

                    <span>
                        📍 Distance
                    </span>

                    <strong>
                        ${center.distance.toFixed(1)} km
                    </strong>

                </div>


                <div class="center-info">

                    <p>
                        🌾 Crop:
                        <strong>
                            ${center.crop}
                        </strong>
                    </p>

                    <p>
                        👨‍🌾 Farmers Waiting:
                        <strong>
                            ${center.waiting}
                        </strong>
                    </p>

                    <p>
                        ⏱️ Estimated Wait:
                        <strong>
                            ${center.waitTime} min
                        </strong>
                    </p>

                    <p>
                        🎟️ Available Slots:
                        <strong>
                            ${center.slots}
                        </strong>
                    </p>

                </div>


                <div class="center-bottom">

                    <span class="crowd-badge ${crowdClass}">

                        ● ${crowdText}

                    </span>

                </div>


                <div class="center-actions">

                    <button
                        class="direction-btn"
                        onclick="openDirections(
                            ${center.latitude},
                            ${center.longitude}
                        )"
                    >

                        🗺️ Directions

                    </button>


                    <button
                        class="book-btn"
                        onclick="openBooking(
                            '${center.name}'
                        )"
                    >

                        Book Slot

                    </button>

                </div>

            </div>

        `;


        container.innerHTML += card;

    });

}



// Open Google Maps directions

function openDirections(latitude, longitude) {

    const mapsUrl =
        "https://www.google.com/maps/dir/?api=1&destination=" +
        latitude +
        "," +
        longitude;


    window.open(
        mapsUrl,
        "_blank"
    );

}
