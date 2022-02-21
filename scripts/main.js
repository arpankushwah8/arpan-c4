async function apiCall(url) {
    try {

        let res = await fetch(url)
        let data =await res.json()
        return data;
       

        
    } catch (error) {
        console.log("error:",error);
        
    }


    //add api call logic here


}

function appendArticles(articles, main) {
    
// let parentme = document.getElementById('main');
    articles.forEach(element => {
        console.log(articles,main)
        let div = document.createElement('div')
        let news = document.createElement('news')
        news.src = element.urlToImage;
        let p = document.createElement('p')
        p.innerText = element.description;
        div.append(news,p);

        
    main.append(div);
        

        
    });

   

    //add append logic here

}

export { apiCall, appendArticles }