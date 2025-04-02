document.addEventListener("DOMContentLoaded", () => {
    const getString = window.location.search;
    const myInfo = new URLSearchParams(getString);

    let timestamp = myInfo.get("timestamp");  
    let formattedDate = timestamp ? new Date(Number(timestamp)).toLocaleString() : "Unknown date";

    document.querySelector("#results").innerHTML = `
        <h2>Thank You for Joining Us!</h2>
        <p>Welcome, <strong>${myInfo.get("first") || "Guest"} ${myInfo.get("last") || ""}</strong>! We are excited to have you as a member.</p>
        <p><strong>Membership Level:</strong> ${myInfo.get("membership_level") || "Not specified"}</p>
        <p><strong>Business Name:</strong> ${myInfo.get("business") || "Not provided"}</p>
        <p><strong>Organizational Title:</strong> ${myInfo.get("org_title") || "Not specified"}</p>
        <p><strong>Phone:</strong> ${myInfo.get("phone") || "Not provided"}</p>
        <p><strong>Email:</strong> ${myInfo.get("email") || "Not provided"}</p>
        <p><strong>Business Description:</strong> ${myInfo.get("business_desc") || "No description provided"}</p>
        <p><strong>Form Submitted On:</strong> ${formattedDate}</p>    
        <p>We look forward to collaborating with you. Stay tuned for upcoming events and opportunities!</p>
    `;
});
