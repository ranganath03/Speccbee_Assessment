const speakers = [
    {
        name: "John Doe",
        title: "Chief Marketing Officer",
        company: "Acme Corp",
        description: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
        image: "./Images/speaker1.png"
    },
    {
        name: "John Doe",
        title: "Chief Engagement Officer",
        company: "Acquia",
        description: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
        image: "./Images/speaker2.png"
    },
    {
        name: "John Doe",
        title: "Chief Technical Developer",
        company: "Pantheon",
        description: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
        image: "./Images/speaker3.png"
    },
    {
        name: "John Doe",
        title: "Chief Marketing Officer",
        company: "Specbee",
        description: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
        image: "./Images/speaker4.png"
    }
];

function openPopup(index) {
    const speaker = speakers[index];
    document.getElementById("popup-name").innerText = speaker.name;
    document.getElementById("popup-title").innerText = speaker.title;
    document.getElementById("popup-company").innerText = speaker.company;
    document.getElementById("popup-description").innerText = speaker.description;
    document.getElementById("popup-image").src = speaker.image;

    document.getElementById("speaker-popup").style.display = "block";
}

function closePopup() {
    document.getElementById("speaker-popup").style.display = "none";
}

document.querySelectorAll('.speaker').forEach((element, index) => {
    element.addEventListener('click', () => openPopup(index));
});
