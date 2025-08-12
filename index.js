const selectMessage = () => {
    const affirmations = [
        "I have a beautiful smile",
        "I have a brilliant mind",
        "I am good and and getting better",
        "I am loved and worthy",
        "I am optimistic because today is a new day",
        "I am peaceful and whole",
        "I am safe and surrounded by love and support",
        "I love myself",
        "I am valued and helpful",
        "I am well-rested and excited for the day",
        "I am worthy of investing in myself",
        "I deserve self respect and a clean space",
        "I do all things in love",
        "I do not rush through my life, I temper speed with stillness",
        "I embrace change and rise to the new opportunity it presents",
        "I am going further and learning along the way",
        "I love what I love",
        "I release the fears that do not serve me"
    ];

    const index = Math.floor(Math.random() * affirmations.length);
    return affirmations[index];
};

const newAffirmation = () => {
    const textElement = document.querySelector(".affirmation-text");

    // Add fade-out class (sets opacity to 0)
    textElement.classList.add("fade-out");

    // Wait for fade-out to finish before changing
    setTimeout(() => {
        textElement.textContent = selectMessage();
        textElement.classList.remove("fade-out");
    }, 500)
};

document.querySelector(".main-button").addEventListener("click", newAffirmation);