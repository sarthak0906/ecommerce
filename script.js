var fs = require('fs');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var array = ["Shirt", "T Shirt", "Kurta", "Suit", "Jacket"]

var a = `<!DOCTYPE html>
<!-- saved from url=(0057)http://labbluesky.com/magento/cogito/full_screen_preview/ -->
<html>
<!-- Mirrored from themesground.com/altima/demo-page/ by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 28 Feb 2020 06:50:11 GMT -->
<head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="description" content="Tokithemes responsive magento theme">
		<meta name="keywords" content="Magneto, magento theme, responsive magento theme">
		<meta name="author" content="Tokithemes">
		<title>Altima</title>	
		
		<link rel="stylesheet" type="text/css" href="css/style.css" media="all">	
		<!-- <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" media="all"> -->
        <!-- <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,600,600italic,700,700italic,800' rel='stylesheet' type='text/css'>
       <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i,600,600i,700&amp;display=swap" rel="stylesheet"> -->
		<!--[if lt IE 9]>
		<script src="css/respond.min.js"></script>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>		
		<![endif]-->
		<style>
			.logo{
				color: whitesmoke
			}
		</style>
	</head>
	<body>
		<section class="header-container">
			<div class="header-intro">
				<div class="container-fluid">
				<div class="header-fluid">
					<div class="logo"><h1>Altima</h1></div>
					<div class="menu">
						<ul>
							<li><a>Demos</a></li>
							<li><a>Featured</a></li>
							<li><a>Supports</a></li>
						</ul>
					</div>
				</div>
				</div>
			</div>
			<div class="container-fluid">
				<header>
					<div class="header-inner text-center">
						<h3 class="text_heading">Welcome to Altima !</h3>
						<!-- <h2 class="text_heading_line">Multipurpose Responsive HTML Template</h2> -->
						<!-- <div class="button clearfix"><a target="_blank" href="https://themeforest.net/item/cogito-multipurpose-responsive-magento2-theme/20606283" class="by-thistheme">Buy this theme</a></div> -->
					</div>
				</header>				
			</div>
            <div class="top-banner">
				<div class="w3-content w3-display-container">
					<img class="mySlides" src="images/image1.jpg" style="width:100%; display:block">
				</div>
			</div>
		</section>

		<style>
			.single{
				width: 11%;
				margin: 12px;
			}
			table {
				border-collapse: collapse;
			}
	
			table tbody {
				border-top: 15px solid white;
			}
		</style>

		<section>
			<table style="width: 100%;">
`;

for (var i=0;i<14;++i){
    var b = `<tr style="font-weight: bold;">
    `
    for (var j = 1;j<4;++j){
        b += `    <td>
            <a href="product${(3*i) + j}.html">
                <div style="border: 2px black">
                    <img src="images/download_(${(3*i) + j}).jpg" alt="image about the stuff" style="height: 275px; width: 23%;">
                    <h4>${array[((3*i) + j)%5]}</h4>
                    <p>₹1234  25% off</p>
                </div>
            </a>
        </td>
    `
    }
    b += `</tr>
    `
    a += b;
    // console.log(b);
}
a += `
</table> 
</section>

<section class="footer-container">
<div class="container-fluid">
    <div class="footer-intro">
        <h1>Your Online Store</h1>
        <table style="width:100%; border-collapse: unset;">
            <tr style="color: white;">
                <th>
                    Information
                </th>
                <th>
                    Customer Care
                </th>
            </tr>
            <tr style="color: white;">
                <td>
                    About us
                </td>
                <td>
                    Contact Us
                </td>
            </tr>
            <tr style="color: white;">
                <td>
                    Delivery Information
                </td>
                <td>
                    Order Status
                </td>
                <!-- <td>
                    <input type="email">
                </td> -->
            </tr>
        </table>
    </div>
</div>
</section>
</body>
</html>`
// console.log(a);

fs.writeFileSync("index.html", a);
// // var a = ;

// for (var i = 1;i<43;++i){
//     fs.writeFileSync(`product${i}.html`, `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <link rel="stylesheet" href="product.css">
//         <!-- <link rel="stylesheet" type="text/css" href="css/style.css" media="all"> -->
//         <title>Document</title>
//     </head>
//     <body>
//         <main class="container">
     
//             <!-- Left Column / Headphones Image -->
//             <div class="left-column">
//               <img src="images/download_(${i}).jpg" alt="">
//             </div>
           
           
//             <!-- Right Column -->
//             <div class="right-column">
           
//               <!-- Product Description -->
//               <div class="product-description">
//                 <span>Men's Apparel</span>
//                 <h1>${array[i%5]}</h1>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet corporis, amet illum explicabo, doloribus nulla animi accusantium vero natus alias ex numquam minus, deserunt veritatis aperiam? Velit corporis maxime excepturi.</p>
//               </div>
           
//               <!-- Product Configuration -->
//               <div class="product-configuration">
           
           
//                 <!-- Cable Configuration -->
//                 <div class="cable-config">
//                   <span>Color</span>
           
//                   <div class="cable-choose">
//                     <button>Black</button>
//                     <button>White</button>
//                     <button>Blue</button>
//                   </div>
           
//                 </div>
//               </div>
           
//               <!-- Product Pricing -->
//               <div class="product-price">
//                 <span>₹${getRandomInt(5000)}</span>
//                 <a href="#" class="cart-btn">Add to cart</a>
//               </div>
//             </div>
//         </main>
//     </body>
//     </html>`);
// }
