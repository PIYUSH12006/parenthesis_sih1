// language.js
// KisanSetu English <-> Hindi Language System

const translations = {
    en: {
        // Sidebar
        "Dashboard": "Dashboard",
        "My Booking": "My Booking",
        "Live Queue": "Live Queue",
        "Procurement Tracking": "Procurement Tracking",
        "Notifications": "Notifications",
        "Back to Home": "Back to Home",
        "Logout": "Logout",

        // Dashboard
        "Good Morning, Ramesh 👋": "Good Morning, Ramesh 👋",
        "Here is your procurement overview for today.":
            "Here is your procurement overview for today.",

        "My Token": "My Token",
        "Estimated Waiting": "Estimated Waiting",
        "Crop": "Crop",
        "Status": "Status",

        // Booking
        "📅 My Procurement Booking": "📅 My Procurement Booking",
        "Confirmed": "Confirmed",
        "Procurement Center": "Procurement Center",
        "Date": "Date",
        "Time Slot": "Time Slot",
        "Crop Quantity": "Crop Quantity",
        "Change Slot": "Change Slot",

        // Queue
        "● LIVE QUEUE": "● LIVE QUEUE",
        "Your Position": "Your Position",
        "Currently Serving": "Currently Serving",
        "farmers ahead of you": "farmers ahead of you",
        "⏱️ Estimated:": "⏱️ Estimated:",

        // Procurement status
        "📦 Procurement Status": "📦 Procurement Status",
        "Track your crop procurement journey.":
            "Track your crop procurement journey.",
        "Slot Booked": "Slot Booked",
        "Booking confirmed": "Booking confirmed",
        "Arrived": "Arrived",
        "Arrival registered": "Arrival registered",
        "Verification": "Verification",
        "Crop quality check": "Crop quality check",
        "Weight": "Weight",
        "Pending": "Pending",
        "Payment": "Payment",

        // Notifications
        "🔔 Recent Notifications": "🔔 Recent Notifications",
        "Your turn is approaching!": "Your turn is approaching!",
        "Please reach the procurement center within 30 minutes.":
            "Please reach the procurement center within 30 minutes.",
        "Crop verification started": "Crop verification started",
        "Your wheat is currently being verified.":
            "Your wheat is currently being verified.",

        // Procurement tracking
        "SMART PROCUREMENT MANAGEMENT":
            "SMART PROCUREMENT MANAGEMENT",
        "Procurement Tracking & Payment":
            "Procurement Tracking & Payment",
        "Track your token, crop verification, weighing, payable amount and payment status from one place.":
            "Track your token, crop verification, weighing, payable amount and payment status from one place.",
        "Procurement ID": "Procurement ID",
        "Track": "Track",
        "📦 Procurement Summary": "📦 Procurement Summary",
        "In Progress": "In Progress",
        "Farmer": "Farmer",
        "Quantity": "Quantity",
        "Center": "Center",
        "Token": "Token",
        "Slot": "Slot",

        "💰 Payment": "💰 Payment",
        "Processing": "Processing",
        "Net Payable": "Net Payable",
        "Rate": "Rate",
        "Method": "Method",
        "Payment ID": "Payment ID",
        "Expected": "Expected",
        "🧾 Download Receipt": "🧾 Download Receipt",

        "🔄 Live Procurement Timeline":
            "🔄 Live Procurement Timeline",
        "Last updated just now": "Last updated just now",

        "🎟️ Digital Token": "🎟️ Digital Token",
        "● LIVE": "● LIVE",
        "Farmers Ahead": "Farmers Ahead",
        "Estimated Wait": "Estimated Wait",

        "💳 Payment Processing": "💳 Payment Processing",

        // Admin
        "ADMIN CONTROL PANEL": "ADMIN CONTROL PANEL",
        "Update Procurement": "Update Procurement",
        "Change the procurement stage and payment state. Changes are stored in this browser for the SIH demo.":
            "Change the procurement stage and payment state. Changes are stored in this browser for the SIH demo.",
        "Reset Demo": "Reset Demo",
        "🔧 Procurement Stage": "🔧 Procurement Stage",
        "Stage": "Stage",
        "Quality": "Quality",
        "Actual Quantity (Quintals)": "Actual Quantity (Quintals)",
        "Rate (₹ / Quintal)": "Rate (₹ / Quintal)",
        "Save Procurement Update": "Save Procurement Update",
        "💸 Payment Control": "💸 Payment Control",
        "Payment Method": "Payment Method",
        "Payment Status": "Payment Status",
        "Transaction / Payment ID": "Transaction / Payment ID",
        "Update Payment": "Update Payment",
        "📋 Procurement Record": "📋 Procurement Record",
        "Field": "Field",
        "Value": "Value",
        "👨‍🌾 Farmer View": "👨‍🌾 Farmer View",
        "🏢 Admin View": "🏢 Admin View"
    },

    hi: {
        // Sidebar
        "Dashboard": "डैशबोर्ड",
        "My Booking": "मेरी बुकिंग",
        "Live Queue": "लाइव कतार",
        "Procurement Tracking": "खरीद की स्थिति",
        "Notifications": "सूचनाएं",
        "Back to Home": "होम पर वापस जाएं",
        "Logout": "लॉग आउट",

        // Dashboard
        "Good Morning, Ramesh 👋": "सुप्रभात, रमेश 👋",
        "Here is your procurement overview for today.":
            "आज की आपकी खरीद से संबंधित जानकारी यहां दी गई है।",

        "My Token": "मेरा टोकन",
        "Estimated Waiting": "अनुमानित प्रतीक्षा",
        "Crop": "फसल",
        "Status": "स्थिति",

        // Booking
        "📅 My Procurement Booking": "📅 मेरी खरीद बुकिंग",
        "Confirmed": "पुष्टि हो गई",
        "Procurement Center": "खरीद केंद्र",
        "Date": "तारीख",
        "Time Slot": "समय",
        "Crop Quantity": "फसल की मात्रा",
        "Change Slot": "समय बदलें",

        // Queue
        "● LIVE QUEUE": "● लाइव कतार",
        "Your Position": "आपकी स्थिति",
        "Currently Serving": "अभी सेवा दी जा रही है",
        "farmers ahead of you": "किसान आपसे आगे हैं",
        "⏱️ Estimated:": "⏱️ अनुमानित:",

        // Procurement status
        "📦 Procurement Status": "📦 खरीद की स्थिति",
        "Track your crop procurement journey.":
            "अपनी फसल की खरीद की पूरी स्थिति देखें।",
        "Slot Booked": "समय बुक किया गया",
        "Booking confirmed": "बुकिंग की पुष्टि हो गई",
        "Arrived": "केंद्र पर पहुंचे",
        "Arrival registered": "आगमन दर्ज हो गया",
        "Verification": "जांच",
        "Crop quality check": "फसल की गुणवत्ता की जांच",
        "Weight": "वजन",
        "Pending": "लंबित",
        "Payment": "भुगतान",

        // Notifications
        "🔔 Recent Notifications": "🔔 हाल की सूचनाएं",
        "Your turn is approaching!": "आपकी बारी आने वाली है!",
        "Please reach the procurement center within 30 minutes.":
            "कृपया 30 मिनट के अंदर खरीद केंद्र पर पहुंचें।",
        "Crop verification started": "फसल की जांच शुरू हो गई है",
        "Your wheat is currently being verified.":
            "आपकी गेहूं की फसल की अभी जांच की जा रही है।",

        // Procurement tracking
        "SMART PROCUREMENT MANAGEMENT":
            "स्मार्ट खरीद प्रबंधन",
        "Procurement Tracking & Payment":
            "खरीद की स्थिति और भुगतान",
        "Track your token, crop verification, weighing, payable amount and payment status from one place.":
            "अपने टोकन, फसल की जांच, वजन, भुगतान राशि और भुगतान की स्थिति एक ही जगह देखें।",
        "Procurement ID": "खरीद आईडी",
        "Track": "देखें",
        "📦 Procurement Summary": "📦 खरीद का सारांश",
        "In Progress": "प्रक्रिया में",
        "Farmer": "किसान",
        "Quantity": "मात्रा",
        "Center": "केंद्र",
        "Token": "टोकन",
        "Slot": "समय",

        "💰 Payment": "💰 भुगतान",
        "Processing": "प्रक्रिया में",
        "Net Payable": "कुल भुगतान राशि",
        "Rate": "दर",
        "Method": "तरीका",
        "Payment ID": "भुगतान आईडी",
        "Expected": "अपेक्षित",
        "🧾 Download Receipt": "🧾 रसीद डाउनलोड करें",

        "🔄 Live Procurement Timeline":
            "🔄 लाइव खरीद प्रक्रिया",
        "Last updated just now": "अभी अपडेट किया गया",

        "🎟️ Digital Token": "🎟️ डिजिटल टोकन",
        "● LIVE": "● लाइव",
        "Farmers Ahead": "आगे किसान",
        "Estimated Wait": "अनुमानित प्रतीक्षा",

        "💳 Payment Processing": "💳 भुगतान प्रक्रिया",

        // Admin
        "ADMIN CONTROL PANEL": "व्यवस्थापक नियंत्रण पैनल",
        "Update Procurement": "खरीद अपडेट करें",
        "Change the procurement stage and payment state. Changes are stored in this browser for the SIH demo.":
            "खरीद की स्थिति और भुगतान की जानकारी बदलें। ये बदलाव इस ब्राउज़र में SIH डेमो के लिए सेव किए जाते हैं।",
        "Reset Demo": "डेमो रीसेट करें",
        "🔧 Procurement Stage": "🔧 खरीद चरण",
        "Stage": "चरण",
        "Quality": "गुणवत्ता",
        "Actual Quantity (Quintals)": "वास्तविक मात्रा (क्विंटल)",
        "Rate (₹ / Quintal)": "दर (₹ / क्विंटल)",
        "Save Procurement Update": "खरीद अपडेट सेव करें",
        "💸 Payment Control": "💸 भुगतान नियंत्रण",
        "Payment Method": "भुगतान का तरीका",
        "Payment Status": "भुगतान की स्थिति",
        "Transaction / Payment ID": "लेनदेन / भुगतान आईडी",
        "Update Payment": "भुगतान अपडेट करें",
        "📋 Procurement Record": "📋 खरीद रिकॉर्ड",
        "Field": "फ़ील्ड",
        "Value": "मान",
        "👨‍🌾 Farmer View": "👨‍🌾 किसान दृश्य",
        "🏢 Admin View": "🏢 व्यवस्थापक दृश्य"
    }
};


// Change website language
function setLanguage(language) {

    localStorage.setItem("kisanSetuLanguage", language);

    document.documentElement.lang = language === "hi" ? "hi" : "en";

    // Translate normal text nodes
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT
    );

    const textNodes = [];

    while (walker.nextNode()) {
        textNodes.push(walker.currentNode);
    }

    textNodes.forEach(node => {

        const originalText = node.textContent.trim();

        if (!originalText) return;

        const translatedText =
            translations[language][originalText];

        if (translatedText) {
            node.textContent =
                node.textContent.replace(
                    originalText,
                    translatedText
                );
        }
    });

    // Translate placeholders
    document.querySelectorAll("[placeholder]").forEach(element => {

        const placeholder = element.getAttribute("placeholder");

        if (translations[language][placeholder]) {
            element.setAttribute(
                "placeholder",
                translations[language][placeholder]
            );
        }
    });

    // Update language button
    const languageButton =
        document.getElementById("languageButton");

    if (languageButton) {
        languageButton.textContent =
            language === "hi"
                ? "🌐 English"
                : "🌐 हिंदी";
    }
}


// Toggle between English and Hindi
function toggleLanguage() {

    const currentLanguage =
        localStorage.getItem("kisanSetuLanguage") || "en";

    const newLanguage =
        currentLanguage === "en" ? "hi" : "en";

    setLanguage(newLanguage);
}


// Load saved language
document.addEventListener("DOMContentLoaded", () => {

    const savedLanguage =
        localStorage.getItem("kisanSetuLanguage") || "en";

    setLanguage(savedLanguage);
});
