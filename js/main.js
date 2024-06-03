// const _0x36237e = _0x1db5;
// (function(_0x2999ea, _0x51886a) {
//     const _0x52309a = _0x1db5
//       , _0x27ecd6 = _0x2999ea();
//     while (!![]) {
//         try {
//             const _0x42af25 = -parseInt(_0x52309a(0x1b4)) / 0x1 * (parseInt(_0x52309a(0x199)) / 0x2) + -parseInt(_0x52309a(0x181)) / 0x3 + parseInt(_0x52309a(0x1ab)) / 0x4 + parseInt(_0x52309a(0x183)) / 0x5 * (parseInt(_0x52309a(0x1b6)) / 0x6) + -parseInt(_0x52309a(0x1b1)) / 0x7 * (-parseInt(_0x52309a(0x1ad)) / 0x8) + -parseInt(_0x52309a(0x19d)) / 0x9 * (parseInt(_0x52309a(0x17d)) / 0xa) + parseInt(_0x52309a(0x187)) / 0xb;
//             if (_0x42af25 === _0x51886a)
//                 break;
//             else
//                 _0x27ecd6['push'](_0x27ecd6['shift']());
//         } catch (_0x56b52d) {
//             _0x27ecd6['push'](_0x27ecd6['shift']());
//         }
//     }
// }(_0x309e, 0xcef4f),
// $(document)['ready'](function() {
//     const _0x4e9326 = _0x1db5;
//     $('[data-toggle=\x22tooltip\x22]')[_0x4e9326(0x1a0)](),
//     $('#query-form')[_0x4e9326(0x1bb)](function(_0x315774) {
//         submitRequest(_0x315774);
//     });
// }),
// $(_0x36237e(0x193))[_0x36237e(0x18d)](function() {
//     const _0x207ca4 = _0x36237e
//       , _0x302615 = $[_0x207ca4(0x1b2)]($(_0x207ca4(0x193))[_0x207ca4(0x1bd)]())
//       , _0x36fdb6 = _0x302615[_0x207ca4(0x1a7)]
//       , _0x377b92 = _0x302615[_0x207ca4(0x18c)];
//     if (_0x36fdb6 > 0x5a || _0x36fdb6 < -0x5a || _0x377b92 > 0xb4 || _0x377b92 < -0xb4) {
//         setDataErrorMessages();
//         return;
//     }
//     submitRequest(_0x36fdb6, _0x377b92);
// }));
// let weatherTypeTranslation = {
//     'pcloudy': _0x36237e(0x198),
//     'mcloudy': _0x36237e(0x1ba),
//     'lightrain': _0x36237e(0x1a8),
//     'oshower': 'occasional\x20shower',
//     'ishower': _0x36237e(0x186),
//     'lightsnow': 'light\x20snow',
//     'rainsnow': _0x36237e(0x1b7),
//     'tstorm': _0x36237e(0x196),
//     'tsrain': _0x36237e(0x17c)
// };
// function formatDate(_0xe46a0d) {
//     const _0x12ba5d = _0x36237e;
//     let _0x574512 = String(_0xe46a0d)
//       , _0x57401a = _0x574512[_0x12ba5d(0x1be)](0x0, 0x4)
//       , _0x181f62 = _0x574512[_0x12ba5d(0x1be)](0x4, 0x6)
//       , _0x226e6d = _0x574512[_0x12ba5d(0x1be)](0x6, 0x8)
//       , _0x4cdf03 = new Date(_0x57401a,_0x181f62 - 0x1,_0x226e6d);
//     return _0x4cdf03[_0x12ba5d(0x1a5)]()[_0x12ba5d(0x1be)](0x0, 0xa);
// }
// function _0x1db5(_0x39bbae, _0x8f1255) {
//     const _0x309ec1 = _0x309e();
//     return _0x1db5 = function(_0x1db550, _0x525ad4) {
//         _0x1db550 = _0x1db550 - 0x17b;
//         let _0xceef77 = _0x309ec1[_0x1db550];
//         return _0xceef77;
//     }
//     ,
//     _0x1db5(_0x39bbae, _0x8f1255);
// }
// function formatResults(_0x53b3eb) {
//     const _0x3f1ca3 = _0x36237e;
//     var _0x19b7d3 = JSON[_0x3f1ca3(0x1ae)](_0x53b3eb)
//       , _0x53a8dd = 0x0;
//     console['log'](_0x53b3eb);
//     if (_0x19b7d3[_0x3f1ca3(0x18e)]['length'] == 0x0)
//         setNotFoundMessages();
//     else {
//         $(_0x3f1ca3(0x19c))[_0x3f1ca3(0x1b5)](''),
//         $(_0x3f1ca3(0x1a9))[_0x3f1ca3(0x1b5)](_0x3f1ca3(0x19f));
//         var _0x285cc1 = '';
//         _0x285cc1 += _0x3f1ca3(0x1b0),
//         _0x19b7d3[_0x3f1ca3(0x18e)][_0x3f1ca3(0x18f)](function(_0x499934, _0x7f18ac) {
//             const _0x4b7f06 = _0x3f1ca3;
//             _0x53a8dd++,
//             _0x285cc1 += _0x4b7f06(0x19b),
//             _0x285cc1 += '<p\x20class=\x27weather-date\x27>' + formatDate(_0x499934[_0x4b7f06(0x17b)]) + _0x4b7f06(0x18a),
//             _0x285cc1 += _0x4b7f06(0x191) + _0x499934[_0x4b7f06(0x19a)] + _0x4b7f06(0x192) + _0x499934[_0x4b7f06(0x19a)] + _0x4b7f06(0x1a1),
//             _0x285cc1 += _0x4b7f06(0x1b9);
//             var _0x271984 = weatherTypeTranslation[_0x499934[_0x4b7f06(0x19a)]];
//             _0x271984 == undefined && (_0x271984 = _0x499934['weather']);
//             ;_0x285cc1 += _0x4b7f06(0x1bf) + _0x271984[_0x4b7f06(0x1af)]() + _0x4b7f06(0x18a),
//             _0x285cc1 += _0x4b7f06(0x189) + _0x499934['temp2m'][_0x4b7f06(0x194)] + _0x4b7f06(0x188),
//             _0x285cc1 += '<p\x20class=\x27weather-temperatures\x27>Min:\x20' + _0x499934[_0x4b7f06(0x190)][_0x4b7f06(0x180)] + _0x4b7f06(0x188),
//             _0x285cc1 += _0x4b7f06(0x1aa),
//             _0x285cc1 += '</div></div>';
//         }),
//         _0x285cc1 += '</div>',
//         _0x53a8dd > 0x0 ? ($(_0x3f1ca3(0x1a6))[_0x3f1ca3(0x1b3)](_0x285cc1),
//         $(_0x3f1ca3(0x185))[_0x3f1ca3(0x1a0)]({
//             'trigger': _0x3f1ca3(0x1b8),
//             'delay': {
//                 'show': 0x3e8,
//                 'hide': 0x0
//             }
//         })) : setNotFoundMessages();
//     }
// }
// function submitRequest(_0x2689e1, _0x211e65) {
//     const _0x39281b = _0x36237e;
//     var _0x13392c;
//     _0x13392c && _0x13392c[_0x39281b(0x197)](),
//     $(_0x39281b(0x19c))[_0x39281b(0x1b5)](_0x39281b(0x1ac)),
//     $('#results')['text'](''),
//     _0x13392c = $['ajax']({
//         'url': _0x39281b(0x1a3),
//         'type': _0x39281b(0x17f),
//         'data': {
//             'lon': _0x211e65,
//             'lat': _0x2689e1,
//             'product': _0x39281b(0x19e),
//             'output': _0x39281b(0x182)
//         }
//     }),
//     _0x13392c[_0x39281b(0x1a4)](function(_0x561dd6, _0x21b18d, _0x2414a1) {
//         formatResults(_0x561dd6),
//         toolTipReset();
//     }),
//     _0x13392c[_0x39281b(0x195)](function(_0x50b0bd, _0x2c1851, _0x5a0e89) {
//         const _0x30cad1 = _0x39281b;
//         $(_0x30cad1(0x1a9))[_0x30cad1(0x1b5)](_0x30cad1(0x18b)),
//         $(_0x30cad1(0x1a6))['text']('');
//     }),
//     _0x13392c[_0x39281b(0x1bc)](function() {});
// }
// function _0x309e() {
//     const _0x42d6d7 = ['#results', 'lat', 'light\x20rain', '#search-results-heading', '</div>', '1020132pSCGve', 'Getting\x20forecast\x20...', '7208SbtfAd', 'parse', 'toUpperCase', '<div\x20class=\x27forecast-block\x20row\x20row-cols-7\x20row-cols-md-7\x20row-cols-lg-7\x20g-4\x27>', '3689eXjLwT', 'parseJSON', 'html', '12318zNSdxc', 'text', '308010hYQSXr', 'freezing\x20rain', 'hover', '<div\x20class=\x27card-body\x27>', 'mostly\x20cloudy', 'submit', 'always', 'val', 'substring', '<p\x20class=\x27weather-description\x27>', 'date', 'thunderstorm', '10QrbYLn', 'Oops,\x20no\x20forecast\x20found,\x20please\x20change\x20city.', 'GET', 'min', '3130014GyhkkK', 'json', '25xioYus', 'hide', '[data-toggle=\x22tooltip\x22]', 'isolated\x20shower', '36523663xsrncc', '\x20ºC</p>', '<p\x20class=\x27weather-temperatures\x27>Max:\x20', '</p>', 'An\x20error\x20occurred.\x20Please\x20try\x20again.', 'lon', 'change', 'dataseries', 'forEach', 'temp2m', '<div\x20class=\x27weather-icon-div\x27><img\x20class=\x27weather-icon\x27\x20src=\x27images/', '.png\x27\x20alt=\x27', '#citySelected', 'max', 'fail', 'thunderstorm\x20possible', 'abort', 'partly\x20cloudy', '254BOWCVu', 'weather', '<div\x20class=\x27col\x20bm-2\x27><div\x20class=\x27card\x20h-100\x27>', '#get-results-heading', '7663041znxeAO', 'civillight', '7\x20Day\x20Forecast', 'tooltip', '\x27></div>', 'Oops,\x20the\x20data\x20is\x20wrong\x20for\x20that\x20city.\x20Contact\x20the\x20webmaster.', 'https://www.7timer.info/bin/api.pl', 'done', 'toString'];
//     _0x309e = function() {
//         return _0x42d6d7;
//     }
//     ;
//     return _0x309e();
// }
// function setDataErrorMessages() {
//     const _0x4d9dea = _0x36237e;
//     $('#get-results-heading')[_0x4d9dea(0x1b5)](_0x4d9dea(0x1a2)),
//     $(_0x4d9dea(0x1a6))[_0x4d9dea(0x1b5)]('');
// }
// function setNotFoundMessages() {
//     const _0x49db88 = _0x36237e;
//     $(_0x49db88(0x19c))[_0x49db88(0x1b5)](_0x49db88(0x17e)),
//     $(_0x49db88(0x1a6))[_0x49db88(0x1b5)]('');
// }
// function toolTipReset() {
//     const _0x4c0e44 = _0x36237e;
//     $('.tooltip')[_0x4c0e44(0x1a0)](_0x4c0e44(0x184));
// }

document.addEventListener('DOMContentLoaded', function() {
    document?.querySelectorAll('[data-toggle="tooltip"]')?.forEach(function(elem) {
        new bootstrap.Tooltip(elem);
    });

    document.getElementById('query-form').addEventListener('submit', function(event) {
        event.preventDefault();
        submitRequest();
    });

    document.getElementById('citySelected').addEventListener('change', function() {
        const city = document.getElementById('citySelected').value;
        const coordinates = JSON.parse(city);
        const lat = coordinates.lat;
        const lon = coordinates.lon;

        if (lat > 90 || lat < -90 || lon > 180 || lon < -180) {
            setDataErrorMessages();
            return;
        }

        submitRequest(lat, lon);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const cities = [
        {"lat":"52.367","lon":"4.904", "name":"Amsterdam, Netherlands"},
        {"lat":"23.0225","lon":"72.5714", "name":"Ahmedabad"},
        {"lat":"27.1767","lon":"78.0081", "name":"Agra"},
        {"lat":"39.933","lon":"32.859", "name":"Ankara, Turkey"},
        {"lat":"56.134","lon":"12.945", "name":"Åstorp, Sweden"},
        {"lat":"37.983","lon":"23.727", "name":"Athens, Greece"},
        {"lat":"54.597","lon":"-5.930", "name":"Belfast, Northern Ireland, UK"},
        {"lat":"41.387","lon":"2.168", "name":"Barcelona, Spain"},
        {"lat":"52.520","lon":"13.405", "name":"Berlin, Germany"},
        {"lat":"46.948","lon":"7.447", "name":"Bern, Switzerland"},
        {"lat":"43.263","lon":"-2.935", "name":"Bilbao, Basque Country, Spain"},
        {"lat":"50.847","lon":"4.357", "name":"Brussels, Belgium"},
        {"lat":"47.497","lon":"19.040", "name":"Bucharest, Romania"},
        {"lat":"59.329","lon":"18.068", "name":"Budapest, Hungary"},
        {"lat":"12.9716","lon":"77.5946", "name":"Bangalore"},
        {"lat":"51.483","lon":"-3.168", "name":"Cardiff, Wales, UK"},
        {"lat":"50.937","lon":"6.96", "name":"Cologne, Germany"},
        {"lat":"55.676","lon":"12.568", "name":"Copenhagen, Denmark"},
        {"lat":"51.898","lon":"-8.475", "name":"Cork, Ireland"},
        {"lat":"13.0827","lon":"80.2707", "name":"Chennai"},
        {"lat":"30.7333","lon":"76.7794", "name":"Chandigarh"},
        {"lat":"11.0168","lon":"76.9558", "name":"Coimbatore"},
        {"lat":"53.349","lon":"-6.260", "name":"Dublin, Ireland"},
        {"lat":"28.6139","lon":"77.2090", "name":"Delhi"},
        {"lat":"55.953","lon":"-3.188", "name":"Edinburgh, Scotland, UK"},
        {"lat":"43.7696","lon":"11.255", "name":"Florence, Italy"},
        {"lat":"50.110","lon":"8.682", "name":"Frankfurt, Germany"},        
        {"lat":"43.254","lon":"6.637", "name":"French Riviera, France"},
        {"lat":"32.650","lon":"-16.908", "name":"Funchal, Madeira, Portugual"},
        {"lat":"36.140","lon":"-5.353", "name":"Gibraltar, British Territory"},   
        {"lat":"57.708","lon":"11.974", "name":"Gothenburg, Sweden"},     
        {"lat":"53.548","lon":"9.987", "name":"Hamburg, Germany"},
        {"lat":"60.169","lon":"24.938", "name":"Helsinki, Finland"},
        {"lat":"17.3850","lon":"78.4867", "name":"Hyderabad"},
        {"lat":"39.020","lon":"1.482", "name":"Ibiza, Spain"},
        {"lat":"22.7196","lon":"75.8577", "name":"Indore"},
        {"lat":"26.9124","lon":"75.7873", "name":"Jaipur"},
        {"lat":"23.1765","lon":"79.9864", "name":"Jabalpur"},
        {"lat":"50.450","lon":"30.523", "name":"Kyiv, Ukraine"},
        {"lat":"22.5726","lon":"88.3639", "name":"Kolkata"},
        {"lat":"61.115","lon":"10.466", "name":"Lillehammer, Norway"},
        {"lat":"38.722","lon":"-9.139", "name":"Lisbon, Portugual"},
        {"lat":"51.507","lon":"-0.127", "name":"London, England, UK"}, 
        {"lat":"26.8467","lon":"80.9462", "name":"Lucknow"},      
        {"lat":"40.416","lon":"-3.703", "name":"Madrid, Spain"},
        {"lat":"39.695","lon":"3.017", "name":"Mallorca, Spain"},
        {"lat":"53.480","lon":"-2.242", "name":"Manchester, England, UK"},        
        {"lat":"43.296","lon":"5.369", "name":"Marseille, France"},
        {"lat":"27.760","lon":"-15.586", "name":"Maspalomas, Gran Canaria, Spain"},
        {"lat":"45.464","lon":"9.190", "name":"Milan, Italy"},
        {"lat":"48.135","lon":"11.582", "name":"Munich, Germany"},
        {"lat":"19.0760","lon":"72.8777", "name":"Mumbai"},
        {"lat":"9.9252","lon":"78.1198", "name":"Madurai"},
        {"lat":"40.851","lon":"14.268", "name":"Naples, Italy"},
        {"lat":"28.6139","lon":"77.2090", "name":"New Delhi, India"},
        {"lat":"43.034","lon":"-2.417", "name":"Oñati, Basque Country, Spain"},
        {"lat":"59.913","lon":"10.752", "name":"Oslo, Norway"},
        {"lat":"48.856","lon":"2.352", "name":"Paris, France"},
        {"lat":"50.075","lon":"14.437", "name":"Prague, Czech Republic"},
        {"lat":"18.5204","lon":"73.8567", "name":"Pune"},
        {"lat":"25.4358","lon":"81.8463", "name":"Prayagraj"},
        {"lat":"64.146","lon":"-21.942", "name":"Reykjavík, Iceland"},
        {"lat":"56.879","lon":"24.603", "name":"Riga, Latvia"},
        {"lat":"41.902","lon":"12.496", "name":"Rome, Italy"},
        {"lat":"39.453","lon":"-31.127", "name":"Santa Cruz das Flores, Azores, Portugual"},
        {"lat":"28.463","lon":"-16.251", "name":"Santa Cruz de Tenerife, Tenerife, Spain"},
        {"lat":"57.273","lon":"-6.215", "name":"Skye, Scotland, UK"},
        {"lat":"42.697","lon":"23.321", "name":"Sofia, Bulgaria"},
        {"lat":"59.329","lon":"18.068", "name":"Stockholm, Sweden"},
        {"lat":"59.437","lon":"24.753", "name":"Tallinn, Estonia"},
        {"lat":"24.5854","lon":"73.7125", "name":"Udaipur"},
        {"lat":"18.208","lon":"16.373", "name":"Vienna, Austria"},
        {"lat":"52.229","lon":"21.012", "name":"Warsaw, Poland"},
        {"lat":"53.961","lon":"-1.07", "name":"York, England, UK"},
        {"lat":"47.376","lon":"8.541", "name":"Zurich, Switzerland"},
    ];

    const citySelect = document.getElementById("citySelected");

    // Populate the select element
    cities.forEach(city => {
        const option = document.createElement("option");
        option.value = JSON.stringify({ lat: city.lat, lon: city.lon });
        option.text = city.name;
        citySelect.appendChild(option);
    });

    // Initialize Tooltip for each select option
    const selectOptions = document.querySelectorAll('#citySelected option');
    selectOptions.forEach(option => {
        option.addEventListener('mouseover', function() {
            const tooltip = option.getAttribute('title');
            if (tooltip) {
                option.setAttribute('data-tooltip', tooltip);
                option.removeAttribute('title');
            }
        });
        option.addEventListener('mouseleave', function() {
            const tooltip = option.getAttribute('data-tooltip');
            if (tooltip) {
                option.setAttribute('title', tooltip);
                option.removeAttribute('data-tooltip');
            }
        });
    });
});

const weatherTypeTranslation = {
    'pcloudy': 'partly cloudy',
    'mcloudy': 'mostly cloudy',
    'lightrain': 'light rain',
    'oshower': 'occasional shower',
    'ishower': 'isolated shower',
    'lightsnow': 'light snow',
    'rainsnow': 'freezing rain',
    'tstorm': 'thunderstorm',
    'tsrain': 'thunderstorm possible'
};

function formatDate(dateString) {
    if (typeof dateString !== 'string') {
        return '';
    }
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
    const date = new Date(year, month - 1, day);
    return date.toISOString().substring(0, 10);
}


function formatResults(data) {
    const results = JSON.parse(data);
    let count = 0;
    if (results.dataseries.length === 0) {
        setNotFoundMessages();
    } else {
        document.getElementById('get-results-heading').textContent = '';
        document.getElementById('results').textContent = '7 Day Forecast';

        let forecastHtml = '<div class="forecast-block row row-cols-7 row-cols-md-7 row-cols-lg-7 g-4">';
        results.dataseries.forEach(function(forecast) {
            count++;
            forecastHtml += '<div class="col bm-2"><div class="card h-100">';
            forecastHtml += '<p class="weather-date">' + formatDate(forecast.date) + '</p>';
            forecastHtml += '<div class="weather-icon-div"><img class="weather-icon" src="images/' + forecast.weather + '.png" alt="' + forecast.weather + '"></div>';
            forecastHtml += '<p class="weather-description">' + (weatherTypeTranslation[forecast.weather] || forecast.weather) + '</p>';
            forecastHtml += '<p class="weather-temperatures">Max: ' + forecast.temp2m.max + ' ºC</p>';
            forecastHtml += '<p class="weather-temperatures">Min: ' + forecast.temp2m.min + ' ºC</p>';
            forecastHtml += '</div></div>';
        });
        forecastHtml += '</div>';

        if (count > 0) {
            document.getElementById('results').innerHTML = forecastHtml;
            document.querySelectorAll('[data-toggle="tooltip"]').forEach(function(elem) {
                new bootstrap.Tooltip(elem, { trigger: 'hover', delay: { show: 1000, hide: 0 } });
            });
        } else {
            setNotFoundMessages();
        }
    }
}

function submitRequest(lat, lon) {
    let request;
    document.getElementById('get-results-heading').textContent = 'Getting forecast ...';
    document.getElementById('results').textContent = '';

    request = new XMLHttpRequest();
    request.open('GET', 'https://www.7timer.info/bin/api.pl?lon=' + lon + '&lat=' + lat + '&product=civillight&output=json', true);

    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            formatResults(this.response);
            toolTipReset();
        } else {
            setErrorMessages();
        }
    };

    request.onerror = function() {
        setErrorMessages();
    };

    request.send();
}

function setDataErrorMessages() {
    document.getElementById('get-results-heading').textContent = 'Oops, the data is wrong for that city. Contact the webmaster.';
    document.getElementById('results').textContent = '';
}

function setNotFoundMessages() {
    document.getElementById('get-results-heading').textContent = 'Oops, no forecast found, please change city.';
    document.getElementById('results').textContent = '';
}

function setErrorMessages() {
    document.getElementById('get-results-heading').textContent = 'An error occurred. Please try again.';
    document.getElementById('results').textContent = '';
}

function toolTipReset() {
    document.querySelectorAll('.tooltip').forEach(function(elem) {
        bootstrap?.Tooltip?.getInstance(elem).hide();
    });
}

