var computersInStock = 0;
var computerManufactureCost = 0;
var computerSellPrice = 0;
var money = 0;
var CPU = "none";
var RAM = "none";
var HDD = "none";
var videoCard = "none";
var screenSize = 'none';
var RPM = "none";
var noiseLevel = "none";
var extras = "none";
var CPU_1 = "300 MHz";
var CPU_1_cost = 0;
var CPU_2 = "1.0 GHz";
var CPU_2_cost = 0;
var CPU_3 = "1.3 GHz";
var CPU_3_cost = 0;
var CPU_4 = "2.0 GHz";
var CPU_4_cost = 0;
var CPU_5 = "2.8 GHz";
var CPU_5_cost = 0;
var CPU_6 = "3.2 GHz";
var CPU_6_cost = 0;
var CPU_7 = "3.8 GHz";
var CPU_7_cost = 0;
var RAM_1 = "2 GB";
var RAM_1_cost = 0;
var RAM_2 = "4 GB";
var RAM_2_cost = 0;
var RAM_3 = "6 GB";
var RAM_3_cost = 0;
var RAM_4 = "8 GB";
var RAM_4_cost = 0;
var RAM_5 = "12 GB";
var RAM_5_cost = 0;
var RAM_6 = "16 GB";
var RAM_6_cost = 0;
var RAM_7 = "32 GB";
var RAM_7_cost = 0;
var RAM_8 = "64 GB";
var RAM_8_cost = 0;
var HDD_1 = "120 GB";
var HDD_1_cost = 0;
var HDD_2 = "320 GB";
var HDD_2_cost = 0;
var HDD_3 = "500 GB";
var HDD_3_cost = 0;
var HDD_4 = "1 TB";
var HDD_4_cost = 0;
var HDD_5 = "2 TB";
var HDD_5_cost = 0;
var HDD_6 = "3 TB";
var HDD_6_cost = 0;
var HDD_7 = "4 TB";
var HDD_7_cost = 0;
var HDD_8 = "5 TB";
var HDD_8_cost = 0;
var videoCard_1 = "128 MB";
var videoCard_1_cost = 0;
var videoCard_2 = "256 MB";
var videoCard_2_cost = 0;
var videoCard_3 = "512 MB";
var videoCard_3_cost = 0;
var videoCard_4 = "1 GB";
var videoCard_4_cost = 0;
var videoCard_5 = "2 GB";
var videoCard_5_cost = 0;
var videoCard_6 = "4 GB";
var videoCard_6_cost = 0;
var videoCard_7 = "8 GB";
var videoCard_7_cost = 0;
var videoCard_8 = "16 GB";
var videoCard_8_cost = 0;
var videoCard_9 = "24 GB";
var videoCard_9_cost = 0;
var videoCard_10 = "32 GB";
var videoCard_10_cost = 0;
var screenSize_1 = '16"';
var screenSize_1_cost = 0;
var screenSize_2 = '18"';
var screenSize_2_cost = 0;
var screenSize_3 = '20"';
var screenSize_3_cost = 0;
var screenSize_4 = '22"';
var screenSize_4_cost = 0;
var screenSize_5 = '24"';
var screenSize_5_cost = 0;
var screenSize_6 = '26"';
var screenSize_6_cost = 0;
var screenSize_7 = '28"';
var screenSize_7_cost = 0;
var screenSize_8 = '30"';
var screenSize_8_cost = 0;
var screenSize_9 = '32"';
var screenSize_9_cost = 0;
var screenSize_10 = '34"';
var screenSize_10_cost = 0;
var screenSize_11 = '36"';
var screenSize_11_cost = 0;
var screenSize_12 = '38"';
var screenSize_12_cost = 0;
var screenSize_13 = '40"';
var screenSize_13_cost = 0;
var RPM_1 = "1500 RPM";
var RPM_1_cost = 0;
var RPM_2 = "2000 RPM";
var RPM_2_cost = 0;
var RPM_3 = "2500 RPM";
var RPM_3_cost = 0;
var RPM_4 = "3000 RPM";
var RPM_4_cost = 0;
var noiseLevel_1 = "40 dbA";
var noiseLevel_1_cost = 0;
var noiseLevel_2 = "35 dbA";
var noiseLevel_2_cost = 0;
var noiseLevel_3 = "30 dbA";
var noiseLevel_3_cost = 0;
var noiseLevel_4 = "25 dbA";
var noiseLevel_4_cost = 0;
var noiseLevel_5 = "20 dbA";
var noiseLevel_5_cost = 0;
var extras_speakers = "Speakers";
var extras_speakers_cost = 0;
var extras_webcam = "Webcam";
var extras_webcam_cost = 0;
var extras_curved = "Curved Display";
var extras_curved_cost = 0;
var extras_touchscreen = "Touchscreen";
var extras_touchscreen_cost = 0;



//department tabs
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

//upgrade computer accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}

function buyComputer() {
	if(computerManufactureCost <= money) {
		money = money - computerManufactureCost;
		computersInStock = computersInStock + 1;
		document.getElementById("money").innerHTML = money;
		document.getElementById("computersInStock").innerHTML = computersInStock;
	}
}

function sellComputer() {
	if(!(computersInStock == 0)) {
		money = money + computerSellPrice;
		computersInStock = computersInStock - 1;
		document.getElementById("money").innerHTML = money;
		document.getElementById("computersInStock").innerHTML = computersInStock;
	}
}