const cities = [
    {
        cityName: "Riga",
        averageTemperatureCelsius: {
            January: -4.7,
            February: -4.2,
            March: 0.5,
            April: 5.1,
            May: 11.4,
            June: 15.5,
            July: 16.9,
            August: 16.2,
            September: 12,
            October: 7.4,
            November: 2.1,
            December: -2.3,
            Year: 6.2
        },
        cityPicture:{
            cityName: "riga",
            pictureLink: "https://www.daad.lv/files/2022/11/iStock-615926196_1920x900px.jpg"
        } 
    },
    {
        cityName: "Vilnius",
        averageTemperatureCelsius: {
            January: -6.1,
            February: -4.8,
            March: -0.6,
            April: 5.7,
            May: 12.5,
            June: 15.8,
            July: 16.9,
            August: 16.3,
            September: 11.6,
            October: 6.6,
            November: 1.2,
            December: -2.9,
            Year: 6.00
        },
        cityPicture: {
            cityName: "vilnius",
            pictureLink: "https://cdn.britannica.com/26/143426-050-A3F11FE1/town-section-Vilnius-Lithuania.jpg"
        }
    },
    {
        cityName: "Tallin",
        averageTemperatureCelsius: {
            January: -2.9,
            February: -3.6,
            March: -0.6,
            April: 4.8,
            May: 10.2,
            June: 14.5,
            July: 17.6,
            August: 16.5,
            September: 12.0,
            October: 6.5,
            November: 2.0,
            December: -0.9,
            Year: 6.4
        },
        cityPicture:{
            cityName: "tallin",
            pictureLink: "https://www.daad.lv/files/2022/11/iStock-615926196_1920x900px.jpg"
        } 
    },
    {
        cityName: "Tirana",
        averageTemperatureCelsius: {
            January: 6.7,
            February: 7.8,
            March: 10,
            April: 13.4,
            May: 18,
            June: 21.6,
            July: 24,
            August: 23.8,
            September: 20.7,
            October: 16,
            November: 11.7,
            December: 8.1,
            Year: 15.2
        },
        cityPicture: {
            cityName: "tirana",
            pictureLink: "https://emerging-europe.com/wp-content/uploads/2020/07/bigstock-tirana-albania-june-a-310037863-990x556.jpg"
        }
    },
    {
        cityName: "Andorra la Vella",
        averageTemperatureCelsius: {
            January: 2.2,
            February: 3.5,
            March: 5.8,
            April: 7.5,
            May: 11.5,
            June: 15.4,
            July: 18.8,
            August: 18.5,
            September: 14.9,
            October: 10.3,
            November: 5.7,
            December: 3,
            Year: 9.8
        },
        cityPicture: {
            cityName: "andorra la Vella",
            pictureLink: "https://travelshelper.com/wp-content/uploads/2021/11/Andorra-la-Vella-Travel-Guide-Travel-S-Helper.jpg"
        }
    },
    {
        cityName: "Vienna",
        averageTemperatureCelsius: {
            January: 0.3,
            February: 1.5,
            March: 5.7,
            April: 10.7,
            May: 15.7,
            June: 18.7,
            July: 20.8,
            August: 20.2,
            September: 15.4,
            October: 10.2,
            November: 5.1,
            December: 1.1,
            Year: 10.4
        },
        cityPicture: {
            cityName: "vienna",
            pictureLink: "https://res.klook.com/image/upload/Mobile/City/vfg4baggrck0egh36owk.jpg"
        }
    },
    {
        cityName: "Brussels",
        averageTemperatureCelsius: {
            January: 3.3,
            February: 3.7,
            March: 6.8,
            April: 9.8,
            May: 13.6,
            June: 16.2,
            July: 18.4,
            August: 18,
            September: 14.9,
            October: 11.1,
            November: 6.8,
            December: 3.9,
            Year: 10.5
        },
        cityPicture: {
            cityName: "brussels",
            pictureLink: "https://cdn.traghetti.com/porti/tallin187-54811.jpg"
        }
    },
    {
        cityName: "Split",
        averageTemperatureCelsius: {
            January: 8.0,
            February: 8.4,
            March: 10.6,
            April: 13.7,
            May: 18.9,
            June: 16.2,
            July: 18.4,
            August: 18,
            September: 14.9,
            October: 11.1,
            November: 6.8,
            December: 3.9,
            Year: 10.5
        },
        cityPicture: {
            cityName: "split",
            pictureLink: "https://www.brattle.com/wp-content/uploads/2021/05/Brussels.png"
        }
    },
    {
        cityName: "Amsterdam",
        averageTemperatureCelsius: {
            January: 3.4,
            February: 3.4,
            March: 6.1,
            April: 9.4,
            May: 13.8,
            June: 16.5,
            July: 18.7,
            August: 18.3,
            September: 15.3,
            October: 11,
            November: 6.6,
            December: 4.1,
            Year: 10.7
        },
        cityPicture: {
            cityName: "amsterdam",
            pictureLink: "https://media.timeout.com/images/105504583/750/422/image.jpg"
        }
    },
    {
        cityName: "Athens",
        averageTemperatureCelsius: {
            January: 10.2,
            February: 10.6,
            March: 12.6,
            April: 15.9,
            May: 20.2,
            June: 24.4,
            July: 27.6,
            August: 27.7,
            September: 24.1,
            October: 19,
            November: 14.6,
            December: 11.4,
            Year: 18.1
        },
        cityPicture: {
            cityName: "athens",
            pictureLink: "https://cdn.shortpixel.ai/spai/q_lossy+ret_img+to_webp/https://funworldfacts.com/wp-content/uploads/2022/12/athens-facts.jpg"
        }
    },
    {
        cityName: "Berlin",
        averageTemperatureCelsius: {
            January: -0.4,
            February: 0.2,
            March: 3.9,
            April: 8.6,
            May: 13.3,
            June: 16.5,
            July: 18.7,
            August: 18.2,
            September: 14.5,
            October: 9.7,
            November: 4.6,
            December: 1.3,
            Year: 9.3
        },
        cityPicture: {
            cityName: "berlin",
            pictureLink: "https://www.berlin.de/binaries/asset/image_assets/6340464/ratio_2_1/1685015071/1500x750/"
        }
    },
    {
        cityName: "Budapest",
        averageTemperatureCelsius: {
            January: -1.1,
            February: 0.4,
            March: 5.6,
            April: 10.9,
            May: 15.9,
            June: 19.1,
            July: 20.9,
            August: 20.4,
            September: 16.5,
            October: 11.2,
            November: 5.2,
            December: 1,
            Year: 10.8
        },
        cityPicture: {
            cityName: "budapest",
            pictureLink: "https://santorinidave.com/wp-content/uploads/2022/06/budapest-best-places-four-seasons.jpeg"
        }
    },
    {
        cityName: "Dublin",
        averageTemperatureCelsius: {
            January: 6.8,
            February: 7,
            March: 8.5,
            April: 9.9,
            May: 12.6,
            June: 15.5,
            July: 17.7,
            August: 17.5,
            September: 15.4,
            October: 12,
            November: 9,
            December: 7.4,
            Year: 11.3
        },
        cityPicture: {
            cityName: "dublin",
            pictureLink: "https://osi.ie/wp-content/uploads/2018/08/dublin-skyline.jpg"
        }
    },
    {
        cityName: "Helsinki",
        averageTemperatureCelsius: {
            January: -5.8,
            February: -6.5,
            March: -3.7,
            April: 1.9,
            May: 8.4,
            June: 14.3,
            July: 17.9,
            August: 15.7,
            September: 10.4,
            October: 5,
            November: 0.2,
            December: -4.1,
            Year: 4.2
        },
        cityPicture: {
            cityName: "helsinki",
            pictureLink: "https://larnefc.com/wp-content/uploads/2023/07/128641704_gettyimages-1216740151.jpg"
        }
    },
    {
        cityName: "Milan",
        averageTemperatureCelsius: {
            January: 3,
            February: 4.4,
            March: 8.9,
            April: 12.7,
            May: 17.2,
            June: 20.7,
            July: 23.8,
            August: 23.4,
            September: 19.7,
            October: 14.1,
            November: 8.2,
            December: 4.3,
            Year: 13.2
        },
        cityPicture: {
            cityName: "milan",
            pictureLink: "https://media.timeout.com/images/105186767/image.jpg"
        }
    },
    {
        cityName: "Rome",
        averageTemperatureCelsius: {
            January: 7.6,
            February: 8.6,
            March: 11.1,
            April: 14.2,
            May: 18.1,
            June: 21.9,
            July: 24.8,
            August: 24.7,
            September: 21.4,
            October: 16.5,
            November: 11.5,
            December: 8.4,
            Year: 15.8
        },
        cityPicture: {
            cityName: "rome",
            pictureLink: "https://media.timeout.com/images/105211673/image.jpg"
        }
    },
    {
        cityName: "Napoli",
        averageTemperatureCelsius: {
            January: 8.9,
            February: 9.6,
            March: 11.6,
            April: 14.5,
            May: 18.7,
            June: 22.7,
            July: 25.9,
            August: 25.9,
            September: 22.7,
            October: 18.1,
            November: 13.5,
            December: 10.3,
            Year: 16.7
        },
        cityPicture: {
            cityName: "napoli",
            pictureLink: "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/napoli_1.jpg"
        }
    },
    {
        cityName: "Luxembourg City",
        averageTemperatureCelsius: {
            January: 0.8,
            February: 1.4,
            March: 4.5,
            April: 7.8,
            May: 12.5,
            June: 15.5,
            July: 17.8,
            August: 17.2,
            September: 14.1,
            October: 9.8,
            November: 4.8,
            December: 2,
            Year: 9.1
        },
        cityPicture: {
            cityName: "luxembourg city",
            pictureLink: "https://cdn-cms.bookingexperts.nl/media/460/40/optimized.JPG"
        }
    },
    {
        cityName: "Bucharest",
        averageTemperatureCelsius: {
            January: -2.7,
            February: 0.1,
            March: 5.9,
            April: 12.4,
            May: 17.9,
            June: 21.2,
            July: 23.2,
            August: 22.6,
            September: 18.3,
            October: 12.3,
            November: 6.2,
            December: 0.6,
            Year: 11.8
        },
        cityPicture: {
            cityName: "bucharest",
            pictureLink: "https://www.ec2023bucharest.com/wp-content/uploads/2022/10/Bucharest.png"
        }
    },
    {
        cityName: "Bratislava",
        averageTemperatureCelsius: {
            January: -2.6,
            February: -0.7,
            March: 4.1,
            April: 9.4,
            May: 14.8,
            June: 17.7,
            July: 19.4,
            August: 19,
            September: 14.9,
            October: 9.6,
            November: 4.2,
            December: -0.6,
            Year: 8.9
        },
        cityPicture: {
            cityName: "bratislava",
            pictureLink: "https://media-cdn.tripadvisor.com/media/photo-s/1a/7e/36/e2/caption.jpg"
        }
    },
    {
        cityName: "Ljubljana",
        averageTemperatureCelsius: {
            January: -2.3,
            February: 0.2,
            March: 4.9,
            April: 9.9,
            May: 14.9,
            June: 18.7,
            July: 20.6,
            August: 20.1,
            September: 16.1,
            October: 10.9,
            November: 5.6,
            December: 0.7,
            Year: 10.1
        },
        cityPicture: {
            cityName: "ljubljana",
            pictureLink: "https://newinzurich.com/wp-content/uploads/2021/10/245648986_4898153473568959_4257169892251845500_n.jpg"
        }
    },
    {
        cityName: "Barcelona",
        averageTemperatureCelsius: {
            January: 12.5,
            February: 13.3,
            March: 14.9,
            April: 16.8,
            May: 20.3,
            June: 23.7,
            July: 26.8,
            August: 27,
            September: 24.3,
            October: 20,
            November: 15.7,
            December: 13.2,
            Year: 18.9
        },
        cityPicture: {
            cityName: "barcelona",
            pictureLink: "https://media.cntraveller.com/photos/62d14e029bbb08746e6fd952/3:2/w_6000,h_4000,c_limit/barcelonaGettyImages-1386922276.jpeg"
        }
    },
    {
        cityName: "Seville",
        averageTemperatureCelsius: {
            January: 12.5,
            February: 13.9,
            March: 16.2,
            April: 18.2,
            May: 21.7,
            June: 25.9,
            July: 28.9,
            August: 29,
            September: 26,
            October: 21.3,
            November: 16.6,
            December: 13.4,
            Year: 20.3
        },
        cityPicture: {
            cityName: "seville",
            pictureLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslJ-51RMAQDRUS_UTx74CNW44SXHWHKXiRA&usqp=CAU"
        }
    },
    {
        cityName: "Stockholm",
        averageTemperatureCelsius: {
            January: -3.4,
            February: -3.3,
            March: 0.1,
            April: 5.8,
            May: 11.9,
            June: 16.5,
            July: 19.4,
            August: 18.3,
            September: 13.5,
            October: 8.2,
            November: 3.5,
            December: -0.5,
            Year: 7.7
        },
        cityPicture: {
            cityName: "stockholm",
            pictureLink: "https://media.timeout.com/images/105171709/image.jpg"
        }
    },
    {
        cityName: "Zurich",
        averageTemperatureCelsius: {
            January: 0.5,
            February: 0.6,
            March: 4.1,
            April: 7.6,
            May: 12.1,
            June: 15.6,
            July: 17.7,
            August: 17.3,
            September: 13.8,
            October: 9.5,
            November: 4.6,
            December: 1.7,
            Year: 8.9
        },
        cityPicture: {
            cityName: "zurich",
            pictureLink: "https://lp-cms-production.imgix.net/2021-08/shutterstockRF_314150237.jpg"
        }
    },
    {
        cityName: "Kyiv",
        averageTemperatureCelsius: {
            January: -4.6,
            February: -4.3,
            March: 0.5,
            April: 7.9,
            May: 14.5,
            June: 18.1,
            July: 20.3,
            August: 19.4,
            September: 14.8,
            October: 8.8,
            November: 3.1,
            December: -1.7,
            Year: 8.2
        },
        cityPicture: {
            cityName: "kyiv",
            pictureLink: "https://cdn.britannica.com/18/194818-050-E7A7A993/view-Kiev-Ukraine.jpg"
        }
    },
    {
        cityName: "Edinburgh",
        averageTemperatureCelsius: {
            January: 4.7,
            February: 4.7,
            March: 6.3,
            April: 8.2,
            May: 10.9,
            June: 13.5,
            July: 15.2,
            August: 15.1,
            September: 12.9,
            October: 10.1,
            November: 7.2,
            December: 5.6,
            Year: 9.7
        },
        cityPicture: {
            cityName: "edinburgh",
            pictureLink: "https://a.cdn-hotels.com/gdcs/production73/d1723/35b8f7e3-14c4-4d53-ae2f-5f7f6adb6aac.jpg"
        }
    },
    {
        cityName: "London",
        averageTemperatureCelsius: {
            January: 5.2,
            February: 5.3,
            March: 7.6,
            April: 9.8,
            May: 13.4,
            June: 16.5,
            July: 18.7,
            August: 18.5,
            September: 15.7,
            October: 11.9,
            November: 8.4,
            December: 6.2,
            Year: 11.5
        },
        cityPicture: {
            cityName: "london",
            pictureLink: "https://www.citysparespace.com/wp-content/uploads/2023/02/london.jpeg"
        }
    }
]

export default cities