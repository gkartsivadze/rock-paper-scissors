export default function WinnerAction(item) {
    console.log("Begin")
    item.animate([{
        boxShadow: "0 0 0 black, 0 0 0 white"
    }, {
        boxShadow: "0 0 0.25rem 1rem black, 0 0 0 white"
    }, {
        boxShadow: "0 0 0.25rem 1rem black, 0 0 0.25rem 2rem white"
    }], {
        fill: "forwards",
        duration: 500
    })
};
