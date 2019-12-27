//Replace ./data.json with your JSON feed
fetch('./data.json'
.then(response => {
    return response.json()
})
.then(data => {
    console.log(data)
})
.catch(error => {

})

//begin accessing JSON data here
var data = JSON.parse(this.response)

data.forEACH(movie => {
    //Log each movie.title
    console.log(movie.title)
})
} else {
    console.log('error')
}
}
