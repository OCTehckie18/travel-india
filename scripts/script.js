function showMessage()
{
    alert("Welcome to Incredible India!");
}

function showDestination(destination)
{
    const details = {
        "Taj Mahal": "The Taj Mahal is a famous monument in Agra, Uttar Pradesh, known for its beautiful architecture and history.",
        "Kerala": "Kerala is known for its peaceful backwaters, lush landscapes, beaches and rich cultural traditions.",
        "Goa": "Goa is known for its beaches, coastal scenery, Portuguese heritage and vibrant tourism."
    };

    alert(destination + "\n\n" + details[destination]);
}