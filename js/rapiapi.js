    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '31e8a32db7msha1c04eac8c6a471p11a3e0jsnd738db60ddf1',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));