// Element Declarations //
const mainImage = document.getElementById('mainImage')
const imageWrapper = document.getElementById('imageWrapper')

const startGameButton = document.getElementById('startGameButton')
const newPokemonButton = document.getElementById('newPokemonButton')
const checkAnswerButton = document.getElementById('checkAnswerButton')

const clueContainer = document.getElementById('clueContainer')
const ToggleCluesButton = document.getElementById('clueButton')
const typeClueButton = document.getElementById('typeClue')
const cryClueButton = document.getElementById('cryClue')
const typeClueText = document.getElementById('typeText')

const checkboxContainer = document.getElementById('checkboxContainer')
const gen1Checkbox = document.getElementById('gen1Checkbox')
const gen2Checkbox = document.getElementById('gen2Checkbox')
const gen3Checkbox = document.getElementById('gen3Checkbox')
const gen4Checkbox = document.getElementById('gen4Checkbox')
const checkboxWarning = document.getElementById('checkboxWarning')

const scoreText = document.getElementById('scoreText')
const userTextInput = document.getElementById('userTextInput')
const resultDisplay = document.getElementById('resultDisplay')

const soundBite = document.getElementById('soundBite')
const pokemonCry = document.getElementById('pokemonCry')

const printButton = document.getElementById('printButton')


// PokemonData Array //
const PokemonData = [
    {dex: '001', name: 'bulbasaur', image: 'pokemon-images/bulbasaur-img.png', type: 'grass / poison', cry: 'audio/pokemon-cries/cries_bulbasaur.ogg'},     // 00
    {dex: '006', name: 'charizard', image: 'pokemon-images/charizard-img.png', type: 'fire / flying', cry: 'audio/pokemon-cries/cries_charizard.ogg'},      // 01
    {dex: '007', name: 'squirtle', image: 'pokemon-images/squirtle-img.png', type: 'water', cry: 'audio/pokemon-cries/cries_squirtle.ogg'},                 // 02
    {dex: '024', name: 'arbok', image: 'pokemon-images/arbok-img.png', type: 'poison', cry: 'audio/pokemon-cries/cries_arbok.ogg'},                         // 03
    {dex: '025', name: 'pikachu', image: 'pokemon-images/pikachu-img.png', type: 'electric', cry: 'audio/pokemon-cries/cries_pikachu.ogg'},                 // 04
    {dex: '039', name: 'jigglypuff', image: 'pokemon-images/jigglypuff-img.png', type: 'normal / fairy', cry: 'audio/pokemon-cries/cries_jigglypuff.ogg'},  // 05
    {dex: '078', name: 'rapidash', image: 'pokemon-images/rapidash-img.png', type: 'fire', cry: 'audio/pokemon-cries/cries_rapidash.ogg'},                  // 06
    {dex: '099', name: 'kingler', image: 'pokemon-images/kingler-img.png', type: 'water', cry: 'audio/pokemon-cries/cries_kingler.ogg'},                    // 07
    {dex: '131', name: 'lapras', image: 'pokemon-images/lapras-img.png', type: 'water / ice', cry: 'audio/pokemon-cries/cries_lapras.ogg'},                 // 08
    {dex: '143', name: 'snorlax', image: 'pokemon-images/snorlax-img.png', type: 'normal', cry: 'audio/pokemon-cries/cries_snorlax.ogg'},                   // 09

    //{dex: '039', name:'jigglypuff from above', image:'pokemon-images/jigglypuff-from-above-img.png', type:'electric', cry:'audio/pokemon-cries/cries_voltorb.ogg'},

    {dex: '154', name: 'meganium', image: 'pokemon-images/meganium-img.png', type: 'grass', cry: 'audio/pokemon-cries/cries_meganium.ogg'},                 // 10
    {dex: '155', name: 'cyndaquil', image: 'pokemon-images/cyndaquil-img.png', type: 'fire', cry: 'audio/pokemon-cries/cries_cyndaquil.ogg'},               // 11
    {dex: '158', name: 'totodile', image: 'pokemon-images/totodile-img.png', type: 'water', cry: 'audio/pokemon-cries/cries_totodile.ogg'},                 // 12
    {dex: '163', name: 'hoothoot', image: 'pokemon-images/hoothoot-img.png', type: 'normal / flying', cry: 'audio/pokemon-cries/cries_hoothoot.ogg'},       // 13
    {dex: '175', name: 'togepi', image: 'pokemon-images/togepi-img.png', type: 'fairy', cry: 'audio/pokemon-cries/cries_togepi.ogg'},                       // 14
    {dex: '185', name: 'sudowoodo', image: 'pokemon-images/sudowoodo-img.png', type: 'rock', cry: 'audio/pokemon-cries/cries_sudowoodo.ogg'},               // 15
    {dex: '194', name: 'wooper', image: 'pokemon-images/wooper-img.png', type: 'water / ground', cry: 'audio/pokemon-cries/cries_wooper.ogg'},              // 16
    {dex: '202', name: 'wobbuffet', image: 'pokemon-images/wobbuffet-img.png', type: 'psychic', cry: 'audio/pokemon-cries/cries_wobbuffet.ogg'},            // 17
    {dex: '208', name: 'steelix', image: 'pokemon-images/steelix-img.png', type: 'steel / ground', cry: 'audio/pokemon-cries/cries_steelix.ogg'},           // 18
    {dex: '249', name: 'lugia', image: 'pokemon-images/lugia-img.png', type: 'psychic / flying', cry: 'audio/pokemon-cries/cries_lugia.ogg'},               // 19

    {dex: '253', name: 'grovyle', image: 'pokemon-images/grovyle-img.png', type: 'grass', cry: 'audio/pokemon-cries/cries_grovyle.ogg'},                    // 20
    {dex: '255', name: 'torchic', image: 'pokemon-images/torchic-img.png', type: 'fire', cry: 'audio/pokemon-cries/cries_torchic.ogg'},                     // 21
    {dex: '258', name: 'mudkip', image: 'pokemon-images/mudkip-img.png', type: 'water', cry: 'audio/pokemon-cries/cries_mudkip.ogg'},                       // 22
    {dex: '296', name: 'makuhita', image: 'pokemon-images/makuhita-img.png', type: 'fighting', cry: 'audio/pokemon-cries/cries_makuhita.ogg'},              // 23
    {dex: '306', name: 'aggron', image: 'pokemon-images/aggron-img.png', type: 'steel / rock', cry: 'audio/pokemon-cries/cries_aggron.ogg'},                // 24
    {dex: '309', name: 'electrike', image: 'pokemon-images/electrike-img.png', type: 'electric', cry: 'audio/pokemon-cries/cries_electrike.ogg'},           // 25
    {dex: '319', name: 'sharpedo', image: 'pokemon-images/sharpedo-img.png', type: 'water / dark', cry: 'audio/pokemon-cries/cries_sharpedo.ogg'},          // 26
    {dex: '322', name: 'numel', image: 'pokemon-images/numel-img.png', type: 'fire / ground', cry: 'audio/pokemon-cries/cries_numel.ogg'},                  // 27
    {dex: '330', name: 'flygon', image: 'pokemon-images/flygon-img.png', type: 'ground / dragon', cry: 'audio/pokemon-cries/cries_flygon.ogg'},             // 28
    {dex: '382', name: 'kyogre', image: 'pokemon-images/kyogre-img.png', type: 'water', cry: 'audio/pokemon-cries/cries_kyogre.ogg'},                       // 29

    {dex: '387', name: 'turtwig', image: 'pokemon-images/turtwig-img.png', type: 'grass', cry: 'audio/pokemon-cries/cries_turtwig.ogg'},                    // 30
    {dex: '391', name: 'monferno', image: 'pokemon-images/monferno-img.png', type: 'fire / fighting', cry: 'audio/pokemon-cries/cries_monferno.ogg'},       // 31
    {dex: '395', name: 'empoleon', image: 'pokemon-images/empoleon-img.png', type: 'water / steel', cry: 'audio/pokemon-cries/cries_empoleon.ogg'},         // 32
    {dex: '398', name: 'staraptor', image: 'pokemon-images/staraptor-img.png', type: 'normal / flying', cry: 'audio/pokemon-cries/cries_staraptor.ogg'},    // 33
    {dex: '403', name: 'shinx', image: 'pokemon-images/shinx-img.png', type: 'electric', cry: 'audio/pokemon-cries/cries_shinx.ogg'},                       // 34
    {dex: '418', name: 'buizel', image: 'pokemon-images/buizel-img.png', type: 'water', cry: 'audio/pokemon-cries/cries_buizel.ogg'},                       // 35
    {dex: '445', name: 'garchomp', image: 'pokemon-images/garchomp-img.png', type: 'dragon / ground', cry: 'audio/pokemon-cries/cries_garchomp.ogg'},       // 36
    {dex: '448', name: 'lucario', image: 'pokemon-images/lucario-img.png', type: 'fighting / steel', cry: 'audio/pokemon-cries/cries_lucario.ogg'},         // 37
    {dex: '479', name: 'rotom', image: 'pokemon-images/rotom-img.png', type: 'electric / ghost', cry: 'audio/pokemon-cries/cries_rotom.ogg'},               // 38
    {dex: '493', name: 'arceus', image: 'pokemon-images/arceus-img.png', type: 'normal', cry: 'audio/pokemon-cries/cries_arceus.ogg'},                      // 39
]

// Variable Declarations //
let currentPokemonIndex = null
let usedPokemon = []
let score = 0
let pokemonToInclude = []
let cluesShowingBool = false
pokemonCry.volume = 0.1

// Event Listeners //
startGameButton.addEventListener('click', StartGame)
newPokemonButton.addEventListener('click', ButtonNewPokemon)
checkAnswerButton.addEventListener('click', () => ButtonCheckAnswer(pokemonToInclude))

ToggleCluesButton.addEventListener('click', ToggleClues)
cryClueButton.addEventListener('click', () => PlayCry(currentPokemonIndex))
typeClueButton.addEventListener('click', () => TypeClue(currentPokemonIndex, pokemonToInclude))

userTextInput.addEventListener('keypress', function (e) 
    {
        if (e.key === 'Enter')
        {
            ButtonCheckAnswer(pokemonToInclude)
        }
    }
)

printButton.addEventListener('click', PrintToConsole)

// Functions //
function StartGame() {
    currentPokemonIndex = null
    usedPokemon = []
    score = 0

    pokemonToInclude = HandleCheckboxes()
    if (pokemonToInclude == 0)
        return null
    else
    checkboxWarning.classList.add("hidden")

    GetRandomPokemon(pokemonToInclude)

    HandleHiddenClass(true)
    PlaySoundBite()
    ClearText()
    scoreText.innerHTML = `Score: ${score}`
}

function FinishGame() {
    HandleHiddenClass(false)
    scoreText.innerHTML = `Your Final Score is ${score}/${usedPokemon.length}`    
}

function HandleCheckboxes() {
    const pokemonToInclude = [];
    const genMapping = [
        { checkbox: gen1Checkbox, range: [0, 10] },  // Gen 1: indices 0 to 9
        { checkbox: gen2Checkbox, range: [10, 20] }, // Gen 2: indices 10 to 19
        { checkbox: gen3Checkbox, range: [20, 30] }, // Gen 3: indices 20 to 29
        { checkbox: gen4Checkbox, range: [30, 40] }, // Gen 3: indices 20 to 29
    ];

    // Iterate over the mapping and add the Pokémon to the list if the checkbox is checked
    genMapping.forEach(gen => {
        if (gen.checkbox.checked) {
            pokemonToInclude.push(...PokemonData.slice(...gen.range));
        }
    });

    // Check if no Pokémon are selected
    if (pokemonToInclude.length === 0) {
        console.log("You need to select at least one generation of Pokémon.");
        checkboxWarning.classList.remove("hidden")
    }

    return pokemonToInclude;
}

function GetRandomPokemon(pokemonToInclude) {   
    // Check if all Pokemon have been used 
    if (usedPokemon.length >= pokemonToInclude.length)
    {
        FinishGame()
        return null
    }

    let randomIndex
    do {
        randomIndex = Math.floor(Math.random() * pokemonToInclude.length)
    } while (randomIndex === currentPokemonIndex || usedPokemon.includes(pokemonToInclude[randomIndex]))

    currentPokemonIndex = randomIndex
    usedPokemon.push(pokemonToInclude[randomIndex])

    mainImage.src = pokemonToInclude[randomIndex].image
    mainImage.classList.add("imageSilhouette")
    newPokemonButton.innerHTML = ("skip pokemon")

    return randomIndex
}

function ButtonNewPokemon() {
    GetRandomPokemon(HandleCheckboxes())
    ClearText()
    HideClues()
    checkAnswerButton.disabled = false
    userTextInput.disabled = false
    checkAnswerButton.classList.remove("disabledButton")
}

function ButtonCheckAnswer(pokemonToInclude)
{
    let userAnswer = userTextInput.value
    CheckAnswer(userAnswer, pokemonToInclude)
}

function CheckAnswer(userAnswer, pokemonToInclude) {
    if (userAnswer === pokemonToInclude[currentPokemonIndex].name )
    {
        resultDisplay.classList.remove("resultIncorrect")
        resultDisplay.classList.add("resultCorrect")
        resultDisplay.innerHTML = `Correct! It's ${pokemonToInclude[currentPokemonIndex].name}!`
        HandleScore(1)
    }
    else
    {
        resultDisplay.classList.remove("resultCorrect")
        resultDisplay.classList.add("resultIncorrect")
        resultDisplay.innerHTML = `Incorrect, It's ${pokemonToInclude[currentPokemonIndex].name}!`
        HandleScore(0)
    }
    mainImage.classList.remove("imageSilhouette")
    newPokemonButton.innerHTML = ("next pokemon")
    checkAnswerButton.disabled = true
    checkAnswerButton.classList.add("disabledButton")
    userTextInput.disabled = true
    // resultDisplay.classList.remove("hidden")
}

function HandleScore(int) {
    score = score + int
    scoreText.innerHTML = `Score: ${score}`
}

function PlaySoundBite() {
    soundBite.play()
}

function ClearText() {
    userTextInput.value = ""
    resultDisplay.innerHTML = ""
    typeClueText.innerHTML = ""
}

function ToggleClues() {
    cluesShowingBool = !cluesShowingBool

    if (cluesShowingBool === true)
    {
        ShowClues()
    }
    else
    {
        HideClues()
    }    
}

function ShowClues() {
    clueContainer.classList.remove("hidden")
    typeClueButton.classList.remove("hidden")
    cryClueButton.classList.remove("hidden")
    ToggleCluesButton.innerHTML = ("hide clues")
    cluesShowingBool = true
}

function HideClues() {
    clueContainer.classList.add("hidden")
    typeClueButton.classList.add("hidden")
    cryClueButton.classList.add("hidden")
    ToggleCluesButton.innerHTML = ("show clues")
    cluesShowingBool = false
}

function PlayCry() {
    pokemonCry.src = pokemonToInclude[currentPokemonIndex].cry
    pokemonCry.play()
}

function TypeClue(currentPokemonIndex, pokemonToInclude) {
    HandleGrammar(pokemonToInclude[currentPokemonIndex].type.charAt(0))
    typeClueText.classList.remove("hidden")
    console.log(pokemonToInclude[currentPokemonIndex].type.charAt(0))
}

function HandleGrammar(firstLetter) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    if (vowels.includes(firstLetter))
        typeClueText.innerHTML = (`This Pokemon is an ${pokemonToInclude[currentPokemonIndex].type} type!`)
    else
        typeClueText.innerHTML = (`This Pokemon is a ${pokemonToInclude[currentPokemonIndex].type} type!`)
}

function HandleHiddenClass(start) {
    if (start === true)
    {
        mainImage.classList.remove("hidden")
        imageWrapper.classList.remove("hidden")
        userTextInput.classList.remove("hidden")
        newPokemonButton.classList.remove("hidden")
        ToggleCluesButton.classList.remove("hidden")
        checkAnswerButton.classList.remove("hidden")
        scoreText.classList.remove("hidden")

        checkboxContainer.classList.add("hidden")
        startGameButton.classList.add("hidden")
    }
    else 
    {
        newPokemonButton.classList.add("hidden")
        mainImage.classList.add("hidden")
        imageWrapper.classList.add("hidden")
        userTextInput.classList.add("hidden")
        checkAnswerButton.classList.add("hidden")
        ToggleCluesButton.classList.add("hidden")

        checkboxContainer.classList.remove("hidden")
        startGameButton.classList.remove("hidden")
        startGameButton.innerHTML = ("Play Again")
    }
}

function PrintToConsole() {

    // Checkbox Checker
    // if (gen1Checkbox.checked == true)
    //     console.log("gen1 true")
    // else
    //     console.log("gen1 false")
    
    // if (gen2Checkbox.checked == true)
    //     console.log("gen2 true")
    // else
    //     console.log("gen2 false")

    // if (gen3Checkbox.checked == true)
    //     console.log("gen3 true")
    // else
    //     console.log("gen3 false")

    // if (gen4Checkbox.checked == true)
    //     console.log("gen4 true")
    // else
    //     console.log("gen4 false")

    // Debug Console.Logs
    console.log(`pokemon included in this round are:`)
    console.log(pokemonToInclude)
    console.log(`usedPokemon array size: ${usedPokemon.length}`)
    console.log(usedPokemon)
    console.log(`the current pokemon is: ${pokemonToInclude[currentPokemonIndex].name}`)
    console.log(`the current pokemon's index is: ${currentPokemonIndex}`)
    console.log(`first letter of type: ${pokemonToInclude[currentPokemonIndex].type.charAt(0)}`)
}