const Cities = [
    {
        cityName: "Riga",
        averageTemperatureCelsius: { 
            january: { monthName: "JAN", tempCelsius: -4.7 },
            february: { monthName: "FEB", tempCelsius: -4.2 },
            march: { monthName: "MAR", tempCelsius: 0.5 },
            april: { monthName: "APR", tempCelsius: 5.1 },
            may: { monthName: "MAY", tempCelsius: 11.4 },
            june: { monthName: "JUN", tempCelsius: 15.5 },
            july: { monthName: "JUL", tempCelsius: 16.9 },
            august: { monthName: "AUG", tempCelsius: 16.2 },
            september: { monthName: "SEP", tempCelsius: 12 },
            october: { monthName: "OCT", tempCelsius: 7.4 },
            november: { monthName: "NOV", tempCelsius: 2.1 },
            december: { monthName: "DEC", tempCelsius: -2.3 },
        },
        cityPicture: "https://www.daad.lv/files/2022/11/iStock-615926196_1920x900px.jpg",
    },
    {
        cityName: "Vilnius",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: -6.1 },
            february: { monthName: "FEB", tempCelsius: -4.8 },
            march: { monthName: "MAR", tempCelsius: -0.6 },
            april: { monthName: "APR", tempCelsius: 5.7 },
            may: { monthName: "MAY", tempCelsius: 12.5 },
            june: { monthName: "JUN", tempCelsius: 15.8 },
            july: { monthName: "JUL", tempCelsius: 16.9 },
            august: { monthName: "AUG", tempCelsius: 16.3 },
            september: { monthName: "SEP", tempCelsius: 11.6 },
            october: { monthName: "OCT", tempCelsius: 6.6 },
            november: { monthName: "NOV", tempCelsius: 1.2 },
            december: { monthName: "DEC", tempCelsius: -2.9 },
        },
        cityPicture: "https://cdn.britannica.com/26/143426-050-A3F11FE1/town-section-Vilnius-Lithuania.jpg",

    },
    {
        cityName: "Tallinn",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: -2.9 },
            february: { monthName: "FEB", tempCelsius: -3.6 },
            march: { monthName: "MAR", tempCelsius: -0.6 },
            april: { monthName: "APR", tempCelsius: 4.8 },
            may: { monthName: "MAY", tempCelsius: 10.2 },
            june: { monthName: "JUN", tempCelsius: 14.5 },
            july: { monthName: "JUL", tempCelsius: 17.6 },
            august: { monthName: "AUG", tempCelsius: 16.5 },
            september: { monthName: "SEP", tempCelsius: 12.0 },
            october: { monthName: "OCT", tempCelsius: 6.5 },
            november: { monthName: "NOV", tempCelsius: 2.0 },
            december: { monthName: "DEC", tempCelsius: -0.9 },
        },
        cityPicture: "https://digitalnomads.world/wp-content/uploads/2021/03/tallinn-digital-nomads.jpg",
    },
    {
        cityName: "Tirana",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: 6.7 },
            february: { monthName: "FEB", tempCelsius: 7.8 },
            march: { monthName: "MAR", tempCelsius: 10.0 },
            april: { monthName: "APR", tempCelsius: 13.4 },
            may: { monthName: "MAY", tempCelsius: 18.0 },
            june: { monthName: "JUN", tempCelsius: 21.6 },
            july: { monthName: "JUL", tempCelsius: 24.0 },
            august: { monthName: "AUG", tempCelsius: 23.8 },
            september: { monthName: "SEP", tempCelsius: 20.7 },
            october: { monthName: "OCT", tempCelsius: 16.0 },
            november: { monthName: "NOV", tempCelsius: 11.7 },
            december: { monthName: "DEC", tempCelsius: 8.1 },
        },
        cityPicture: "https://emerging-europe.com/wp-content/uploads/2020/07/bigstock-tirana-albania-june-a-310037863-990x556.jpg",
    },
    {
        cityName: "Andorra la Vella",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: 2.2 },
            february: { monthName: "FEB", tempCelsius: 3.5 },
            march: { monthName: "MAR", tempCelsius: 5.8 },
            april: { monthName: "APR", tempCelsius: 7.5 },
            may: { monthName: "MAY", tempCelsius: 11.5 },
            june: { monthName: "JUN", tempCelsius: 15.4 },
            july: { monthName: "JUL", tempCelsius: 18.8 },
            august: { monthName: "AUG", tempCelsius: 18.5 },
            september: { monthName: "SEP", tempCelsius: 14.9 },
            october: { monthName: "OCT", tempCelsius: 10.3 },
            november: { monthName: "NOV", tempCelsius: 5.7 },
            december: { monthName: "DEC", tempCelsius: 3.0 },
        },
        cityPicture: "https://travelshelper.com/wp-content/uploads/2021/11/Andorra-la-Vella-Travel-Guide-Travel-S-Helper.jpg",
    },
    {
        cityName: "Vienna",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: 0.3 },
            february: { monthName: "FEB", tempCelsius: 1.5 },
            march: { monthName: "MAR", tempCelsius: 5.7 },
            april: { monthName: "APR", tempCelsius: 10.7 },
            may: { monthName: "MAY", tempCelsius: 15.7 },
            june: { monthName: "JUN", tempCelsius: 18.7 },
            july: { monthName: "JUL", tempCelsius: 20.8 },
            august: { monthName: "AUG", tempCelsius: 20.2 },
            september: { monthName: "SEP", tempCelsius: 15.4 },
            october: { monthName: "OCT", tempCelsius: 10.2 },
            november: { monthName: "NOV", tempCelsius: 5.1 },
            december: { monthName: "DEC", tempCelsius: 1.1 },
        },
        cityPicture: "https://res.klook.com/image/upload/Mobile/City/vfg4baggrck0egh36owk.jpg",
    },
    {
        cityName: "Brussels",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: 3.3 },
            february: { monthName: "FEB", tempCelsius: 3.7 },
            march: { monthName: "MAR", tempCelsius: 6.8 },
            april: { monthName: "APR", tempCelsius: 9.8 },
            may: { monthName: "MAY", tempCelsius: 13.6 },
            june: { monthName: "JUN", tempCelsius: 16.2 },
            july: { monthName: "JUL", tempCelsius: 18.4 },
            august: { monthName: "AUG", tempCelsius: 18.0 },
            september: { monthName: "SEP", tempCelsius: 14.9 },
            october: { monthName: "OCT", tempCelsius: 11.1 },
            november: { monthName: "NOV", tempCelsius: 6.8 },
            december: { monthName: "DEC", tempCelsius: 3.9 },
        },
        cityPicture: "https://cdn.traghetti.com/porti/tallin187-54811.jpg",
    },
    {
        cityName: "Split",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: 8.0 },
            february: { monthName: "FEB", tempCelsius: 8.4 },
            march: { monthName: "MAR", tempCelsius: 10.6 },
            april: { monthName: "APR", tempCelsius: 13.7 },
            may: { monthName: "MAY", tempCelsius: 18.9 },
            june: { monthName: "JUN", tempCelsius: 16.2 },
            july: { monthName: "JUL", tempCelsius: 18.4 },
            august: { monthName: "AUG", tempCelsius: 18.0 },
            september: { monthName: "SEP", tempCelsius: 14.9 },
            october: { monthName: "OCT", tempCelsius: 11.1 },
            november: { monthName: "NOV", tempCelsius: 6.8 },
            december: { monthName: "DEC", tempCelsius: 3.9 },
        },
        cityPicture: "https://www.brattle.com/wp-content/uploads/2021/05/Brussels.png",
    },
    {
        cityName: "Amsterdam",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: 3.4 },
            february: { monthName: "FEB", tempCelsius: 3.4 },
            march: { monthName: "MAR", tempCelsius: 6.1 },
            april: { monthName: "APR", tempCelsius: 9.4 },
            may: { monthName: "MAY", tempCelsius: 13.8 },
            june: { monthName: "JUN", tempCelsius: 16.5 },
            july: { monthName: "JUL", tempCelsius: 18.7 },
            august: { monthName: "AUG", tempCelsius: 18.3 },
            september: { monthName: "SEP", tempCelsius: 15.3 },
            october: { monthName: "OCT", tempCelsius: 11.0 },
            november: { monthName: "NOV", tempCelsius: 6.6 },
            december: { monthName: "DEC", tempCelsius: 4.1 },
        },
        cityPicture: "https://media.timeout.com/images/105504583/750/422/image.jpg",
    },
    {
        cityName: "Athens",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: 10.2 },
            february: { monthName: "FEB", tempCelsius: 10.6 },
            march: { monthName: "MAR", tempCelsius: 12.6 },
            april: { monthName: "APR", tempCelsius: 15.9 },
            may: { monthName: "MAY", tempCelsius: 20.2 },
            june: { monthName: "JUN", tempCelsius: 24.4 },
            july: { monthName: "JUL", tempCelsius: 27.6 },
            august: { monthName: "AUG", tempCelsius: 27.7 },
            september: { monthName: "SEP", tempCelsius: 24.1 },
            october: { monthName: "OCT", tempCelsius: 19.0 },
            november: { monthName: "NOV", tempCelsius: 14.6 },
            december: { monthName: "DEC", tempCelsius: 11.4 },
        },
        cityPicture: "https://cdn.shortpixel.ai/spai/q_lossy+ret_img+to_webp/https://funworldfacts.com/wp-content/uploads/2022/12/athens-facts.jpg",
    },
    {
        cityName: "Berlin",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: -0.4 },
            february: { monthName: "FEB", tempCelsius: 0.2 },
            march: { monthName: "MAR", tempCelsius: 3.9 },
            april: { monthName: "APR", tempCelsius: 8.6 },
            may: { monthName: "MAY", tempCelsius: 13.3 },
            june: { monthName: "JUN", tempCelsius: 16.5 },
            july: { monthName: "JUL", tempCelsius: 18.7 },
            august: { monthName: "AUG", tempCelsius: 18.2 },
            september: { monthName: "SEP", tempCelsius: 14.5 },
            october: { monthName: "OCT", tempCelsius: 9.7 },
            november: { monthName: "NOV", tempCelsius: 4.6 },
            december: { monthName: "DEC", tempCelsius: 1.3 },
        },
        cityPicture: "https://www.berlin.de/binaries/asset/image_assets/6340464/ratio_2_1/1685015071/1500x750/",
    },
    {
        cityName: "Budapest",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: -1.1 },
            february: { monthName: "FEB", tempCelsius: 0.4 },
            march: { monthName: "MAR", tempCelsius: 5.6 },
            april: { monthName: "APR", tempCelsius: 10.9 },
            may: { monthName: "MAY", tempCelsius: 15.9 },
            june: { monthName: "JUN", tempCelsius: 19.1 },
            july: { monthName: "JUL", tempCelsius: 20.9 },
            august: { monthName: "AUG", tempCelsius: 20.4 },
            september: { monthName: "SEP", tempCelsius: 16.5 },
            october: { monthName: "OCT", tempCelsius: 11.2 },
            november: { monthName: "NOV", tempCelsius: 5.2 },
            december: { monthName: "DEC", tempCelsius: 1.0 },
        },
        cityPicture: "https://santorinidave.com/wp-content/uploads/2022/06/budapest-best-places-four-seasons.jpeg",
    },
    {
        cityName: "Dublin",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: 6.8 },
            february: { monthName: "FEB", tempCelsius: 7.0 },
            march: { monthName: "MAR", tempCelsius: 8.5 },
            april: { monthName: "APR", tempCelsius: 9.9 },
            may: { monthName: "MAY", tempCelsius: 12.6 },
            june: { monthName: "JUN", tempCelsius: 15.5 },
            july: { monthName: "JUL", tempCelsius: 17.7 },
            august: { monthName: "AUG", tempCelsius: 17.5 },
            september: { monthName: "SEP", tempCelsius: 15.4 },
            october: { monthName: "OCT", tempCelsius: 12.0 },
            november: { monthName: "NOV", tempCelsius: 9.0 },
            december: { monthName: "DEC", tempCelsius: 7.4 },
        },
        cityPicture: "https://osi.ie/wp-content/uploads/2018/08/dublin-skyline.jpg",
    },
    {
        cityName: "Helsinki",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: -5.8 },
            february: { monthName: "FEB", tempCelsius: -6.5 },
            march: { monthName: "MAR", tempCelsius: -3.7 },
            april: { monthName: "APR", tempCelsius: 1.9 },
            may: { monthName: "MAY", tempCelsius: 8.4 },
            june: { monthName: "JUN", tempCelsius: 14.3 },
            july: { monthName: "JUL", tempCelsius: 17.9 },
            august: { monthName: "AUG", tempCelsius: 15.7 },
            september: { monthName: "SEP", tempCelsius: 10.4 },
            october: { monthName: "OCT", tempCelsius: 5.0 },
            november: { monthName: "NOV", tempCelsius: 0.2 },
            december: { monthName: "DEC", tempCelsius: -4.1 },
        },
        cityPicture: "https://larnefc.com/wp-content/uploads/2023/07/128641704_gettyimages-1216740151.jpg",
    },
    {
        cityName: "Milan",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: 3.0 },
            february: { monthName: "FEB", tempCelsius: 4.4 },
            march: { monthName: "MAR", tempCelsius: 8.9 },
            april: { monthName: "APR", tempCelsius: 12.7 },
            may: { monthName: "MAY", tempCelsius: 17.2 },
            june: { monthName: "JUN", tempCelsius: 20.7 },
            july: { monthName: "JUL", tempCelsius: 23.8 },
            august: { monthName: "AUG", tempCelsius: 23.4 },
            september: { monthName: "SEP", tempCelsius: 19.7 },
            october: { monthName: "OCT", tempCelsius: 14.1 },
            november: { monthName: "NOV", tempCelsius: 8.2 },
            december: { monthName: "DEC", tempCelsius: 4.3 },
        },
        cityPicture: "https://media.gq-magazine.co.uk/photos/5d13ac3ec265531bc4a379f4/16:9/w_2560%2Cc_limit/milan-hp-gq-17apr19_istock_b.jpg",
    },
    {
        cityName: "Rome",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: 7.6 },
            february: { monthName: "FEB", tempCelsius: 8.6 },
            march: { monthName: "MAR", tempCelsius: 11.1 },
            april: { monthName: "APR", tempCelsius: 14.2 },
            may: { monthName: "MAY", tempCelsius: 18.1 },
            june: { monthName: "JUN", tempCelsius: 21.9 },
            july: { monthName: "JUL", tempCelsius: 24.8 },
            august: { monthName: "AUG", tempCelsius: 24.7 },
            september: { monthName: "SEP", tempCelsius: 21.4 },
            october: { monthName: "OCT", tempCelsius: 16.5 },
            november: { monthName: "NOV", tempCelsius: 11.5 },
            december: { monthName: "DEC", tempCelsius: 8.4 },
        },
        cityPicture: "https://www.shoreexcursionsgroup.com/img/tour/EUCVPANORAMA-2.jpg",
    },
    {
        cityName: "Napoli",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: 8.9 },
            february: { monthName: "FEB", tempCelsius: 9.6 },
            march: { monthName: "MAR", tempCelsius: 11.6 },
            april: { monthName: "APR", tempCelsius: 14.5 },
            may: { monthName: "MAY", tempCelsius: 18.7 },
            june: { monthName: "JUN", tempCelsius: 22.7 },
            july: { monthName: "JUL", tempCelsius: 25.9 },
            august: { monthName: "AUG", tempCelsius: 25.9 },
            september: { monthName: "SEP", tempCelsius: 22.7 },
            october: { monthName: "OCT", tempCelsius: 18.1 },
            november: { monthName: "NOV", tempCelsius: 13.5 },
            december: { monthName: "DEC", tempCelsius: 10.3 },
        },
        cityPicture: "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/napoli_1.jpg",
    },
    {
        cityName: "Luxembourg",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: 0.8 },
            february: { monthName: "FEB", tempCelsius: 1.4 },
            march: { monthName: "MAR", tempCelsius: 4.5 },
            april: { monthName: "APR", tempCelsius: 7.8 },
            may: { monthName: "MAY", tempCelsius: 12.5 },
            june: { monthName: "JUN", tempCelsius: 15.5 },
            july: { monthName: "JUL", tempCelsius: 17.8 },
            august: { monthName: "AUG", tempCelsius: 17.2 },
            september: { monthName: "SEP", tempCelsius: 14.1 },
            october: { monthName: "OCT", tempCelsius: 9.8 },
            november: { monthName: "NOV", tempCelsius: 4.8 },
            december: { monthName: "DEC", tempCelsius: 2.0 },
        },
        cityPicture: "https://cdn-cms.bookingexperts.nl/media/460/40/optimized.JPG",
    },
    {
        cityName: "Bucharest",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: -2.7 },
            february: { monthName: "FEB", tempCelsius: 0.1 },
            march: { monthName: "MAR", tempCelsius: 5.9 },
            april: { monthName: "APR", tempCelsius: 12.4 },
            may: { monthName: "MAY", tempCelsius: 17.9 },
            june: { monthName: "JUN", tempCelsius: 21.2 },
            july: { monthName: "JUL", tempCelsius: 23.2 },
            august: { monthName: "AUG", tempCelsius: 22.6 },
            september: { monthName: "SEP", tempCelsius: 18.3 },
            october: { monthName: "OCT", tempCelsius: 12.3 },
            november: { monthName: "NOV", tempCelsius: 6.2 },
            december: { monthName: "DEC", tempCelsius: 0.6 },
        },
        cityPicture: "https://design-milk.com/images/2020/01/Rooftop-intercontinental-bucharest-Keshia-Design-Milk.jpeg",
    },
    {
        cityName: "Bratislava",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: -2.6 },
            february: { monthName: "FEB", tempCelsius: -0.7 },
            march: { monthName: "MAR", tempCelsius: 4.1 },
            april: { monthName: "APR", tempCelsius: 9.4 },
            may: { monthName: "MAY", tempCelsius: 14.8 },
            june: { monthName: "JUN", tempCelsius: 17.7 },
            july: { monthName: "JUL", tempCelsius: 19.4 },
            august: { monthName: "AUG", tempCelsius: 19.0 },
            september: { monthName: "SEP", tempCelsius: 14.9 },
            october: { monthName: "OCT", tempCelsius: 9.6 },
            november: { monthName: "NOV", tempCelsius: 4.2 },
            december: { monthName: "DEC", tempCelsius: -0.6 },
        },
        cityPicture: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Bratislava_Panorama_R01.jpg",
    },
    {
        cityName: "Barcelona",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: 12.5 },
            february: { monthName: "FEB", tempCelsius: 13.3 },
            march: { monthName: "MAR", tempCelsius: 14.9 },
            april: { monthName: "APR", tempCelsius: 16.8 },
            may: { monthName: "MAY", tempCelsius: 20.3 },
            june: { monthName: "JUN", tempCelsius: 23.7 },
            july: { monthName: "JUL", tempCelsius: 26.8 },
            august: { monthName: "AUG", tempCelsius: 27.0 },
            september: { monthName: "SEP", tempCelsius: 24.3 },
            october: { monthName: "OCT", tempCelsius: 20.0 },
            november: { monthName: "NOV", tempCelsius: 15.7 },
            december: { monthName: "DEC", tempCelsius: 13.2 },
        },
        cityPicture: "https://media.cntraveller.com/photos/62d14e029bbb08746e6fd952/3:2/w_6000,h_4000,c_limit/barcelonaGettyImages-1386922276.jpeg",
    },
    {
        cityName: "Seville",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: 12.5 },
            february: { monthName: "FEB", tempCelsius: 13.9 },
            march: { monthName: "MAR", tempCelsius: 16.2 },
            april: { monthName: "APR", tempCelsius: 18.2 },
            may: { monthName: "MAY", tempCelsius: 21.7 },
            june: { monthName: "JUN", tempCelsius: 25.9 },
            july: { monthName: "JUL", tempCelsius: 28.9 },
            august: { monthName: "AUG", tempCelsius: 29.0 },
            september: { monthName: "SEP", tempCelsius: 26.0 },
            october: { monthName: "OCT", tempCelsius: 21.3 },
            november: { monthName: "NOV", tempCelsius: 16.6 },
            december: { monthName: "DEC", tempCelsius: 13.4 },
        },
        cityPicture: "https://v9q2n5w7.rocketcdn.me/wp-content/uploads/2022/04/seville.jpg",
    },
    {
        cityName: "Stockholm",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: -3.4 },
            february: { monthName: "FEB", tempCelsius: -3.3 },
            march: { monthName: "MAR", tempCelsius: 0.1 },
            april: { monthName: "APR", tempCelsius: 5.8 },
            may: { monthName: "MAY", tempCelsius: 11.9 },
            june: { monthName: "JUN", tempCelsius: 16.5 },
            july: { monthName: "JUL", tempCelsius: 19.4 },
            august: { monthName: "AUG", tempCelsius: 18.3 },
            september: { monthName: "SEP", tempCelsius: 13.5 },
            october: { monthName: "OCT", tempCelsius: 8.2 },
            november: { monthName: "NOV", tempCelsius: 3.5 },
            december: { monthName: "DEC", tempCelsius: -0.5 },
        },
        cityPicture: "https://media.timeout.com/images/105171709/image.jpg",
    },
    {
        cityName: "Zurich",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: 0.5 },
            february: { monthName: "FEB", tempCelsius: 0.6 },
            march: { monthName: "MAR", tempCelsius: 4.1 },
            april: { monthName: "APR", tempCelsius: 7.6 },
            may: { monthName: "MAY", tempCelsius: 12.1 },
            june: { monthName: "JUN", tempCelsius: 15.6 },
            july: { monthName: "JUL", tempCelsius: 17.7 },
            august: { monthName: "AUG", tempCelsius: 17.3 },
            september: { monthName: "SEP", tempCelsius: 13.8 },
            october: { monthName: "OCT", tempCelsius: 9.5 },
            november: { monthName: "NOV", tempCelsius: 4.6 },
            december: { monthName: "DEC", tempCelsius: 1.7 },
        },
        cityPicture: "https://lp-cms-production.imgix.net/2021-08/shutterstockRF_314150237.jpg",
    },
    {
        cityName: "Kyiv",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: -4.6 },
            february: { monthName: "FEB", tempCelsius: -4.3 },
            march: { monthName: "MAR", tempCelsius: 0.5 },
            april: { monthName: "APR", tempCelsius: 7.9 },
            may: { monthName: "MAY", tempCelsius: 14.5 },
            june: { monthName: "JUN", tempCelsius: 18.1 },
            july: { monthName: "JUL", tempCelsius: 20.3 },
            august: { monthName: "AUG", tempCelsius: 19.4 },
            september: { monthName: "SEP", tempCelsius: 14.8 },
            october: { monthName: "OCT", tempCelsius: 8.8 },
            november: { monthName: "NOV", tempCelsius: 3.1 },
            december: { monthName: "DEC", tempCelsius: -1.7 },
        },
        cityPicture: "https://cdn.britannica.com/18/194818-050-E7A7A993/view-Kiev-Ukraine.jpg",
    },
    {
        cityName: "Edinburgh",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: 4.7 },
            february: { monthName: "FEB", tempCelsius: 4.7 },
            march: { monthName: "MAR", tempCelsius: 6.3 },
            april: { monthName: "APR", tempCelsius: 8.2 },
            may: { monthName: "MAY", tempCelsius: 10.9 },
            june: { monthName: "JUN", tempCelsius: 13.5 },
            july: { monthName: "JUL", tempCelsius: 15.2 },
            august: { monthName: "AUG", tempCelsius: 15.1 },
            september: { monthName: "SEP", tempCelsius: 12.9 },
            october: { monthName: "OCT", tempCelsius: 10.1 },
            november: { monthName: "NOV", tempCelsius: 7.2 },
            december: { monthName: "DEC", tempCelsius: 5.6 },
        },
        cityPicture: "https://a.cdn-hotels.com/gdcs/production73/d1723/35b8f7e3-14c4-4d53-ae2f-5f7f6adb6aac.jpg",
    },
    {
        cityName: "London",
        averageTemperatureCelsius: {
            january: { monthName: "JAN", tempCelsius: 5.2 },
            february: { monthName: "FEB", tempCelsius: 5.3 },
            march: { monthName: "MAR", tempCelsius: 7.6 },
            april: { monthName: "APR", tempCelsius: 9.8 },
            may: { monthName: "MAY", tempCelsius: 13.4 },
            june: { monthName: "JUN", tempCelsius: 16.5 },
            july: { monthName: "JUL", tempCelsius: 18.7 },
            august: { monthName: "AUG", tempCelsius: 18.5 },
            september: { monthName: "SEP", tempCelsius: 15.7 },
            october: { monthName: "OCT", tempCelsius: 11.9 },
            november: { monthName: "NOV", tempCelsius: 8.4 },
            december: { monthName: "DEC", tempCelsius: 6.2 },
        },
        cityPicture: "https://assets.editorial.aetnd.com/uploads/2019/03/topic-london-gettyimages-760251843-feature.jpg",
    }
]

export default Cities