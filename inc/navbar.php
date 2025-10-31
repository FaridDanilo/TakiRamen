<?php session_start(); ?>

<!--* Navbar Start -->
<header class="navbar">
    <div class="navbar__logo">
        <a href="index.php"><img src="assets/img/logo.png" alt="Takiramen Logo"></a>
        <a href="index.php">
            <h1>Takiramen<span class="dot">.</span></h1>
        </a>
    </div>

    <div class="navbar__toggle" id="navbarToggle">
        <i class="fa-solid fa-bars"></i>
    </div>

    <nav class="navbar__links" id="navbarLinks">
        <ul>
            <li><a href="#home" class="active"><i class="fa-solid fa-house"></i> Home</a></li>
            <li><a href="#menu"><i class="fa-solid fa-utensils"></i> Menu</a></li>
            <li><a href="#direction"><i class="fa-solid fa-location-crosshairs"></i> Direction</a></li>
            <li><a href="#theBest"><i class="fa-solid fa-crown"></i> The best</a></li>
            <li><a href="#">welcome <?= $_SESSION['user']; ?></a></li>
            <!-- <li><a href="contact.php"><i class="fa-solid fa-phone"></i> Contact</a></li> -->
        </ul>
    </nav>
</header>
<!--* Navbar End -->