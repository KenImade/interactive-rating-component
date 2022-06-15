const ratingBtns = document.querySelectorAll(".rating-btn")
const ratingMsg = document.getElementById("message")
const submitBtn = document.querySelector(".submit-btn")
const ratingCard = document.querySelector("#rating-card")
const messageCard = document.querySelector("#message-card")
let rating = "";

ratingBtns.forEach(btn => btn.addEventListener("click", handleBtnClick))
submitBtn.addEventListener("click", onSubmit)

function handleBtnClick(event) {
    ratingBtns.forEach(btn => {
        btn.classList.remove("bg-orange", "text-white")
        !btn.classList.contains("text-mediumGrey") ? btn.classList.add("text-mediumGrey") : ""
    })

    if(event.target.tagName === "BUTTON" && event.target.classList.contains("text-mediumGrey")) {
        event.target.classList.remove("text-mediumGrey")
        event.target.classList.add("bg-orange","text-white")
        rating = event.target.value
        ratingMsg.textContent = `You selected ${rating} out of 5`
    }
}

function onSubmit() {
    if (rating !== "") {
        ratingCard.classList.add("hidden")
        messageCard.classList.remove("hidden")
    } else {
        return
    }
}
