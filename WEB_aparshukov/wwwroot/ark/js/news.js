class News {
    #rows
    constructor() {
    }
    async render() {
        const response = await fetch("/api/news", {
            method: "GET",
            headers: { "Accept": "application/json" }
        });
        if (response.ok === true) {
            const news = await response.json();
            
            for (let i = 0; i < news.length; i++) {
                if (i == 0) {
                    const first = document.querySelector("div#first-content");
                    const a = document.createElement("a");
                    a.setAttribute("class", 'first-news');
                    this.#createNewsBlock(news[i], a);
                    first.appendChild(a);
                }
                else {
                    const other = document.querySelector("div#content-gen");
                    const a = document.createElement("a");
                    a.setAttribute("class", 'other-news');
                    this.#createNewsBlock(news[i], a);
                    other.appendChild(a);
                }
                
            }
            
        }
        
    }
    #createNewsBlock(newsContent, a) {
        a.setAttribute("href", `./news?id=${newsContent.id}`);
        a.setAttribute("newsId", `${newsContent.id}`);
        const description = document.createElement("div");
        description.setAttribute("style", "height: 90%; overflow: hidden; color:#ffffff");
        description.innerHTML = `<h1>${newsContent.title}</h1>${newsContent.description}`;
        const dateDiv = document.createElement("div");
        dateDiv.setAttribute("style", "padding: 5px; text-align: right; color:#ffffff");
        let date = new Date(newsContent.dateNew);
        let dateStr = date.toLocaleDateString();
        dateDiv.append(dateStr);
        a.appendChild(description);
        a.appendChild(dateDiv);
    }
}

let news = new News();
news.render();

