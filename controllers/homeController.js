module.exports.index = (request, response) => {
    response.send("Главная страница");
};
module.exports.about = (request, response) => {
    response.send("О сайте");
};
