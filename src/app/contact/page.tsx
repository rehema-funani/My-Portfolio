<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/kMVq7KsBd6l2gRxKwLCO0UR1sVF7KtPC5+0ix9M1imLRtnQ+1Q9PY9L1HfKx9g4tjT2N5i+MMvMiw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <style>
    /* General Styles */
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      background-color: #f5f5f5;
    }

    .container {
      display: flex;
      background-color: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      width: 80%;
      max-width: 800px;
    }

    /* Contact Form Styles */
    .contact-form {
      flex: 1;
      padding: 40px;
    }

    .contact-form h1 {
      color: #333;
      font-size: 28px;
      font-weight: bold;
    }

    .contact-form p {
      color: #666;
      margin-top: 10px;
      margin-bottom: 30px;
    }

    .contact-form input, .contact-form textarea {
      width: 100%;
      padding: 12px;
      margin-bottom: 20px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
      color: #333;
    }

    .contact-form button {
      width: 100%;
      padding: 12px;
      background-color: #333;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .contact-form button:hover {
      background-color: #555;
    }

    /* Info Section Styles */
    .info-section {
      flex: 0.8;
      background-color: #333;
      color: #fff;
      padding: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      position: relative;
    }

    .info-section h2 {
      font-size: 22px;
      font-weight: bold;
      color: #ffd700; /* Adjust accent color as needed */
      margin-bottom: 20px;
    }

    .info-section div {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      color: #ccc;
    }

    .info-section div i {
      margin-right: 10px;
      font-size: 18px;
    }

    /* Corner Accent Boxes */
    .top-left-accent, .bottom-right-accent {
      position: absolute;
      width: 30px;
      height: 30px;
      background-color: #ffd700; /* Adjust accent color as needed */
    }

    .top-left-accent {
      top: 0;
      left: 0;
    }

    .bottom-right-accent {
      bottom: 0;
      right: 0;
    }
  </style>
</head>
<body>

<div class="container">
  <!-- Contact Form Section -->
  <div class="contact-form">
    <h1>Contact Us</h1>
    <p>Feel free to contact us at any time. We will get back to you as soon as we can!</p>
    <form>
      <input type="text" placeholder="Name" required>
      <input type="email" placeholder="Email" required>
      <textarea rows="4" placeholder="Message" required></textarea>
      <button type="submit">SEND</button>
    </form>
  </div>

  <!-- Info Section -->
  <div class="info-section">
    <div class="top-left-accent"></div> <!-- Top left accent box -->
    <h2>Info</h2>
    <div><i class="fas fa-envelope"></i> your-email@example.com</div>
    <div><i class="fas fa-phone"></i> +123 456 7890</div>
    <div><i class="fab fa-linkedin"></i> LinkedIn Profile</div>
    <div><i class="fab fa-twitter"></i> Twitter Handle</div>
    <div class="bottom-right-accent"></div> <!-- Bottom right accent box -->
  </div>
</div>

</body>
</html>
