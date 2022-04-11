$(function () {
    var pokemonSearch
    var defaultPokemon = '1'
    var defaultPokemonData

    var initFunc = function () {
        // https://pokeapi.co/api/v2/pokemon/?limit=898
        defaultPokemonData = $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/" + defaultPokemon,
            method: "GET",
        })

        defaultPokemonData.done(function (data) {
            defaultPokemonData = data
            $('.loading-container').removeClass('active')
            $('.pokedex h3').text(data.name.toUpperCase())
            $('.poke-img img').attr('src', data.sprites.front_default)
            // console.log(data)
        })

        defaultPokemonData.fail(function (jqXHR, textStatus, error) {
            alert("Request failed: " + textStatus + ' ' + error)
        })
    }

    initFunc()

    $('.btn1').on('click', function () {
        pokemonSearch = $('.pokedex input[type="text"]').val()

        var request = $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/" + pokemonSearch,
            method: "GET"
        })

        request.done(function (data) {
            $('.pokedex h3').text(data.id + ": " + data.name.toUpperCase())
            $('.poke-img img').attr('src', data.sprites.front_default)
            $('.pokename').val('')
            // $('.pokename').text()

        })

        request.fail(function (jqXHR, textStatus, error) {
            alert("Request failed: " + textStatus + ' ' + error)
        })

    })

    $('.btn2').on('click', function () {
        $('.scroll').addClass('active')
        out = $('.pokedex input[type="text"]').val()

        var request = $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/?limit=898",
            method: "GET"
        })

        request.done(function (data) {
            let mylist = '';
            for (x in data.results) {
                y = parseInt(x) + 1
                mylist += '<option value="' + data.results[x].url + '">' +
                y + ": " + data.results[x].name + '</option>'
            }
            $('.output').append(mylist)
        })

        request.fail(function (jqXHR, textStatus, error) {
            alert("Request failed: " + textStatus + ' ' + error)
        })

    })

    $('.btn3').on('click', function (e) {
        e.preventDefault()
        poke = $('select').val()
        var request = $.ajax({
            url: poke,
            method: "GET"
        })
        console.log(request)

        request.done(function (data) {
            console.table(data)
            $('.pokedex h3').text(data.id + ": " + data.name.toUpperCase())
            $('.poke-img img').attr('src', data.sprites.front_default)
            $('.pokename').val('')

        })

        request.fail(function (jqXHR, textStatus, error) {
            alert("Request failed: " + textStatus + ' ' + error)
        })
    })


    //     pokemonSearch = $('.pokedex input[type="text"]').val()



    // })

})