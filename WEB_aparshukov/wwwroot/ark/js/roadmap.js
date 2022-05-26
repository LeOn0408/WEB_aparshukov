export default class Roadmap {
    #rows
    constructor() {
    }
    async render(divRoadmap) {
        const response = await fetch("/api/roadmap", {
            method: "GET",
            headers: { "Accept": "application/json" }
        });
        if (response.ok === true) {
            const roadmaps = await response.json();
            const ul = document.createElement("ul");

            roadmaps.forEach(roadmap => {
                let date = new Date(roadmap.releaseDate);
                let dateStr = date.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long' });
                const li = document.createElement("li");
                li.innerHTML = `<b>${dateStr}</b></br>${roadmap.name}`;
                ul.appendChild(li);
            });
            divRoadmap.appendChild(ul);
        }
    }
}
