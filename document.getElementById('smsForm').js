document.getElementById('smsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const to = document.getElementById('smsTo').value;
    const message = document.getElementById('smsMessage').value;

    fetch('/send-sms', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ to, message })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('SMS sent successfully! Message SID: ' + data.messageSid);
        } else {
            alert('Error sending SMS: ' + data.error);
        }
    })
    .catch(error => console.error('Error:', error));
});