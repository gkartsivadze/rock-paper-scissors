export default function LostAction(choosen) {

    console.log("Activated", choosen)

    document.getElementById(`variant_button_${choosen}`).animate({
        transform: "translate(-50%, -50%) translate(-20vw) scale(2)"
    }, {
        fill: "forwards",
        duration: 150
    })

    document.getElementById(`computer_choice`).animate({
        transform: "translate(-50%, -50%) translate(20vw)"
    }, {
        fill: "forwards",
        duration: 150
    })

};