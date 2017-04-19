var computersInStock = 0;
var computerManufactureCost = 0;
var computerSellPrice = 0;
var computerSellPrice2 = 0;
var computersBoughtPerClick = 1;
var computersSoldPerClick = 1;
var factories = 0;
var factoryCost = 0;
var money = 0;
var deliveryTime = 9;
var CPU = "none";
var CPUNext = "300 MHz";
var CPUCost = 0;
var currentCPU = "none";
var CPUSell = 0;
var RAM = "none";
var RAMNext = "2 GB";
var RAMCost = 0;
var RAMSell = 0;
var currentRAM = "none";
var HDD = "none";
var HDDNext = "120 GB";
var HDDCost = 0;
var HDDSell = 0;
var currentHDD = "none";
var videoCard = "none";
var videoCardNext = "128 MB";
var videoCardCost = 0;
var videoCardSell = 0;
var currentVideoCard = "none";
var screenSize = 'none';
var screenSizeNext = '16"';
var screenSizeCost = 0;
var screenSizeSell = 0;
var currentScreenSize = "none";
var RPM = "none";
var RPMNext = "1500 RPM";
var RPMCost = 0;
var RPMSell = 0;
var currentRPM = "none";
var noiseLevel = "none";
var noiseLevelNext = "40 dbA";
var noiseLevelCost = 0;
var noiseLevelSell = 0;
var currentNoiseLevel = "none";
var extras = "none";
var extrasNext = "Speakers";
var extrasCost = 0;
var extrasSell = 0;
var currentExtras = "none";
var CPU_1 = "300 MHz";
var CPU_1_cost = 0;
var CPU_1_sell = 1;
var CPU_2 = "1.0 GHz";
var CPU_2_cost = 0;
var CPU_2_sell = 2;
var CPU_3 = "1.3 GHz";
var CPU_3_cost = 0;
var CPU_3_sell = 3;
var CPU_4 = "2.0 GHz";
var CPU_4_cost = 0;
var CPU_4_sell = 4;
var CPU_5 = "2.8 GHz";
var CPU_5_cost = 0;
var CPU_5_sell = 5;
var CPU_6 = "3.2 GHz";
var CPU_6_cost = 0;
var CPU_6_sell = 6;
var CPU_7 = "3.8 GHz";
var CPU_7_cost = 0;
var CPU_7_sell = 7;
var RAM_1 = "2 GB";
var RAM_1_cost = 0;
var RAM_1_sell = 1;
var RAM_2 = "4 GB";
var RAM_2_cost = 0;
var RAM_2_sell = 2;
var RAM_3 = "6 GB";
var RAM_3_cost = 0;
var RAM_3_sell = 3;
var RAM_4 = "8 GB";
var RAM_4_cost = 0;
var RAM_4_sell = 4;
var RAM_5 = "12 GB";
var RAM_5_cost = 0;
var RAM_5_sell = 5;
var RAM_6 = "16 GB";
var RAM_6_cost = 0;
var RAM_6_sell = 6;
var RAM_7 = "32 GB";
var RAM_7_cost = 0;
var RAM_7_sell = 7;
var RAM_8 = "64 GB";
var RAM_8_cost = 0;
var RAM_8_sell = 8;
var HDD_1 = "120 GB";
var HDD_1_cost = 0;
var HDD_1_sell = 1;
var HDD_2 = "320 GB";
var HDD_2_cost = 0;
var HDD_2_sell = 2;
var HDD_3 = "500 GB";
var HDD_3_cost = 0;
var HDD_3_sell = 3;
var HDD_4 = "1 TB";
var HDD_4_cost = 0;
var HDD_4_sell = 4;
var HDD_5 = "2 TB";
var HDD_5_cost = 0;
var HDD_5_sell = 5;
var HDD_6 = "3 TB";
var HDD_6_cost = 0;
var HDD_6_sell = 6;
var HDD_7 = "4 TB";
var HDD_7_cost = 0;
var HDD_7_sell = 7;
var HDD_8 = "5 TB";
var HDD_8_cost = 0;
var HDD_8_sell = 8;
var videoCard_1 = "128 MB";
var videoCard_1_cost = 0;
var videoCard_1_sell = 1;
var videoCard_2 = "256 MB";
var videoCard_2_cost = 0;
var videoCard_2_sell = 2;
var videoCard_3 = "512 MB";
var videoCard_3_cost = 0;
var videoCard_3_sell = 3;
var videoCard_4 = "1 GB";
var videoCard_4_cost = 0;
var videoCard_4_sell = 4;
var videoCard_5 = "2 GB";
var videoCard_5_cost = 0;
var videoCard_5_sell = 5;
var videoCard_6 = "4 GB";
var videoCard_6_cost = 0;
var videoCard_6_sell = 6;
var videoCard_7 = "8 GB";
var videoCard_7_cost = 0;
var videoCard_7_sell = 7;
var videoCard_8 = "16 GB";
var videoCard_8_cost = 0;
var videoCard_8_sell = 8;
var videoCard_9 = "24 GB";
var videoCard_9_cost = 0;
var videoCard_9_sell = 9;
var videoCard_10 = "32 GB";
var videoCard_10_cost = 0;
var videoCard_10_sell = 10;
var screenSize_1 = '16"';
var screenSize_1_cost = 0;
var screenSize_1_sell = 1;
var screenSize_2 = '18"';
var screenSize_2_cost = 0;
var screenSize_2_sell = 2;
var screenSize_3 = '20"';
var screenSize_3_cost = 0;
var screenSize_3_sell = 3;
var screenSize_4 = '22"';
var screenSize_4_cost = 0;
var screenSize_4_sell = 4;
var screenSize_5 = '24"';
var screenSize_5_cost = 0;
var screenSize_5_sell = 5;
var screenSize_6 = '26"';
var screenSize_6_cost = 0;
var screenSize_6_sell = 6;
var screenSize_7 = '28"';
var screenSize_7_cost = 0;
var screenSize_7_sell = 7;
var screenSize_8 = '30"';
var screenSize_8_cost = 0;
var screenSize_8_sell = 8;
var screenSize_9 = '32"';
var screenSize_9_cost = 0;
var screenSize_9_sell = 9;
var screenSize_10 = '34"';
var screenSize_10_cost = 0;
var screenSize_10_sell = 10;
var screenSize_11 = '36"';
var screenSize_11_cost = 0;
var screenSize_11_sell = 11;
var screenSize_12 = '38"';
var screenSize_12_cost = 0;
var screenSize_12_sell = 12;
var screenSize_13 = '40"';
var screenSize_13_cost = 0;
var screenSize_13_sell = 13;
var RPM_1 = "1500 RPM";
var RPM_1_cost = 0;
var RPM_1_sell = 1;
var RPM_2 = "2000 RPM";
var RPM_2_cost = 0;
var RPM_2_sell = 2;
var RPM_3 = "2500 RPM";
var RPM_3_cost = 0;
var RPM_3_sell = 3;
var RPM_4 = "3000 RPM";
var RPM_4_cost = 0;
var RPM_4_sell = 4;
var noiseLevel_1 = "40 dbA";
var noiseLevel_1_cost = 0;
var noiseLevel_1_sell = 1;
var noiseLevel_2 = "35 dbA";
var noiseLevel_2_cost = 0;
var noiseLevel_2_sell = 2;
var noiseLevel_3 = "30 dbA";
var noiseLevel_3_cost = 0;
var noiseLevel_3_sell = 3;
var noiseLevel_4 = "25 dbA";
var noiseLevel_4_cost = 0;
var noiseLevel_4_sell = 4;
var noiseLevel_5 = "20 dbA";
var noiseLevel_5_cost = 0;
var noiseLevel_5_sell = 5;
var extras_speakers = "Speakers";
var extras_speakers_cost = 0;
var extras_speakers_sell = 1;
var extras_webcam = "Webcam";
var extras_webcam_cost = 0;
var extras_webcam_sell = 2;
var extras_curved = "Curved Display";
var extras_curved_cost = 0;
var extras_curved_sell = 3;
var extras_touchscreen = "Touchscreen";
var extras_touchscreen_cost = 0;
var extras_touchscreen_sell = 4;
var chosenDelivery = "handDeliveryBtn";
var currentlySelected = "hand";
var handCost = 0;
var handSales = 1;
var handTime = 0;
var handBought = true;
var handEnabled = true;
var carCost = 0;
var carSales = 1;
var carTime = 0;
var carBought = false;
var carEnabled = false;
var vanCost = 0;
var vanSales = 1;
var vanTime = 0;
var vanBought = false;
var vanEnabled = false;
var truckCost = 0;
var truckSales = 1;
var truckTime = 0;
var truckBought = false;
var truckEnabled = false;
var trainCost = 0;
var trainSales = 1;
var trainTime = 0;
var trainBought = false;
var trainEnabled = false;
var planeCost = 0;
var planeSales = 1;
var planeTime = 0;
var planeBought = false;
var planeEnabled = false;
var shipCost = 0;
var shipSales = 1;
var shipTime = 0;
var shipBought = false;
var shipEnabled = false;


window.onload = windowOnload();

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
	if(!((money-computerManufactureCost) < 0)) {
		if((computerManufactureCost * computersBoughtPerClick)<= money) {
			money = money - (computerManufactureCost * computersBoughtPerClick);
			computersInStock = computersInStock + computersBoughtPerClick;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computersInStock").innerHTML = computersInStock;
		} else {
			money = money- computerManufactureCost*(Math.floor(computersBoughtPerClick * (100/(computerManufactureCost*computersBoughtPerClick))));
			computersInStock = computersInStock + (Math.floor(computersBoughtPerClick * (100/(computerManufactureCost*computersBoughtPerClick))));
			document.getElementById("money").innerHTML = money;
			document.getElementById("computersInStock").innerHTML = computersInStock;
		}
	}
}

function sellComputer() {
	if(computersInStock >= computersSoldPerClick) {
		money = money + (computersSoldPerClick*computerSellPrice);
		computersInStock = computersInStock - computersSoldPerClick;
		document.getElementById("money").innerHTML = money;
		document.getElementById("computersInStock").innerHTML = computersInStock;
	} else  {
		money = money + (computerSellPrice * computersInStock);
		computersInStock = computersInStock - computersInStock;
		document.getElementById("money").innerHTML = money;
		document.getElementById("computersInStock").innerHTML = computersInStock;
	}
}

var link = document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = 'https://jevin-studios.github.io/ComputerCrafter/favicon.ico';
document.getElementsByTagName('head')[0].appendChild(link);


function upgradeRPM() {
	if(RPMCost <= money) {
		if(RPMNext === RPM_1) {
			money = money - RPMCost;
			currentRPM = RPM_1;
			RPMNext = RPM_2;
			RPMCost = RPM_2_cost;
			RPMSell = RPM_1_sell;
			computerSellPrice2 = computerSellPrice2 + RPMSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentRPM").innerHTML = currentRPM;
			document.getElementById("RPM").innerHTML = currentRPM;
			document.getElementById("RPMCost").innerHTML = RPMCost;
			document.getElementById("RPMNext").innerHTML = RPMNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(RPMNext === RPM_2) {
			money = money - RPMCost;
			currentRPM = RPM_2;
			RPMNext = RPM_3;
			RPMCost = RPM_3_cost;
			RPMSell = RPM_2_sell;
			computerSellPrice2 = computerSellPrice2 + RPMSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentRPM").innerHTML = currentRPM;
			document.getElementById("RPM").innerHTML = currentRPM;
			document.getElementById("RPMCost").innerHTML = RPMCost;
			document.getElementById("RPMNext").innerHTML = RPMNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(RPMNext === RPM_3) {
			money = money - RPMCost;
			currentRPM = RPM_3;
			RPMNext = RPM_4;
			RPMCost = RPM_4_cost;
			RPMSell = RPM_3_sell;
			computerSellPrice2 = computerSellPrice2 + RPMSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentRPM").innerHTML = currentRPM;
			document.getElementById("RPM").innerHTML = currentRPM;
			document.getElementById("RPMCost").innerHTML = RPMCost;
			document.getElementById("RPMNext").innerHTML = RPMNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(RPMNext === RPM_4) {
			money = money - RPMCost;
			currentRPM = RPM_4	;
			RPMNext = "none";
			RPMSell = RPM_4_sell;
			computerSellPrice2 = computerSellPrice2 + RPMSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentRPM").innerHTML = currentRPM;
			document.getElementById("RPM").innerHTML = currentRPM;
			document.getElementById("RPMNext").innerHTML = RPMNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("RPMUpgradeBtn").innerHTML = "All Upgrades Completed";
			document.getElementById("RPMUpgradeBtn").disabled = true;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		}
	}
}

function upgradeNoiseLevel() {
	if(noiseLevelCost <= money) {
		if(noiseLevelNext === noiseLevel_1) {
			money = money - noiseLevelCost;
			currentNoiseLevel = noiseLevel_1;
			noiseLevelNext = noiseLevel_2;
			noiseLevelCost = noiseLevel_2_cost;
			noiseLevelSell = noiseLevel_1_sell;
			computerSellPrice2 = computerSellPrice2 + noiseLevelSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentNoiseLevel").innerHTML = currentNoiseLevel;
			document.getElementById("noiseLevel").innerHTML = currentNoiseLevel;
			document.getElementById("noiseLevelCost").innerHTML = noiseLevelCost;
			document.getElementById("noiseLevelNext").innerHTML = noiseLevelNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(noiseLevelNext === noiseLevel_2) {
			money = money - noiseLevelCost;
			currentNoiseLevel = noiseLevel_2;
			noiseLevelNext = noiseLevel_3;
			noiseLevelCost = noiseLevel_3_cost;
			noiseLevelSell = noiseLevel_2_sell;
			computerSellPrice2 = computerSellPrice2 + noiseLevelSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentNoiseLevel").innerHTML = currentNoiseLevel;
			document.getElementById("noiseLevel").innerHTML = currentNoiseLevel;
			document.getElementById("noiseLevelCost").innerHTML = noiseLevelCost;
			document.getElementById("noiseLevelNext").innerHTML = noiseLevelNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(noiseLevelNext === noiseLevel_3) {
			money = money - noiseLevelCost;
			currentNoiseLevel = noiseLevel_3;
			noiseLevelNext = noiseLevel_4;
			noiseLevelCost = noiseLevel_4_cost;
			noiseLevelSell = noiseLevel_3_sell;
			computerSellPrice2 = computerSellPrice2 + noiseLevelSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentNoiseLevel").innerHTML = currentNoiseLevel;
			document.getElementById("noiseLevel").innerHTML = currentNoiseLevel;
			document.getElementById("noiseLevelCost").innerHTML = noiseLevelCost;
			document.getElementById("noiseLevelNext").innerHTML = noiseLevelNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(noiseLevelNext === noiseLevel_4) {
			money = money - noiseLevelCost;
			currentNoiseLevel = noiseLevel_4;
			noiseLevelNext = noiseLevel_5;
			noiseLevelCost = noiseLevel_5_cost;
			noiseLevelSell = noiseLevel_4_sell;
			computerSellPrice2 = computerSellPrice2 + noiseLevelSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentNoiseLevel").innerHTML = currentNoiseLevel;
			document.getElementById("noiseLevel").innerHTML = currentNoiseLevel;
			document.getElementById("noiseLevelCost").innerHTML = noiseLevelCost;
			document.getElementById("noiseLevelNext").innerHTML = noiseLevelNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(noiseLevelNext === noiseLevel_5) {
			money = money - noiseLevelCost;
			currentNoiseLevel = noiseLevel_5	;
			noiseLevelNext = "none";
			noiseLevelSell = noiseLevel_5_sell;
			computerSellPrice2 = computerSellPrice2 + noiseLevelSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentNoiseLevel").innerHTML = currentNoiseLevel;
			document.getElementById("noiseLevel").innerHTML = currentNoiseLevel;
			document.getElementById("noiseLevelNext").innerHTML = noiseLevelNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("noiseLevelUpgradeBtn").innerHTML = "All Upgrades Completed";
			document.getElementById("noiseLevelUpgradeBtn").disabled = true;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		}
	}
}

function upgradeExtras() {
	if(extrasCost <= money) {
		if(extrasNext === extras_speakers) {
			money = money - extrasCost;
			currentExtras = extras_speakers;
			extrasNext = extras_webcam;
			extrasCost = extras_webcam_cost;
			extrasSell = extras_speakers_sell;
			computerSellPrice2 = computerSellPrice2 + extrasSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentExtras").innerHTML = currentExtras;
			document.getElementById("extras").innerHTML = currentExtras;
			document.getElementById("extrasCost").innerHTML = extrasCost;
			document.getElementById("extrasNext").innerHTML = extrasNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if (extrasNext === extras_webcam) {
			money = money - extrasCost;
			currentExtras = currentExtras.concat(", ",extras_webcam);
			extrasNext = extras_curved;
			extrasCost = extras_curved_cost;
			extrasSell = extras_webcam_sell;
			computerSellPrice2 = computerSellPrice2 + extrasSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentExtras").innerHTML = currentExtras;
			document.getElementById("extras").innerHTML = currentExtras;
			document.getElementById("extrasCost").innerHTML = extrasCost;
			document.getElementById("extrasNext").innerHTML = extrasNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(extrasNext === extras_curved) {
			money = money - extrasCost;
			currentExtras = currentExtras.concat(", ",extras_curved);
			extrasNext = extras_touchscreen;
			extrasCost = extras_touchscreen_cost;
			extrasSell = extras_curved_sell;
			computerSellPrice2 = computerSellPrice2 + extrasSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentExtras").innerHTML = currentExtras;
			document.getElementById("extras").innerHTML = currentExtras;
			document.getElementById("extrasCost").innerHTML = extrasCost;
			document.getElementById("extrasNext").innerHTML = extrasNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(extrasNext === extras_touchscreen) {
			money = money - extrasCost;
			currentExtras = currentExtras.concat(", ",extras_touchscreen);
			extrasNext = "none";
			extrasSell = extras_touchscreen_sell;
			computerSellPrice2 = computerSellPrice2 + extrasSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentExtras").innerHTML = currentExtras;
			document.getElementById("extras").innerHTML = currentExtras;
			document.getElementById("extrasCost").innerHTML = extrasCost;
			document.getElementById("extrasNext").innerHTML = extrasNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("extrasUpgradeBtn").innerHTML = "All Upgrades Completed";
			document.getElementById("extrasUpgradeBtn").disabled = true;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		}
	}
}

function upgradeCPU() {
	if(CPUCost <= money) {
		if(CPUNext === CPU_1) {
			money = money - CPUCost;
			currentCPU = CPU_1;
			CPUNext = CPU_2;
			CPUCost = CPU_2_cost;
			CPUSell = CPU_1_sell;
			computerSellPrice2 = computerSellPrice2 + CPUSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentCPU").innerHTML = currentCPU;
			document.getElementById("CPU").innerHTML = currentCPU;
			document.getElementById("CPUCost").innerHTML = CPUCost;
			document.getElementById("CPUNext").innerHTML = CPUNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(CPUNext === CPU_2) {
			money = money - CPUCost;
			currentCPU = CPU_2;
			CPUNext = CPU_3;
			CPUCost = CPU_3_cost;
			CPUSell = CPU_2_sell;
			computerSellPrice2 = computerSellPrice2 + CPUSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentCPU").innerHTML = currentCPU;
			document.getElementById("CPU").innerHTML = currentCPU;
			document.getElementById("CPUCost").innerHTML = CPUCost;
			document.getElementById("CPUNext").innerHTML = CPUNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(CPUNext === CPU_3) {
			money = money - CPUCost;
			currentCPU = CPU_3;
			CPUNext = CPU_4;
			CPUCost = CPU_4_cost;
			CPUSell = CPU_3_sell;
			computerSellPrice2 = computerSellPrice2 + CPUSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentCPU").innerHTML = currentCPU;
			document.getElementById("CPU").innerHTML = currentCPU;
			document.getElementById("CPUCost").innerHTML = CPUCost;
			document.getElementById("CPUNext").innerHTML = CPUNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(CPUNext === CPU_4) {
			money = money - CPUCost;
			currentCPU = CPU_4;
			CPUNext = CPU_5;
			CPUCost = CPU_5_cost;
			CPUSell = CPU_4_sell;
			computerSellPrice2 = computerSellPrice2 + CPUSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentCPU").innerHTML = currentCPU;
			document.getElementById("CPU").innerHTML = currentCPU;
			document.getElementById("CPUCost").innerHTML = CPUCost;
			document.getElementById("CPUNext").innerHTML = CPUNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(CPUNext === CPU_5) {
			money = money - CPUCost;
			currentCPU = CPU_5;
			CPUNext = CPU_6;
			CPUCost = CPU_6_cost;
			CPUSell = CPU_5_sell;
			computerSellPrice2 = computerSellPrice2 + CPUSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentCPU").innerHTML = currentCPU;
			document.getElementById("CPU").innerHTML = currentCPU;
			document.getElementById("CPUCost").innerHTML = CPUCost;
			document.getElementById("CPUNext").innerHTML = CPUNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(CPUNext === CPU_6) {
			money = money - CPUCost;
			currentCPU = CPU_6;
			CPUNext = CPU_7;
			CPUCost = CPU_7_cost;
			CPUSell = CPU_6_sell;
			computerSellPrice2 = computerSellPrice2 + CPUSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentCPU").innerHTML = currentCPU;
			document.getElementById("CPU").innerHTML = currentCPU;
			document.getElementById("CPUCost").innerHTML = CPUCost;
			document.getElementById("CPUNext").innerHTML = CPUNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(CPUNext === CPU_7) {
			money = money - CPUCost;
			currentCPU = CPU_7;
			CPUNext = "none";
			CPUSell = CPU_7_sell;
			computerSellPrice2 = computerSellPrice2 + CPUSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentCPU").innerHTML = currentCPU;
			document.getElementById("CPU").innerHTML = currentCPU;
			document.getElementById("CPUCost").innerHTML = CPUCost;
			document.getElementById("CPUNext").innerHTML = CPUNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("CPUUpgradeBtn").innerHTML = "All Upgrades Completed";
			document.getElementById("CPUUpgradeBtn").disabled = true;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		}
	}
}

function upgradeRAM() {
	if(RAMCost <= money) {
		if(RAMNext === RAM_1) {
			money = money - RAMCost;
			currentRAM = RAM_1;
			RAMNext = RAM_2;
			RAMCost = RAM_2_cost;
			RAMSell = RAM_1_sell;
			computerSellPrice2 = computerSellPrice2 + RAMSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentRAM").innerHTML = currentRAM;
			document.getElementById("RAM").innerHTML = currentRAM;
			document.getElementById("RAMCost").innerHTML = RAMCost;
			document.getElementById("RAMNext").innerHTML = RAMNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(RAMNext === RAM_2) {
			money = money - RAMCost;
			currentRAM = RAM_2;
			RAMNext = RAM_3;
			RAMCost = RAM_3_cost;
			RAMSell = RAM_2_sell;
			computerSellPrice2 = computerSellPrice2 + RAMSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentRAM").innerHTML = currentRAM;
			document.getElementById("RAM").innerHTML = currentRAM;
			document.getElementById("RAMCost").innerHTML = RAMCost;
			document.getElementById("RAMNext").innerHTML = RAMNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(RAMNext === RAM_3) {
			money = money - RAMCost;
			currentRAM = RAM_3;
			RAMNext = RAM_4;
			RAMCost = RAM_4_cost;
			RAMSell = RAM_3_sell;
			computerSellPrice2 = computerSellPrice2 + RAMSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentRAM").innerHTML = currentRAM;
			document.getElementById("RAM").innerHTML = currentRAM;
			document.getElementById("RAMCost").innerHTML = RAMCost;
			document.getElementById("RAMNext").innerHTML = RAMNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(RAMNext === RAM_4) {
			money = money - RAMCost;
			currentRAM = RAM_4;
			RAMNext = RAM_5;
			RAMCost = RAM_5_cost;
			RAMSell = RAM_4_sell;
			computerSellPrice2 = computerSellPrice2 + RAMSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentRAM").innerHTML = currentRAM;
			document.getElementById("RAM").innerHTML = currentRAM;
			document.getElementById("RAMCost").innerHTML = RAMCost;
			document.getElementById("RAMNext").innerHTML = RAMNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(RAMNext === RAM_5) {
			money = money - RAMCost;
			currentRAM = RAM_5;
			RAMNext = RAM_6;
			RAMCost = RAM_6_cost;
			RAMSell = RAM_5_sell;
			computerSellPrice2 = computerSellPrice2 + RAMSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentRAM").innerHTML = currentRAM;
			document.getElementById("RAM").innerHTML = currentRAM;
			document.getElementById("RAMCost").innerHTML = RAMCost;
			document.getElementById("RAMNext").innerHTML = RAMNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(RAMNext === RAM_6) {
			money = money - RAMCost;
			currentRAM = RAM_6;
			RAMNext = RAM_7;
			RAMCost = RAM_7_cost;
			RAMSell = RAM_6_sell;
			computerSellPrice2 = computerSellPrice2 + RAMSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentRAM").innerHTML = currentRAM;
			document.getElementById("RAM").innerHTML = currentRAM;
			document.getElementById("RAMCost").innerHTML = RAMCost;
			document.getElementById("RAMNext").innerHTML = RAMNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(RAMNext === RAM_7) {
			money = money - RAMCost;
			currentRAM = RAM_7;
			RAMNext = RAM_8;
			RAMCost = RAM_8_cost;
			RAMSell = RAM_7_sell;
			computerSellPrice2 = computerSellPrice2 + RAMSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentRAM").innerHTML = currentRAM;
			document.getElementById("RAM").innerHTML = currentRAM;
			document.getElementById("RAMCost").innerHTML = RAMCost;
			document.getElementById("RAMNext").innerHTML = RAMNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(RAMNext === RAM_8) {
			money = money - RAMCost;
			currentRAM = RAM_8;
			RAMNext = "none";
			RAMSell = RAM_8_sell;
			computerSellPrice2 = computerSellPrice2 + RAMSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentRAM").innerHTML = currentRAM;
			document.getElementById("RAM").innerHTML = currentRAM;
			document.getElementById("RAMCost").innerHTML = RAMCost;
			document.getElementById("RAMNext").innerHTML = RAMNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
			document.getElementById("RAMUpgradeBtn").innerHTML = "All Upgrades Completed";
			document.getElementById("RAMUpgradeBtn").disabled = true;
		}
	}
}

function upgradeHDD() {
	if(HDDCost <= money) {
		if(HDDNext === HDD_1) {
			money = money - HDDCost;
			currentHDD = HDD_1;
			HDDNext = HDD_2;
			HDDCost = HDD_2_cost;
			HDDSell = HDD_1_sell;
			computerSellPrice2 = computerSellPrice2 + HDDSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentHDD").innerHTML = currentHDD;
			document.getElementById("HDD").innerHTML = currentHDD;
			document.getElementById("HDDCost").innerHTML = HDDCost;
			document.getElementById("HDDNext").innerHTML = HDDNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(HDDNext === HDD_2) {
			money = money - HDDCost;
			currentHDD = HDD_2;
			HDDNext = HDD_3;
			HDDCost = HDD_3_cost;
			HDDSell = HDD_2_sell;
			computerSellPrice2 = computerSellPrice2 + HDDSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentHDD").innerHTML = currentHDD;
			document.getElementById("HDD").innerHTML = currentHDD;
			document.getElementById("HDDCost").innerHTML = HDDCost;
			document.getElementById("HDDNext").innerHTML = HDDNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(HDDNext === HDD_3) {
			money = money - HDDCost;
			currentHDD = HDD_3;
			HDDNext = HDD_4;
			HDDCost = HDD_4_cost;
			HDDSell = HDD_3_sell;
			computerSellPrice2 = computerSellPrice2 + HDDSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentHDD").innerHTML = currentHDD;
			document.getElementById("HDD").innerHTML = currentHDD;
			document.getElementById("HDDCost").innerHTML = HDDCost;
			document.getElementById("HDDNext").innerHTML = HDDNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(HDDNext === HDD_4) {
			money = money - HDDCost;
			currentHDD = HDD_4;
			HDDNext = HDD_5;
			HDDCost = HDD_5_cost;
			HDDSell = HDD_4_sell;
			computerSellPrice2 = computerSellPrice2 + HDDSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentHDD").innerHTML = currentHDD;
			document.getElementById("HDD").innerHTML = currentHDD;
			document.getElementById("HDDCost").innerHTML = HDDCost;
			document.getElementById("HDDNext").innerHTML = HDDNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(HDDNext === HDD_5) {
			money = money - HDDCost;
			currentHDD = HDD_5;
			HDDNext = HDD_6;
			HDDCost = HDD_6_cost;
			HDDSell = HDD_5_sell;
			computerSellPrice2 = computerSellPrice2 + HDDSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentHDD").innerHTML = currentHDD;
			document.getElementById("HDD").innerHTML = currentHDD;
			document.getElementById("HDDCost").innerHTML = HDDCost;
			document.getElementById("HDDNext").innerHTML = HDDNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(HDDNext === HDD_6) {
			money = money - HDDCost;
			currentHDD = HDD_6;
			HDDNext = HDD_7;
			HDDCost = HDD_7_cost;
			HDDSell = HDD_6_sell;
			computerSellPrice2 = computerSellPrice2 + HDDSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentHDD").innerHTML = currentHDD;
			document.getElementById("HDD").innerHTML = currentHDD;
			document.getElementById("HDDCost").innerHTML = HDDCost;
			document.getElementById("HDDNext").innerHTML = HDDNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(HDDNext === HDD_7) {
			money = money - HDDCost;
			currentHDD = HDD_7;
			HDDNext = HDD_8;
			HDDCost = HDD_8_cost;
			HDDSell = HDD_7_sell;
			computerSellPrice2 = computerSellPrice2 + HDDSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentHDD").innerHTML = currentHDD;
			document.getElementById("HDD").innerHTML = currentHDD;
			document.getElementById("HDDCost").innerHTML = HDDCost;
			document.getElementById("HDDNext").innerHTML = HDDNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(HDDNext === HDD_8) {
			money = money - HDDCost;
			currentHDD = HDD_8;
			HDDNext = "none";
			HDDSell = HDD_8_sell;
			computerSellPrice2 = computerSellPrice2 + HDDSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentHDD").innerHTML = currentHDD;
			document.getElementById("HDD").innerHTML = currentHDD;
			document.getElementById("HDDCost").innerHTML = HDDCost;
			document.getElementById("HDDNext").innerHTML = HDDNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("HDDUpgradeBtn").innerHTML = "All Upgrades Completed";
			document.getElementById("HDDUpgradeBtn").disabled = true;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		}
	}
}

function upgradeVideoCard() {
	if(videoCardCost <= money) {
		if(videoCardNext === videoCard_1) {
			money = money - videoCardCost;
			currentVideoCard = videoCard_1;
			videoCardNext = videoCard_2;
			videoCardCost = videoCard_2_cost;
			videoCardSell = videoCard_1_sell;
			computerSellPrice2 = computerSellPrice2 + videoCardSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentVideoCard").innerHTML = currentVideoCard;
			document.getElementById("videoCard").innerHTML = currentVideoCard;
			document.getElementById("videoCardCost").innerHTML = videoCardCost;
			document.getElementById("videoCardNext").innerHTML = videoCardNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(videoCardNext === videoCard_2) {
			money = money - videoCardCost;
			currentVideoCard = videoCard_2;
			videoCardNext = videoCard_3;
			videoCardCost = videoCard_3_cost;
			videoCardSell = videoCard_2_sell;
			computerSellPrice2 = computerSellPrice2 + videoCardSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentVideoCard").innerHTML = currentVideoCard;
			document.getElementById("videoCard").innerHTML = currentVideoCard;
			document.getElementById("videoCardCost").innerHTML = videoCardCost;
			document.getElementById("videoCardNext").innerHTML = videoCardNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(videoCardNext === videoCard_3) {
			money = money - videoCardCost;
			currentVideoCard = videoCard_3;
			videoCardNext = videoCard_4;
			videoCardCost = videoCard_4_cost;
			videoCardSell = videoCard_3_sell;
			computerSellPrice2 = computerSellPrice2 + videoCardSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentVideoCard").innerHTML = currentVideoCard;
			document.getElementById("videoCard").innerHTML = currentVideoCard;
			document.getElementById("videoCardCost").innerHTML = videoCardCost;
			document.getElementById("videoCardNext").innerHTML = videoCardNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(videoCardNext === videoCard_4) {
			money = money - videoCardCost;
			currentVideoCard = videoCard_4;
			videoCardNext = videoCard_5;
			videoCardCost = videoCard_5_cost;
			videoCardSell = videoCard_4_sell;
			computerSellPrice2 = computerSellPrice2 + videoCardSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentVideoCard").innerHTML = currentVideoCard;
			document.getElementById("videoCard").innerHTML = currentVideoCard;
			document.getElementById("videoCardCost").innerHTML = videoCardCost;
			document.getElementById("videoCardNext").innerHTML = videoCardNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(videoCardNext === videoCard_5) {
			money = money - videoCardCost;
			currentVideoCard = videoCard_5;
			videoCardNext = videoCard_6;
			videoCardCost = videoCard_6_cost;
			videoCardSell = videoCard_5_sell;
			computerSellPrice2 = computerSellPrice2 + videoCardSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentVideoCard").innerHTML = currentVideoCard;
			document.getElementById("videoCard").innerHTML = currentVideoCard;
			document.getElementById("videoCardCost").innerHTML = videoCardCost;
			document.getElementById("videoCardNext").innerHTML = videoCardNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(videoCardNext === videoCard_6) {
			money = money - videoCardCost;
			currentVideoCard = videoCard_6;
			videoCardNext = videoCard_7;
			videoCardCost = videoCard_7_cost;
			videoCardSell = videoCard_6_sell;
			computerSellPrice2 = computerSellPrice2 + videoCardSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentVideoCard").innerHTML = currentVideoCard;
			document.getElementById("videoCard").innerHTML = currentVideoCard;
			document.getElementById("videoCardCost").innerHTML = videoCardCost;
			document.getElementById("videoCardNext").innerHTML = videoCardNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(videoCardNext === videoCard_7) {
			money = money - videoCardCost;
			currentVideoCard = videoCard_7;
			videoCardNext = videoCard_8;
			videoCardCost = videoCard_8_cost;
			videoCardSell = videoCard_7_sell;
			computerSellPrice2 = computerSellPrice2 + videoCardSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentVideoCard").innerHTML = currentVideoCard;
			document.getElementById("videoCard").innerHTML = currentVideoCard;
			document.getElementById("videoCardCost").innerHTML = videoCardCost;
			document.getElementById("videoCardNext").innerHTML = videoCardNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(videoCardNext === videoCard_8) {
			money = money - videoCardCost;
			currentVideoCard = videoCard_8;
			videoCardNext = videoCard_9;
			videoCardCost = videoCard_9_cost;
			videoCardSell = videoCard_8_sell;
			computerSellPrice2 = computerSellPrice2 + videoCardSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentVideoCard").innerHTML = currentVideoCard;
			document.getElementById("videoCard").innerHTML = currentVideoCard;
			document.getElementById("videoCardCost").innerHTML = videoCardCost;
			document.getElementById("videoCardNext").innerHTML = videoCardNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(videoCardNext === videoCard_9) {
			money = money - videoCardCost;
			currentVideoCard = videoCard_9;
			videoCardNext = videoCard_10;
			videoCardCost = videoCard_10_cost;
			videoCardSell = videoCard_9_sell;
			computerSellPrice2 = computerSellPrice2 + videoCardSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentVideoCard").innerHTML = currentVideoCard;
			document.getElementById("videoCard").innerHTML = currentVideoCard;
			document.getElementById("videoCardCost").innerHTML = videoCardCost;
			document.getElementById("videoCardNext").innerHTML = videoCardNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(videoCardNext === videoCard_10) {
			money = money - videoCardCost;
			currentVideoCard = videoCard_10;
			videoCardNext = "none";
			videoCardSell = videoCard_10_sell;
			computerSellPrice2 = computerSellPrice2 + videoCardSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentVideoCard").innerHTML = currentVideoCard;
			document.getElementById("videoCard").innerHTML = currentVideoCard;
			document.getElementById("videoCardCost").innerHTML = videoCardCost;
			document.getElementById("videoCardNext").innerHTML = videoCardNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("videoCardUpgradeBtn").innerHTML = "All Upgrades Completed";
			document.getElementById("videoCardUpgradeBtn").disabled = true;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		}
	}
}

function upgradeScreenSize() {
	if(screenSizeCost <= money) {
		if(screenSizeNext === screenSize_1) {
			money = money - screenSizeCost;
			currentScreenSize = screenSize_1;
			screenSizeNext = screenSize_2;
			screenSizeCost = screenSize_2_cost;
			screenSizeSell = screenSize_1_sell;
			computerSellPrice2 = computerSellPrice2 + screenSizeSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentScreenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSizeCost").innerHTML = screenSizeCost;
			document.getElementById("screenSizeNext").innerHTML = screenSizeNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(screenSizeNext === screenSize_2) {
			money = money - screenSizeCost;
			currentScreenSize = screenSize_2;
			screenSizeNext = screenSize_3;
			screenSizeCost = screenSize_3_cost;
			screenSizeSell = screenSize_2_sell;
			computerSellPrice2 = computerSellPrice2 + screenSizeSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentScreenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSizeCost").innerHTML = screenSizeCost;
			document.getElementById("screenSizeNext").innerHTML = screenSizeNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(screenSizeNext === screenSize_3) {
			money = money - screenSizeCost;
			currentScreenSize = screenSize_3;
			screenSizeNext = screenSize_4;
			screenSizeCost = screenSize_4_cost;
			screenSizeSell = screenSize_3_sell;
			computerSellPrice2 = computerSellPrice2 + screenSizeSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentScreenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSizeCost").innerHTML = screenSizeCost;
			document.getElementById("screenSizeNext").innerHTML = screenSizeNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(screenSizeNext === screenSize_4) {
			money = money - screenSizeCost;
			currentScreenSize = screenSize_4;
			screenSizeNext = screenSize_5;
			screenSizeCost = screenSize_5_cost;
			screenSizeSell = screenSize_4_sell;
			computerSellPrice2 = computerSellPrice2 + screenSizeSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentScreenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSizeCost").innerHTML = screenSizeCost;
			document.getElementById("screenSizeNext").innerHTML = screenSizeNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(screenSizeNext === screenSize_5) {
			money = money - screenSizeCost;
			currentScreenSize = screenSize_5;
			screenSizeNext = screenSize_6;
			screenSizeCost = screenSize_6_cost;
			screenSizeSell = screenSize_5_sell;
			computerSellPrice2 = computerSellPrice2 + screenSizeSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentScreenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSizeCost").innerHTML = screenSizeCost;
			document.getElementById("screenSizeNext").innerHTML = screenSizeNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(screenSizeNext === screenSize_6) {
			money = money - screenSizeCost;
			currentScreenSize = screenSize_6;
			screenSizeNext = screenSize_7;
			screenSizeCost = screenSize_7_cost;
			screenSizeSell = screenSize_6_sell;
			computerSellPrice2 = computerSellPrice2 + screenSizeSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentScreenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSizeCost").innerHTML = screenSizeCost;
			document.getElementById("screenSizeNext").innerHTML = screenSizeNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(screenSizeNext === screenSize_7) {
			money = money - screenSizeCost;
			currentScreenSize = screenSize_7;
			screenSizeNext = screenSize_8;
			screenSizeCost = screenSize_8_cost;
			screenSizeSell = screenSize_7_sell;
			computerSellPrice2 = computerSellPrice2 + screenSizeSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentScreenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSizeCost").innerHTML = screenSizeCost;
			document.getElementById("screenSizeNext").innerHTML = screenSizeNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(screenSizeNext === screenSize_8) {
			money = money - screenSizeCost;
			currentScreenSize = screenSize_8;
			screenSizeNext = screenSize_9;
			screenSizeCost = screenSize_9_cost;
			screenSizeSell = screenSize_8_sell;
			computerSellPrice2 = computerSellPrice2 + screenSizeSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentScreenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSizeCost").innerHTML = screenSizeCost;
			document.getElementById("screenSizeNext").innerHTML = screenSizeNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(screenSizeNext === screenSize_9) {
			money = money - screenSizeCost;
			currentScreenSize = screenSize_9;
			screenSizeNext = screenSize_10;
			screenSizeCost = screenSize_10_cost;
			screenSizeSell = screenSize_9_sell;
			computerSellPrice2 = computerSellPrice2 + screenSizeSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentScreenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSizeCost").innerHTML = screenSizeCost;
			document.getElementById("screenSizeNext").innerHTML = screenSizeNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		}else if(screenSizeNext === screenSize_10) {
			money = money - screenSizeCost;
			currentScreenSize = screenSize_10;
			screenSizeNext = screenSize_11;
			screenSizeCost = screenSize_11_cost;
			screenSizeSell = screenSize_10_sell;
			computerSellPrice2 = computerSellPrice2 + screenSizeSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentScreenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSizeCost").innerHTML = screenSizeCost;
			document.getElementById("screenSizeNext").innerHTML = screenSizeNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(screenSizeNext === screenSize_11) {
			money = money - screenSizeCost;
			currentScreenSize = screenSize_11;
			screenSizeNext = screenSize_12;
			screenSizeCost = screenSize_12_cost;
			screenSizeSell = screenSize_11_sell;
			computerSellPrice2 = computerSellPrice2 + screenSizeSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentScreenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSizeCost").innerHTML = screenSizeCost;
			document.getElementById("screenSizeNext").innerHTML = screenSizeNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(screenSizeNext === screenSize_12) {
			money = money - screenSizeCost;
			currentScreenSize = screenSize_12;
			screenSizeNext = screenSize_13;
			screenSizeCost = screenSize_13_cost;
			screenSizeSell = screenSize_12_sell;
			computerSellPrice2 = computerSellPrice2 + screenSizeSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentScreenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSizeCost").innerHTML = screenSizeCost;
			document.getElementById("screenSizeNext").innerHTML = screenSizeNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		} else if(screenSizeNext === screenSize_13) {
			money = money - screenSizeCost;
			currentScreenSize = screenSize_13;
			screenSizeNext = "none";
			screenSizeSell = screenSize_13_sell;
			computerSellPrice2 = computerSellPrice2 + screenSizeSell;
			computerSellPrice = computerSellPrice2;
			document.getElementById("currentScreenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSize").innerHTML = currentScreenSize;
			document.getElementById("screenSizeCost").innerHTML = screenSizeCost;
			document.getElementById("screenSizeNext").innerHTML = screenSizeNext;
			document.getElementById("money").innerHTML = money;
			document.getElementById("screenSizeUpgradeBtn").innerHTML = "All Upgrades Completed";
			document.getElementById("screenSizeUpgradeBtn").disabled = true;
			document.getElementById("computerSellPrice2").innerHTML = computerSellPrice2;
			document.getElementById("computerSellPrice").innerHTML = computerSellPrice;
		}
	}
}

function buyFactory() {
	if(factoryCost <= money) {
		factories = factories + 1;
		computersBoughtPerClick = computersBoughtPerClick + 1;
		factoryCost = factoryCost * 2;
		money = money - factoryCost;
		document.getElementById("factoryCost").innerHTML = factoryCost;
		document.getElementById("money").innerHTML = money;
		document.getElementById("computersBoughtPerClick").innerHTML = computersBoughtPerClick;
		document.getElementById("factories").innerHTML = factories;
	}
}

function transportSelect(transportName, sales, transportTime, cost, transportBought, transportEnabled, currentSelected) {
	chosenDelivery = transportName
	deliveryTime2 = transportTime
	currentlySelected = currentSelected 
	document.getElementById("chosenDelivery").innerHTML = chosenDelivery;
	document.getElementById("computersSoldPerClick").innerHTML = sales;
	document.getElementById("deliveryTime2").innerHTML = deliveryTime2;
	if(transportBought == true) {
		if(transportEnabled == true) {
			document.getElementById("deliveryButton").innerHTML = "Enabled";
			document.getElementById("deliveryButton").disabled = true;
		} else {
			document.getElementById("deliveryButton").innerHTML = "Enable";
			document.getElementById("deliveryButton").disabled = false;
		}
	} else {
		document.getElementById("deliveryButton").innerHTML = "Buy " + transportName + " (Cost: £" + cost + ")";
		document.getElementById("deliveryButton").disabled = false;
	}
}

function buyTransport() {
	if(currentlySelected == "hand") {
		if(handBought = true) {
			handEnabled = false;
			carEnabled = false;
			vanEnabled = false;
			truckEnabled = false;
			trainEnabled = false;
			planeEnabled = false;
			shipEnabled = false;
			handEnabled = true;
			document.getElementById("deliveryButton").innerHTML = "Enabled";
			document.getElementById("deliveryButton").disabled = true;
			computersSoldPerClick = handSales;
			deliveryTime = handTime;
			document.getElementById("deliveryTime").innerHTML = deliveryTime;
		} else {
			if(handCost <= money) {
				handEnabled = false;
				carEnabled = false;
				vanEnabled = false;
				truckEnabled = false;
				trainEnabled = false;
				planeEnabled = false;
				shipEnabled = false;
				handEnabled = true;
				document.getElementById("deliveryButton").innerHTML = "Enabled";
				document.getElementById("deliveryButton").disabled = true;
				computersSoldPerClick = handSales;
				deliveryTime = handTime;
				document.getElementById("deliveryTime").innerHTML = deliveryTime;
				handBought = true;
			}		
		}
	} else if(currentlySelected == "car") {
		if(carBought = true) {
			handEnabled = false;
			carEnabled = false;
			vanEnabled = false;
			truckEnabled = false;
			trainEnabled = false;
			planeEnabled = false;
			shipEnabled = false;
			carEnabled = true;
			document.getElementById("deliveryButton").innerHTML = "Enabled";
			document.getElementById("deliveryButton").disabled = true;
			computersSoldPerClick = carSales;
			deliveryTime = carTime;
			document.getElementById("deliveryTime").innerHTML = deliveryTime;
		} else {
			if(carCost <= money) {
				handEnabled = false;
				carEnabled = false;
				vanEnabled = false;
				truckEnabled = false;
				trainEnabled = false;
				planeEnabled = false;
				shipEnabled = false;
				carEnabled = true;
				document.getElementById("deliveryButton").innerHTML = "Enabled";
				document.getElementById("deliveryButton").disabled = true;
				computersSoldPerClick = carSales;
				deliveryTime = carTime;
				document.getElementById("deliveryTime").innerHTML = deliveryTime;
				carBought = true;
			}		
		}
	} else if(currentlySelected == "van") {
		if(vanBought = true) {
			handEnabled = false;
			carEnabled = false;
			vanEnabled = false;
			truckEnabled = false;
			trainEnabled = false;
			planeEnabled = false;
			shipEnabled = false;
			vanEnabled = true;
			document.getElementById("deliveryButton").innerHTML = "Enabled";
			document.getElementById("deliveryButton").disabled = true;
			computersSoldPerClick = vanSales;
			deliveryTime = vanTime;
			document.getElementById("deliveryTime").innerHTML = deliveryTime;
		} else {
			if(vanCost <= money) {
				handEnabled = false;
				carEnabled = false;
				vanEnabled = false;
				truckEnabled = false;
				trainEnabled = false;
				planeEnabled = false;
				shipEnabled = false;
				vanEnabled = true;
				document.getElementById("deliveryButton").innerHTML = "Enabled";
				document.getElementById("deliveryButton").disabled = true;
				computersSoldPerClick = vanSales;
				deliveryTime = vanTime;
				document.getElementById("deliveryTime").innerHTML = deliveryTime;
				vanBought = true;
			}		
		}
	} else if(currentlySelected == "truck") {
		if(truckBought = true) {
			handEnabled = false;
			carEnabled = false;
			vanEnabled = false;
			truckEnabled = false;
			trainEnabled = false;
			planeEnabled = false;
			shipEnabled = false;
			truckEnabled = true;
			document.getElementById("deliveryButton").innerHTML = "Enabled";
			document.getElementById("deliveryButton").disabled = true;
			computersSoldPerClick = truckSales;
			deliveryTime = truckTime;
			document.getElementById("deliveryTime").innerHTML = deliveryTime;
		} else {
			if(truckCost <= money) {
				handEnabled = false;
				carEnabled = false;
				vanEnabled = false;
				truckEnabled = false;
				trainEnabled = false;
				planeEnabled = false;
				shipEnabled = false;
				truckEnabled = true;
				document.getElementById("deliveryButton").innerHTML = "Enabled";
				document.getElementById("deliveryButton").disabled = true;
				computersSoldPerClick = truckSales;
				deliveryTime = truckTime;
				document.getElementById("deliveryTime").innerHTML = deliveryTime;
				truckBought = true;
			}		
		}
	} else if(currentlySelected == "train") {
		if(trainBought = true) {
			handEnabled = false;
			carEnabled = false;
			vanEnabled = false;
			truckEnabled = false;
			trainEnabled = false;
			planeEnabled = false;
			shipEnabled = false;
			trainEnabled = true;
			document.getElementById("deliveryButton").innerHTML = "Enabled";
			document.getElementById("deliveryButton").disabled = true;
			computersSoldPerClick = trainSales;
			deliveryTime = trainTime;
			document.getElementById("deliveryTime").innerHTML = deliveryTime;
		} else {
			if(trainCost <= money) {
				handEnabled = false;
				carEnabled = false;
				vanEnabled = false;
				truckEnabled = false;
				trainEnabled = false;
				planeEnabled = false;
				shipEnabled = false;
				trainEnabled = true;
				document.getElementById("deliveryButton").innerHTML = "Enabled";
				document.getElementById("deliveryButton").disabled = true;
				computersSoldPerClick = trainSales;
				deliveryTime = trainTime;
				document.getElementById("deliveryTime").innerHTML = deliveryTime;
				trainBought = true;
			}		
		}
	} else if(currentlySelected == "plane") {
		if(planeBought = true) {
			handEnabled = false;
			carEnabled = false;
			vanEnabled = false;
			truckEnabled = false;
			trainEnabled = false;
			planeEnabled = false;
			shipEnabled = false;
			planeEnabled = true;
			document.getElementById("deliveryButton").innerHTML = "Enabled";
			document.getElementById("deliveryButton").disabled = true;
			computersSoldPerClick = planeSales;
			deliveryTime = planeTime;
			document.getElementById("deliveryTime").innerHTML = deliveryTime;
		} else {
			if(planeCost <= money) {
				handEnabled = false;
				carEnabled = false;
				vanEnabled = false;
				truckEnabled = false;
				trainEnabled = false;
				planeEnabled = false;
				shipEnabled = false;
				planeEnabled = true;
				document.getElementById("deliveryButton").innerHTML = "Enabled";
				document.getElementById("deliveryButton").disabled = true;
				computersSoldPerClick = planeSales;
				deliveryTime = planeTime;
				document.getElementById("deliveryTime").innerHTML = deliveryTime;
				planeBought = true;
			}		
		}
	} else if(currentlySelected == "ship") {
		if(shipBought = true) {
			handEnabled = false;
			carEnabled = false;
			vanEnabled = false;
			truckEnabled = false;
			trainEnabled = false;
			planeEnabled = false;
			shipEnabled = false;
			shipEnabled = true;
			document.getElementById("deliveryButton").innerHTML = "Enabled";
			document.getElementById("deliveryButton").disabled = true;
			computersSoldPerClick = shipSales;
			deliveryTime = shipTime;
			document.getElementById("deliveryTime").innerHTML = deliveryTime;
		} else {
			if(shipCost <= money) {
				handEnabled = false;
				carEnabled = false;
				vanEnabled = false;
				truckEnabled = false;
				trainEnabled = false;
				planeEnabled = false;
				shipEnabled = false;
				shipEnabled = true;
				document.getElementById("deliveryButton").innerHTML = "Enabled";
				document.getElementById("deliveryButton").disabled = true;
				computersSoldPerClick = shipSales;
				deliveryTime = shipTime;
				document.getElementById("deliveryTime").innerHTML = deliveryTime;
				shipBought = true;
			}		
		}
	}
}

