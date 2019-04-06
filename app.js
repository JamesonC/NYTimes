

$(`#searchBtn`).click(function() {

    var term = $(`#search-term`).val();
    var records = $(`#records-num`).val();
    var startYear = $(`#startYear`).val();
    var endYear = $(`#endYear`).val();

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&page=0&api-key=K7AMSLppGFGkmEUIXLhtqpWxfSfSzn8E";

    function showArticles(obj) {
        return 
        `
        <div>
            <h1>${obj.response.docs.headline.main}</h1>
            <p>${obj.response.docs.pup_date}<p>
            <p>${obj.response.docs.snippet}<p>
        </div>
        `
    }

    // id = results

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {

        event.preventDefault();
          console.log(showArticles(response));
          console.log(response.ShowArticles);

        $(`#results`).html(showArticles(response))

      });

});