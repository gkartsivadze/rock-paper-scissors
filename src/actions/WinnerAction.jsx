export default function WinnerAction(item) {
    console.log("Begin")
    item.animate([{
        boxShadow: "0 0 0 rgb(168,168,168, 0.3), 0 0 0 rgb(168,168,168, 0.2), 0 0 0 rgb(168,168,168, 0.1)"
    }, {
        boxShadow: "0 0 0 2rem rgb(168,168,168, 0.3), 0 0 0 rgb(168,168,168, 0.2), 0 0 0 rgb(168,168,168, 0.1)"
    }, {
        boxShadow: "0 0 0 2rem rgb(168,168,168, 0.3), 0 0 0 4rem rgb(168,168,168, 0.2), 0 0 0 6rem rgb(168,168,168, 0.1)"
    }], {
        fill: "forwards",
        duration: 500
    })
};
