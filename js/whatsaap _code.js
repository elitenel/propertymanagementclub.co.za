function sendToWhatsApp(event) {
    event.preventDefault();  // Prevents the form from being submitted to FormSubmit

    // Get form values
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const gender = document.getElementById('gender').value;
    const race = document.getElementById('races').value;
    const citizenshipStatus = document.getElementById('Citizenship_status').value;
    const identityNumber = document.getElementById('identity_number').value;
    const cellNumber = document.getElementById('cell_number').value;
    const email = document.getElementById('email').value;
    const movingInDate = document.getElementById('moving_in_date').value;
    const durationOfStay = document.getElementById('duration_of_stay').value;
    const roomNumber = document.getElementById('room_number').value;
    const message = document.getElementById('message').value;

    // Create the WhatsApp message text
    const messageText = `*New Form Submission*\n
        *Full Name:* ${name} ${surname}\n
        *Gender:* ${gender}\n
        *Race:* ${race}\n
        *Citizenship Status:* ${citizenshipStatus}\n
        *Identity Number:* ${identityNumber}\n
        *Cell Number:* ${cellNumber}\n
        *Email:* ${email}\n
        *Moving In Date:* ${movingInDate}\n
        *Duration of Stay:* ${durationOfStay}\n
        *Room Number:* ${roomNumber}\n
        *Message:* ${message}`;

    // Encode the message text for use in a URL
    const encodedMessage = encodeURIComponent(messageText);
    
    // Redirect to WhatsApp with the included number (replace with your number)
    window.open(`https://wa.me/27747017967?text=${encodedMessage}`, '_blank');

    // Optionally, clear the form after submission
    document.getElementById('myForm').reset(); // This clears the form
}
