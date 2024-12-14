
// Sub-diseases for each category
const subDiseases = {
    disease1: ["Interna Medicine","Family Medicine","Pediatrics"],
    disease2: ["General Surgery", "Neurosurgery", "Orthopedic Surgery"],
    disease3: ["Radiology", "Pathology", "Nuclear Medicine"],
    disease4: ["Cardiology", "Gastroenterology", "Pulmonology"],
    disease5: ["Emergency Medicine", "Trauma Surgery", "Critical Care Medicine"],
    disease6: ["Epidemiology", "Occupational Medicine", "Environmental Health"],
    disease7: ["Dermatology", "Psychiatry", "Neurology"],
    disease8: ["Telemedicine", "Geriatrics", "Medical Informatics"],
};

// Function to update sub-diseases dropdown
function updateSubDiseases() {
    const categorySelect = document.getElementById("disease-select");
    const subDiseaseSelect = document.getElementById("sub-disease-select");
    const selectedCategory = categorySelect.value;

    // Clear existing sub-disease options
    subDiseaseSelect.innerHTML = "";

    if (subDiseases[selectedCategory]) {
        // Populate sub-diseases
        subDiseases[selectedCategory].forEach((subDisease) => {
            const option = document.createElement("option");
            option.value = subDisease;
            option.textContent = subDisease;
            subDiseaseSelect.appendChild(option);
        });
        // Show sub-disease dropdown
        subDiseaseSelect.parentElement.classList.remove("hidden");
    } else {
        // Hide the sub-disease dropdown if no sub-diseases exist
        subDiseaseSelect.parentElement.classList.add("hidden");
    }
}
document.getElementById('hmbtn').addEventListener('click', function() {
    setTimeout(() => {
        window.location.href = 'index.html'; // Redirects to the home page (root URL)
    },700);
});
document.getElementById('bkbtn').addEventListener('click', function() {
    setTimeout(() => {
        window.location.href = 'index.html'; // Redirects to the home page (root URL)
    },700);
});
const items = [
    "General Medical Specialties",
    "Surgical Specialties",
    "Diagnostic and Imaging Specialties",
    "Organ/System-Specific Specialties",
    "Emergency and Critical Care",
    "Public Health and Preventative Medicine",
    "Specialty Medicine",
    "Emerging and Niche Fields"
];

function filterItems() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (input) {
        const filteredItems = items.filter(item => item.toLowerCase().includes(input));
        
        if (filteredItems.length > 0) {
            resultsContainer.classList.remove('hidden');
            filteredItems.forEach(item => {
                const div = document.createElement('div');
                div.textContent = item;
                div.onclick = () => selectItem(item); // Add click event to select item
                resultsContainer.appendChild(div);
            });
        } else {
            resultsContainer.classList.add('hidden');
        }
    } else {
        resultsContainer.classList.add('hidden');
    }
}

function selectItem(item) {
    document.getElementById('search-input').value = item; // Set input value to selected item
    document.getElementById('search-results').classList.add('hidden'); // Hide results
}

  