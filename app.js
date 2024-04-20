// Step 1: DOM se element ko select karna
let imgBox = document.getElementById("imgBox"); // imgBox element ko select karna
let qrImage = document.getElementById("qrImage"); // qrImage element ko select karna
let qrText = document.getElementById("qrText"); // qrText element ko select karna

// Step 2: QR code ko generate karne ke liye ek function banayein
function generateQR() {
    // Step 3: QR code generate karne se pehle check karein ke input field mein kuch hai ya nahi
    if (qrText.value.length > 0) { // Agar qrText input field mein kuch hai
        // Step 4: QR code URL banayein
        let qrCodeURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        
        // Step 5: qrImage ke src attribute mein QR code URL set karein
        qrImage.src = qrCodeURL;
        
        // Step 6: imgBox element ko visible banayein by adding show-img class
        imgBox.classList.add("show-img");
    } else { // Agar qrText input field khali hai
        // Step 7: Error animation ke liye error class ko qrText input field par apply karein
        qrText.classList.add('error');
        
        // Step 8: Ek second ke baad error class ko hata dein
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}


