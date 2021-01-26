let temperature = 15
//put functions in temperature going from least to most otherwise it won't work properly
function coatWeather() {
if (temperature <1){ 
    document.write('stay inside!');
} else if (temperature <20){
    document.write('put on a coat and a hat!')
} else if (temperature <50){
    document.write('put your coat on!')
} else {document.write('no worries')};
};


coatWeather();

