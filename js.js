async function fetchp() {
    const a = document.getElementById("f")
    const o = document.getElementById("d")
    const name = document.getElementById("c")
    let stuff = document.getElementById("stuff")
    var ask = stuff.value.toLowerCase()
    const pic = document.getElementById("pic")
    const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${ask}`)
    let b = "err.png"
    if(!poke.ok){
        pic.src = b
    }
    else{
        const data = await poke.json()
        const pics = await data.sprites.front_default
        pic.src = pics
        name.textContent = ask
        const ab = data.abilities.map(ability => ability.ability.name).join(", ")
        o.textContent = ab
        a.textContent = "Ability's"
        //localStorage.pokemon =ask
        //var used = localStorage.pokemon
        //console.log(used)
        //stuff.ariaPlaceholder = used
    }
}