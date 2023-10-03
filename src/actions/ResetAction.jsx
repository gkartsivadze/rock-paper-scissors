export default function ResetAction(choosen, setChoosen, setChartEnabledState, setChartState, setComputerSymbol) {
    document.getElementById(`variant_button_${choosen}`).classList.remove("user_choice_active2")

    document.getElementById(`computer_choice`).classList.remove("computer_choice_active")

    document.getElementById(`variant_button_${choosen}`).animate({
        boxShadow: "none"
    }, {
        fill: "forwards",
        duration: 300
    })

    document.getElementById(`computer_choice`).animate({
        boxShadow: "none"
    }, {
        fill: "forwards",
        duration: 300
    })

    document.querySelectorAll(".active").forEach(item => {
        item.classList.remove("active");
        item.removeAttribute("disabled");
    })

    setChoosen(false)
    setChartEnabledState(false);
    setChartState(0);
    setComputerSymbol(false);
};
