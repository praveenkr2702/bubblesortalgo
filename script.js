document.addEventListener('DOMContentLoaded', () => {
    const tags = ["Java", "Data Structures", "Algorithms", "Problem Solving"];
    const tagsContainer = document.getElementById('tags');
    tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = "px-4 py-2 border border-zinc-800 rounded-lg text-zinc-400";
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });

    const marqueeContent = [...Array(20)].map(() => 
        '<span class="text-black text-2xl font-bold mx-4">BUBBLESORTALGO</span>'
    ).join('');
    document.getElementById('marquee1').innerHTML = marqueeContent;
    document.getElementById('marquee2').innerHTML = marqueeContent;

    const cards = [
        {
            number: "01",
            title: "Java Fundamentals",
            description: "Start with basics: syntax, OOP concepts, collections, and advanced Java features. Perfect for beginners.",
            highlight: true,
        },
        {
            number: "02",
            title: "Data Structures",
            description: "Deep dive into Arrays, LinkedLists, Trees, Graphs, and Hash Tables with practical implementations.",
        },
        {
            number: "03",
            title: "Algorithms",
            description: "Master sorting, searching, dynamic programming, and graph algorithms with step-by-step explanations.",
        },
        {
            number: "04",
            title: "Problem Solving",
            description: "Practice with 100+ carefully selected coding problems to strengthen your algorithmic thinking.",
        },
    ];

    const cardsContainer = document.getElementById('cards');
    cards.forEach(card => {
        const div = document.createElement('div');
        div.className = `p-6 rounded-3xl relative ${
            card.highlight ? "bg-[#CEFF00] text-black" : "bg-zinc-900"
        }`;
        div.innerHTML = `
            <span class="text-4xl font-bold opacity-50">${card.number}</span>
            <h3 class="text-xl font-bold mt-4 mb-2">${card.title}</h3>
            <p class="text-sm opacity-70">${card.description}</p>
            <div class="mt-4 px-4 py-2 rounded-full border border-current inline-flex items-center gap-2 text-sm">
                ${card.highlight ? "Starting Soon" : "Coming Soon"}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
            </div>
        `;
        cardsContainer.appendChild(div);
    });
});