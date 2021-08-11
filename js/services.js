// set time slideshow of trader class
var traderCount = 1;
setInterval(function(){
    document.getElementById('trader-radio' + traderCount).checked = true;
    traderCount++;
    if (traderCount > 5){
        traderCount = 1;
    }
},5000);

// set time slideshow of entry class
var entryCount = 1;
setInterval(function(){
    document.getElementById('entry-radio' + entryCount).checked = true;
    entryCount++;
    if (entryCount > 5){
        entryCount = 1;
    }
},5000);