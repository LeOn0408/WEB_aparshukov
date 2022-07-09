import ServerInfo from "./serverinfo.js";
import Roadmap from "./roadmap.js";

const aside = document.querySelector("aside");

loadServerInfo();
roadmapLoad();
loadFeedback();

function loadFeedback() {
    const divFeedback = document.createElement("div");
    divFeedback.setAttribute("class", "feedback");
    divFeedback.setAttribute("style", "text-align:center;");
    divFeedback.innerHTML = '<a href="https://ark.aparshukov.ru/feedback" style="color: #ffffff;"><b>ОБРАТНАЯ СВЯЗЬ</b></a>';
    aside.appendChild(divFeedback);
}
function loadServerInfo() {
    const serverInfo = new ServerInfo();
    const divServerInfo = document.createElement("div");
    divServerInfo.setAttribute("class", "serverInfo");
    aside.appendChild(divServerInfo);

    serverInfo.render(divServerInfo);
    
}
function roadmapLoad() {
    const roadmapInfo = new Roadmap();
    const divRoadmap = document.createElement("div");
    divRoadmap.setAttribute("class", "roadmap");
    aside.appendChild(divRoadmap);

    roadmapInfo.render(divRoadmap);
}
