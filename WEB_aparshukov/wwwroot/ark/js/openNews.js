var paramsString = document.location.search;
var searchParams = new URLSearchParams(paramsString);
const  id = searchParams.get("id");
const content = document.querySelector("div.content");
render();


async function render() {
    const response = await fetch("/api/news/"+id, {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    if (response.ok === true) {
        const newsContent = await response.json();
        createNewsBlock(newsContent);
        

    }
    else console("недоступно");

}
function createNewsBlock(newsContent) {
    const title = document.createElement("h1");
    title.setAttribute("style", "font-size: 20pt; font-family: monospace; margin: 30px; color: #ffffff");
    title.innerHTML = newsContent.title;
    content.appendChild(title);

    const newsDesc = document.createElement("section");
    newsDesc.setAttribute("style", "margin:30px");
    newsDesc.innerHTML = newsContent.description;
    content.appendChild(newsDesc);

    const chapter = document.createElement("section");
    chapter.setAttribute("class", "footer-news");
    chapter.innerHTML = "Раздел: Новости";//TODO: реалтзовать
    content.appendChild(chapter);

    const author = document.createElement("section");
    author.setAttribute("class", "footer-news");
    author.innerHTML = newsContent.name;
    content.appendChild(author);

    const dateNews = document.createElement("section");
    dateNews.setAttribute("class", "footer-news");
    let date = new Date(newsContent.dateNew);
    let dateStr = date.toLocaleDateString();
    dateNews.innerHTML = dateStr;
    content.appendChild(dateNews);
}