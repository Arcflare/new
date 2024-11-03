
// Яндекс карта

initMap();

async function initMap() {
  await ymaps3.ready;
  const { YMap, YMapDefaultSchemeLayer } = ymaps3;
  const map = new YMap(document.getElementById("map"), {
    location: {
      center: [39.69487249999999, 47.223351074282256],
      zoom: 14,
    },
  });
  
  map.addChild(
    new YMapDefaultSchemeLayer({
      theme: "dark",
      customization: [
        {
          tags: "country",
          elements: "geometry.fill",
          stylers: [
            {
              color: "#3e76cc",
            },
            {
              opacity: 0.8,
              zoom: 0,
            },
            {
              opacity: 0.8,
              zoom: 1,
            },
            {
              opacity: 0.8,
              zoom: 2,
            },
            {
              opacity: 0.8,
              zoom: 3,
            },
            {
              opacity: 0.8,
              zoom: 4,
            },
            {
              opacity: 1,
              zoom: 5,
            },
            {
              opacity: 1,
              zoom: 6,
            },
            {
              opacity: 1,
              zoom: 7,
            },
            {
              opacity: 1,
              zoom: 8,
            },
            {
              opacity: 1,
              zoom: 9,
            },
            {
              opacity: 1,
              zoom: 10,
            },
            {
              opacity: 1,
              zoom: 11,
            },
            {
              opacity: 1,
              zoom: 12,
            },
            {
              opacity: 1,
              zoom: 13,
            },
            {
              opacity: 1,
              zoom: 14,
            },
            {
              opacity: 1,
              zoom: 15,
            },
            {
              opacity: 1,
              zoom: 16,
            },
            {
              opacity: 1,
              zoom: 17,
            },
            {
              opacity: 1,
              zoom: 18,
            },
            {
              opacity: 1,
              zoom: 19,
            },
            {
              opacity: 1,
              zoom: 20,
            },
            {
              opacity: 1,
              zoom: 21,
            },
          ],
        },
        {
          tags: "country",
          elements: "geometry.outline",
          stylers: [
            {
              color: "#35527e",
            },
            {
              opacity: 0.15,
              zoom: 0,
            },
            {
              opacity: 0.15,
              zoom: 1,
            },
            {
              opacity: 0.15,
              zoom: 2,
            },
            {
              opacity: 0.15,
              zoom: 3,
            },
            {
              opacity: 0.15,
              zoom: 4,
            },
            {
              opacity: 0.15,
              zoom: 5,
            },
            {
              opacity: 0.25,
              zoom: 6,
            },
            {
              opacity: 0.5,
              zoom: 7,
            },
            {
              opacity: 0.47,
              zoom: 8,
            },
            {
              opacity: 0.44,
              zoom: 9,
            },
            {
              opacity: 0.41,
              zoom: 10,
            },
            {
              opacity: 0.38,
              zoom: 11,
            },
            {
              opacity: 0.35,
              zoom: 12,
            },
            {
              opacity: 0.33,
              zoom: 13,
            },
            {
              opacity: 0.3,
              zoom: 14,
            },
            {
              opacity: 0.28,
              zoom: 15,
            },
            {
              opacity: 0.25,
              zoom: 16,
            },
            {
              opacity: 0.25,
              zoom: 17,
            },
            {
              opacity: 0.25,
              zoom: 18,
            },
            {
              opacity: 0.25,
              zoom: 19,
            },
            {
              opacity: 0.25,
              zoom: 20,
            },
            {
              opacity: 0.25,
              zoom: 21,
            },
          ],
        },
        {
          tags: "region",
          elements: "geometry.fill",
          stylers: [
            {
              color: "#2d5fa9",
              opacity: 0.5,
              zoom: 0,
            },
            {
              color: "#2d5fa9",
              opacity: 0.5,
              zoom: 1,
            },
            {
              color: "#2d5fa9",
              opacity: 0.5,
              zoom: 2,
            },
            {
              color: "#2d5fa9",
              opacity: 0.5,
              zoom: 3,
            },
            {
              color: "#2d5fa9",
              opacity: 0.5,
              zoom: 4,
            },
            {
              color: "#2d5fa9",
              opacity: 0.5,
              zoom: 5,
            },
            {
              color: "#2d5fa9",
              opacity: 1,
              zoom: 6,
            },
            {
              color: "#2d5fa9",
              opacity: 1,
              zoom: 7,
            },
            {
              color: "#3e76cc",
              opacity: 1,
              zoom: 8,
            },
            {
              color: "#3e76cc",
              opacity: 1,
              zoom: 9,
            },
            {
              color: "#3e76cc",
              opacity: 1,
              zoom: 10,
            },
            {
              color: "#3e76cc",
              opacity: 1,
              zoom: 11,
            },
            {
              color: "#3e76cc",
              opacity: 1,
              zoom: 12,
            },
            {
              color: "#3e76cc",
              opacity: 1,
              zoom: 13,
            },
            {
              color: "#3e76cc",
              opacity: 1,
              zoom: 14,
            },
            {
              color: "#3e76cc",
              opacity: 1,
              zoom: 15,
            },
            {
              color: "#3e76cc",
              opacity: 1,
              zoom: 16,
            },
            {
              color: "#3e76cc",
              opacity: 1,
              zoom: 17,
            },
            {
              color: "#3e76cc",
              opacity: 1,
              zoom: 18,
            },
            {
              color: "#3e76cc",
              opacity: 1,
              zoom: 19,
            },
            {
              color: "#3e76cc",
              opacity: 1,
              zoom: 20,
            },
            {
              color: "#3e76cc",
              opacity: 1,
              zoom: 21,
            },
          ],
        },
        {
          tags: "region",
          elements: "geometry.outline",
          stylers: [
            {
              color: "#35527e",
            },
            {
              opacity: 0.15,
              zoom: 0,
            },
            {
              opacity: 0.15,
              zoom: 1,
            },
            {
              opacity: 0.15,
              zoom: 2,
            },
            {
              opacity: 0.15,
              zoom: 3,
            },
            {
              opacity: 0.15,
              zoom: 4,
            },
            {
              opacity: 0.15,
              zoom: 5,
            },
            {
              opacity: 0.25,
              zoom: 6,
            },
            {
              opacity: 0.5,
              zoom: 7,
            },
            {
              opacity: 0.47,
              zoom: 8,
            },
            {
              opacity: 0.44,
              zoom: 9,
            },
            {
              opacity: 0.41,
              zoom: 10,
            },
            {
              opacity: 0.38,
              zoom: 11,
            },
            {
              opacity: 0.35,
              zoom: 12,
            },
            {
              opacity: 0.33,
              zoom: 13,
            },
            {
              opacity: 0.3,
              zoom: 14,
            },
            {
              opacity: 0.28,
              zoom: 15,
            },
            {
              opacity: 0.25,
              zoom: 16,
            },
            {
              opacity: 0.25,
              zoom: 17,
            },
            {
              opacity: 0.25,
              zoom: 18,
            },
            {
              opacity: 0.25,
              zoom: 19,
            },
            {
              opacity: 0.25,
              zoom: 20,
            },
            {
              opacity: 0.25,
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            any: "admin",
            none: ["country", "region", "locality", "district", "address"],
          },
          elements: "geometry.fill",
          stylers: [
            {
              color: "#3e76cc",
            },
            {
              opacity: 0.5,
              zoom: 0,
            },
            {
              opacity: 0.5,
              zoom: 1,
            },
            {
              opacity: 0.5,
              zoom: 2,
            },
            {
              opacity: 0.5,
              zoom: 3,
            },
            {
              opacity: 0.5,
              zoom: 4,
            },
            {
              opacity: 0.5,
              zoom: 5,
            },
            {
              opacity: 1,
              zoom: 6,
            },
            {
              opacity: 1,
              zoom: 7,
            },
            {
              opacity: 1,
              zoom: 8,
            },
            {
              opacity: 1,
              zoom: 9,
            },
            {
              opacity: 1,
              zoom: 10,
            },
            {
              opacity: 1,
              zoom: 11,
            },
            {
              opacity: 1,
              zoom: 12,
            },
            {
              opacity: 1,
              zoom: 13,
            },
            {
              opacity: 1,
              zoom: 14,
            },
            {
              opacity: 1,
              zoom: 15,
            },
            {
              opacity: 1,
              zoom: 16,
            },
            {
              opacity: 1,
              zoom: 17,
            },
            {
              opacity: 1,
              zoom: 18,
            },
            {
              opacity: 1,
              zoom: 19,
            },
            {
              opacity: 1,
              zoom: 20,
            },
            {
              opacity: 1,
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            any: "admin",
            none: ["country", "region", "locality", "district", "address"],
          },
          elements: "geometry.outline",
          stylers: [
            {
              color: "#35527e",
            },
            {
              opacity: 0.15,
              zoom: 0,
            },
            {
              opacity: 0.15,
              zoom: 1,
            },
            {
              opacity: 0.15,
              zoom: 2,
            },
            {
              opacity: 0.15,
              zoom: 3,
            },
            {
              opacity: 0.15,
              zoom: 4,
            },
            {
              opacity: 0.15,
              zoom: 5,
            },
            {
              opacity: 0.25,
              zoom: 6,
            },
            {
              opacity: 0.5,
              zoom: 7,
            },
            {
              opacity: 0.47,
              zoom: 8,
            },
            {
              opacity: 0.44,
              zoom: 9,
            },
            {
              opacity: 0.41,
              zoom: 10,
            },
            {
              opacity: 0.38,
              zoom: 11,
            },
            {
              opacity: 0.35,
              zoom: 12,
            },
            {
              opacity: 0.33,
              zoom: 13,
            },
            {
              opacity: 0.3,
              zoom: 14,
            },
            {
              opacity: 0.28,
              zoom: 15,
            },
            {
              opacity: 0.25,
              zoom: 16,
            },
            {
              opacity: 0.25,
              zoom: 17,
            },
            {
              opacity: 0.25,
              zoom: 18,
            },
            {
              opacity: 0.25,
              zoom: 19,
            },
            {
              opacity: 0.25,
              zoom: 20,
            },
            {
              opacity: 0.25,
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            any: "landcover",
            none: "vegetation",
          },
          stylers: [
            {
              hue: "#314159",
            },
          ],
        },
        {
          tags: "vegetation",
          elements: "geometry",
          stylers: [
            {
              color: "#43597a",
              opacity: 0.1,
              zoom: 0,
            },
            {
              color: "#43597a",
              opacity: 0.1,
              zoom: 1,
            },
            {
              color: "#43597a",
              opacity: 0.1,
              zoom: 2,
            },
            {
              color: "#43597a",
              opacity: 0.1,
              zoom: 3,
            },
            {
              color: "#43597a",
              opacity: 0.1,
              zoom: 4,
            },
            {
              color: "#43597a",
              opacity: 0.1,
              zoom: 5,
            },
            {
              color: "#43597a",
              opacity: 0.2,
              zoom: 6,
            },
            {
              color: "#314159",
              opacity: 0.3,
              zoom: 7,
            },
            {
              color: "#314159",
              opacity: 0.4,
              zoom: 8,
            },
            {
              color: "#314159",
              opacity: 0.6,
              zoom: 9,
            },
            {
              color: "#314159",
              opacity: 0.8,
              zoom: 10,
            },
            {
              color: "#314159",
              opacity: 1,
              zoom: 11,
            },
            {
              color: "#314159",
              opacity: 1,
              zoom: 12,
            },
            {
              color: "#314159",
              opacity: 1,
              zoom: 13,
            },
            {
              color: "#2e3c53",
              opacity: 1,
              zoom: 14,
            },
            {
              color: "#2a374c",
              opacity: 1,
              zoom: 15,
            },
            {
              color: "#2a374c",
              opacity: 1,
              zoom: 16,
            },
            {
              color: "#2a374c",
              opacity: 1,
              zoom: 17,
            },
            {
              color: "#2a374c",
              opacity: 1,
              zoom: 18,
            },
            {
              color: "#2a374c",
              opacity: 1,
              zoom: 19,
            },
            {
              color: "#2a374c",
              opacity: 1,
              zoom: 20,
            },
            {
              color: "#2a374c",
              opacity: 1,
              zoom: 21,
            },
          ],
        },
        {
          tags: "park",
          elements: "geometry",
          stylers: [
            {
              color: "#314159",
              opacity: 0.1,
              zoom: 0,
            },
            {
              color: "#314159",
              opacity: 0.1,
              zoom: 1,
            },
            {
              color: "#314159",
              opacity: 0.1,
              zoom: 2,
            },
            {
              color: "#314159",
              opacity: 0.1,
              zoom: 3,
            },
            {
              color: "#314159",
              opacity: 0.1,
              zoom: 4,
            },
            {
              color: "#314159",
              opacity: 0.1,
              zoom: 5,
            },
            {
              color: "#314159",
              opacity: 0.2,
              zoom: 6,
            },
            {
              color: "#314159",
              opacity: 0.3,
              zoom: 7,
            },
            {
              color: "#314159",
              opacity: 0.4,
              zoom: 8,
            },
            {
              color: "#314159",
              opacity: 0.6,
              zoom: 9,
            },
            {
              color: "#314159",
              opacity: 0.8,
              zoom: 10,
            },
            {
              color: "#314159",
              opacity: 1,
              zoom: 11,
            },
            {
              color: "#314159",
              opacity: 1,
              zoom: 12,
            },
            {
              color: "#314159",
              opacity: 1,
              zoom: 13,
            },
            {
              color: "#2e3c53",
              opacity: 1,
              zoom: 14,
            },
            {
              color: "#2a374c",
              opacity: 1,
              zoom: 15,
            },
            {
              color: "#2a374c",
              opacity: 0.9,
              zoom: 16,
            },
            {
              color: "#2a374c",
              opacity: 0.8,
              zoom: 17,
            },
            {
              color: "#2a374c",
              opacity: 0.7,
              zoom: 18,
            },
            {
              color: "#2a374c",
              opacity: 0.7,
              zoom: 19,
            },
            {
              color: "#2a374c",
              opacity: 0.7,
              zoom: 20,
            },
            {
              color: "#2a374c",
              opacity: 0.7,
              zoom: 21,
            },
          ],
        },
        {
          tags: "national_park",
          elements: "geometry",
          stylers: [
            {
              color: "#314159",
              opacity: 0.1,
              zoom: 0,
            },
            {
              color: "#314159",
              opacity: 0.1,
              zoom: 1,
            },
            {
              color: "#314159",
              opacity: 0.1,
              zoom: 2,
            },
            {
              color: "#314159",
              opacity: 0.1,
              zoom: 3,
            },
            {
              color: "#314159",
              opacity: 0.1,
              zoom: 4,
            },
            {
              color: "#314159",
              opacity: 0.1,
              zoom: 5,
            },
            {
              color: "#314159",
              opacity: 0.2,
              zoom: 6,
            },
            {
              color: "#314159",
              opacity: 0.3,
              zoom: 7,
            },
            {
              color: "#314159",
              opacity: 0.4,
              zoom: 8,
            },
            {
              color: "#314159",
              opacity: 0.6,
              zoom: 9,
            },
            {
              color: "#314159",
              opacity: 0.8,
              zoom: 10,
            },
            {
              color: "#314159",
              opacity: 1,
              zoom: 11,
            },
            {
              color: "#314159",
              opacity: 1,
              zoom: 12,
            },
            {
              color: "#314159",
              opacity: 1,
              zoom: 13,
            },
            {
              color: "#2e3c53",
              opacity: 1,
              zoom: 14,
            },
            {
              color: "#2a374c",
              opacity: 1,
              zoom: 15,
            },
            {
              color: "#2a374c",
              opacity: 0.7,
              zoom: 16,
            },
            {
              color: "#2a374c",
              opacity: 0.7,
              zoom: 17,
            },
            {
              color: "#2a374c",
              opacity: 0.7,
              zoom: 18,
            },
            {
              color: "#2a374c",
              opacity: 0.7,
              zoom: 19,
            },
            {
              color: "#2a374c",
              opacity: 0.7,
              zoom: 20,
            },
            {
              color: "#2a374c",
              opacity: 0.7,
              zoom: 21,
            },
          ],
        },
        {
          tags: "cemetery",
          elements: "geometry",
          stylers: [
            {
              color: "#314159",
              zoom: 0,
            },
            {
              color: "#314159",
              zoom: 1,
            },
            {
              color: "#314159",
              zoom: 2,
            },
            {
              color: "#314159",
              zoom: 3,
            },
            {
              color: "#314159",
              zoom: 4,
            },
            {
              color: "#314159",
              zoom: 5,
            },
            {
              color: "#314159",
              zoom: 6,
            },
            {
              color: "#314159",
              zoom: 7,
            },
            {
              color: "#314159",
              zoom: 8,
            },
            {
              color: "#314159",
              zoom: 9,
            },
            {
              color: "#314159",
              zoom: 10,
            },
            {
              color: "#314159",
              zoom: 11,
            },
            {
              color: "#314159",
              zoom: 12,
            },
            {
              color: "#314159",
              zoom: 13,
            },
            {
              color: "#2e3c53",
              zoom: 14,
            },
            {
              color: "#2a374c",
              zoom: 15,
            },
            {
              color: "#2a374c",
              zoom: 16,
            },
            {
              color: "#2a374c",
              zoom: 17,
            },
            {
              color: "#2a374c",
              zoom: 18,
            },
            {
              color: "#2a374c",
              zoom: 19,
            },
            {
              color: "#2a374c",
              zoom: 20,
            },
            {
              color: "#2a374c",
              zoom: 21,
            },
          ],
        },
        {
          tags: "sports_ground",
          elements: "geometry",
          stylers: [
            {
              color: "#3a4d69",
              opacity: 0,
              zoom: 0,
            },
            {
              color: "#3a4d69",
              opacity: 0,
              zoom: 1,
            },
            {
              color: "#3a4d69",
              opacity: 0,
              zoom: 2,
            },
            {
              color: "#3a4d69",
              opacity: 0,
              zoom: 3,
            },
            {
              color: "#3a4d69",
              opacity: 0,
              zoom: 4,
            },
            {
              color: "#3a4d69",
              opacity: 0,
              zoom: 5,
            },
            {
              color: "#3a4d69",
              opacity: 0,
              zoom: 6,
            },
            {
              color: "#3a4d69",
              opacity: 0,
              zoom: 7,
            },
            {
              color: "#3a4d69",
              opacity: 0,
              zoom: 8,
            },
            {
              color: "#3a4d69",
              opacity: 0,
              zoom: 9,
            },
            {
              color: "#3a4d69",
              opacity: 0,
              zoom: 10,
            },
            {
              color: "#3a4d69",
              opacity: 0,
              zoom: 11,
            },
            {
              color: "#3a4d69",
              opacity: 0,
              zoom: 12,
            },
            {
              color: "#3a4d69",
              opacity: 0,
              zoom: 13,
            },
            {
              color: "#374863",
              opacity: 0,
              zoom: 14,
            },
            {
              color: "#33435c",
              opacity: 0.5,
              zoom: 15,
            },
            {
              color: "#32425b",
              opacity: 1,
              zoom: 16,
            },
            {
              color: "#32415a",
              opacity: 1,
              zoom: 17,
            },
            {
              color: "#314159",
              opacity: 1,
              zoom: 18,
            },
            {
              color: "#304058",
              opacity: 1,
              zoom: 19,
            },
            {
              color: "#303f57",
              opacity: 1,
              zoom: 20,
            },
            {
              color: "#2f3e56",
              opacity: 1,
              zoom: 21,
            },
          ],
        },
        {
          tags: "terrain",
          elements: "geometry",
          stylers: [
            {
              hue: "#3a4d69",
            },
            {
              opacity: 0.3,
              zoom: 0,
            },
            {
              opacity: 0.3,
              zoom: 1,
            },
            {
              opacity: 0.3,
              zoom: 2,
            },
            {
              opacity: 0.3,
              zoom: 3,
            },
            {
              opacity: 0.3,
              zoom: 4,
            },
            {
              opacity: 0.35,
              zoom: 5,
            },
            {
              opacity: 0.4,
              zoom: 6,
            },
            {
              opacity: 0.6,
              zoom: 7,
            },
            {
              opacity: 0.8,
              zoom: 8,
            },
            {
              opacity: 0.9,
              zoom: 9,
            },
            {
              opacity: 1,
              zoom: 10,
            },
            {
              opacity: 1,
              zoom: 11,
            },
            {
              opacity: 1,
              zoom: 12,
            },
            {
              opacity: 1,
              zoom: 13,
            },
            {
              opacity: 1,
              zoom: 14,
            },
            {
              opacity: 1,
              zoom: 15,
            },
            {
              opacity: 1,
              zoom: 16,
            },
            {
              opacity: 1,
              zoom: 17,
            },
            {
              opacity: 1,
              zoom: 18,
            },
            {
              opacity: 1,
              zoom: 19,
            },
            {
              opacity: 1,
              zoom: 20,
            },
            {
              opacity: 1,
              zoom: 21,
            },
          ],
        },
        {
          tags: "geographic_line",
          elements: "geometry",
          stylers: [
            {
              color: "#a3b3cc",
            },
          ],
        },
        {
          tags: "land",
          elements: "geometry",
          stylers: [
            {
              color: "#3a4c69",
              zoom: 0,
            },
            {
              color: "#3a4c69",
              zoom: 1,
            },
            {
              color: "#3a4c69",
              zoom: 2,
            },
            {
              color: "#3a4c69",
              zoom: 3,
            },
            {
              color: "#3a4c69",
              zoom: 4,
            },
            {
              color: "#384a66",
              zoom: 5,
            },
            {
              color: "#374863",
              zoom: 6,
            },
            {
              color: "#35455f",
              zoom: 7,
            },
            {
              color: "#33435c",
              zoom: 8,
            },
            {
              color: "#33435c",
              zoom: 9,
            },
            {
              color: "#33435c",
              zoom: 10,
            },
            {
              color: "#33435c",
              zoom: 11,
            },
            {
              color: "#33435c",
              zoom: 12,
            },
            {
              color: "#33435c",
              zoom: 13,
            },
            {
              color: "#314159",
              zoom: 14,
            },
            {
              color: "#2f3e56",
              zoom: 15,
            },
            {
              color: "#2f3e55",
              zoom: 16,
            },
            {
              color: "#2e3d55",
              zoom: 17,
            },
            {
              color: "#2e3d54",
              zoom: 18,
            },
            {
              color: "#2e3c53",
              zoom: 19,
            },
            {
              color: "#2d3c53",
              zoom: 20,
            },
            {
              color: "#2d3b52",
              zoom: 21,
            },
          ],
        },
        {
          tags: "residential",
          elements: "geometry",
          stylers: [
            {
              color: "#3a4d69",
              opacity: 0.5,
              zoom: 0,
            },
            {
              color: "#3a4d69",
              opacity: 0.5,
              zoom: 1,
            },
            {
              color: "#3a4d69",
              opacity: 0.5,
              zoom: 2,
            },
            {
              color: "#3a4d69",
              opacity: 0.5,
              zoom: 3,
            },
            {
              color: "#3a4d69",
              opacity: 0.5,
              zoom: 4,
            },
            {
              color: "#3a4d69",
              opacity: 0.5,
              zoom: 5,
            },
            {
              color: "#3a4d69",
              opacity: 0.5,
              zoom: 6,
            },
            {
              color: "#3a4d69",
              opacity: 0.5,
              zoom: 7,
            },
            {
              color: "#3a4d69",
              opacity: 0.5,
              zoom: 8,
            },
            {
              color: "#3a4d69",
              opacity: 0.5,
              zoom: 9,
            },
            {
              color: "#3a4d69",
              opacity: 0.5,
              zoom: 10,
            },
            {
              color: "#3a4d69",
              opacity: 0.5,
              zoom: 11,
            },
            {
              color: "#3a4d69",
              opacity: 0.5,
              zoom: 12,
            },
            {
              color: "#3a4d69",
              opacity: 1,
              zoom: 13,
            },
            {
              color: "#374863",
              opacity: 1,
              zoom: 14,
            },
            {
              color: "#33435c",
              opacity: 1,
              zoom: 15,
            },
            {
              color: "#32425b",
              opacity: 1,
              zoom: 16,
            },
            {
              color: "#32415a",
              opacity: 1,
              zoom: 17,
            },
            {
              color: "#314159",
              opacity: 1,
              zoom: 18,
            },
            {
              color: "#304058",
              opacity: 1,
              zoom: 19,
            },
            {
              color: "#303f57",
              opacity: 1,
              zoom: 20,
            },
            {
              color: "#2f3e56",
              opacity: 1,
              zoom: 21,
            },
          ],
        },
        {
          tags: "locality",
          elements: "geometry",
          stylers: [
            {
              color: "#3a4d69",
              zoom: 0,
            },
            {
              color: "#3a4d69",
              zoom: 1,
            },
            {
              color: "#3a4d69",
              zoom: 2,
            },
            {
              color: "#3a4d69",
              zoom: 3,
            },
            {
              color: "#3a4d69",
              zoom: 4,
            },
            {
              color: "#3a4d69",
              zoom: 5,
            },
            {
              color: "#3a4d69",
              zoom: 6,
            },
            {
              color: "#3a4d69",
              zoom: 7,
            },
            {
              color: "#3a4d69",
              zoom: 8,
            },
            {
              color: "#3a4d69",
              zoom: 9,
            },
            {
              color: "#3a4d69",
              zoom: 10,
            },
            {
              color: "#3a4d69",
              zoom: 11,
            },
            {
              color: "#3a4d69",
              zoom: 12,
            },
            {
              color: "#3a4d69",
              zoom: 13,
            },
            {
              color: "#374863",
              zoom: 14,
            },
            {
              color: "#33435c",
              zoom: 15,
            },
            {
              color: "#32425b",
              zoom: 16,
            },
            {
              color: "#32415a",
              zoom: 17,
            },
            {
              color: "#314159",
              zoom: 18,
            },
            {
              color: "#304058",
              zoom: 19,
            },
            {
              color: "#303f57",
              zoom: 20,
            },
            {
              color: "#2f3e56",
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            any: "structure",
            none: ["building", "fence"],
          },
          elements: "geometry",
          stylers: [
            {
              opacity: 0.9,
            },
            {
              color: "#3a4d69",
              zoom: 0,
            },
            {
              color: "#3a4d69",
              zoom: 1,
            },
            {
              color: "#3a4d69",
              zoom: 2,
            },
            {
              color: "#3a4d69",
              zoom: 3,
            },
            {
              color: "#3a4d69",
              zoom: 4,
            },
            {
              color: "#3a4d69",
              zoom: 5,
            },
            {
              color: "#3a4d69",
              zoom: 6,
            },
            {
              color: "#3a4d69",
              zoom: 7,
            },
            {
              color: "#3a4d69",
              zoom: 8,
            },
            {
              color: "#3a4d69",
              zoom: 9,
            },
            {
              color: "#3a4d69",
              zoom: 10,
            },
            {
              color: "#3a4d69",
              zoom: 11,
            },
            {
              color: "#3a4d69",
              zoom: 12,
            },
            {
              color: "#3a4d69",
              zoom: 13,
            },
            {
              color: "#374863",
              zoom: 14,
            },
            {
              color: "#33435c",
              zoom: 15,
            },
            {
              color: "#32425b",
              zoom: 16,
            },
            {
              color: "#32415a",
              zoom: 17,
            },
            {
              color: "#314159",
              zoom: 18,
            },
            {
              color: "#304058",
              zoom: 19,
            },
            {
              color: "#303f57",
              zoom: 20,
            },
            {
              color: "#2f3e56",
              zoom: 21,
            },
          ],
        },
        {
          tags: "building",
          elements: "geometry.fill",
          stylers: [
            {
              color: "#3a4d69",
            },
            {
              opacity: 0.7,
              zoom: 0,
            },
            {
              opacity: 0.7,
              zoom: 1,
            },
            {
              opacity: 0.7,
              zoom: 2,
            },
            {
              opacity: 0.7,
              zoom: 3,
            },
            {
              opacity: 0.7,
              zoom: 4,
            },
            {
              opacity: 0.7,
              zoom: 5,
            },
            {
              opacity: 0.7,
              zoom: 6,
            },
            {
              opacity: 0.7,
              zoom: 7,
            },
            {
              opacity: 0.7,
              zoom: 8,
            },
            {
              opacity: 0.7,
              zoom: 9,
            },
            {
              opacity: 0.7,
              zoom: 10,
            },
            {
              opacity: 0.7,
              zoom: 11,
            },
            {
              opacity: 0.7,
              zoom: 12,
            },
            {
              opacity: 0.7,
              zoom: 13,
            },
            {
              opacity: 0.7,
              zoom: 14,
            },
            {
              opacity: 0.7,
              zoom: 15,
            },
            {
              opacity: 0.9,
              zoom: 16,
            },
            {
              opacity: 0.6,
              zoom: 17,
            },
            {
              opacity: 0.6,
              zoom: 18,
            },
            {
              opacity: 0.6,
              zoom: 19,
            },
            {
              opacity: 0.6,
              zoom: 20,
            },
            {
              opacity: 0.6,
              zoom: 21,
            },
          ],
        },
        {
          tags: "building",
          elements: "geometry.outline",
          stylers: [
            {
              color: "#486084",
            },
            {
              opacity: 0.5,
              zoom: 0,
            },
            {
              opacity: 0.5,
              zoom: 1,
            },
            {
              opacity: 0.5,
              zoom: 2,
            },
            {
              opacity: 0.5,
              zoom: 3,
            },
            {
              opacity: 0.5,
              zoom: 4,
            },
            {
              opacity: 0.5,
              zoom: 5,
            },
            {
              opacity: 0.5,
              zoom: 6,
            },
            {
              opacity: 0.5,
              zoom: 7,
            },
            {
              opacity: 0.5,
              zoom: 8,
            },
            {
              opacity: 0.5,
              zoom: 9,
            },
            {
              opacity: 0.5,
              zoom: 10,
            },
            {
              opacity: 0.5,
              zoom: 11,
            },
            {
              opacity: 0.5,
              zoom: 12,
            },
            {
              opacity: 0.5,
              zoom: 13,
            },
            {
              opacity: 0.5,
              zoom: 14,
            },
            {
              opacity: 0.5,
              zoom: 15,
            },
            {
              opacity: 0.5,
              zoom: 16,
            },
            {
              opacity: 1,
              zoom: 17,
            },
            {
              opacity: 1,
              zoom: 18,
            },
            {
              opacity: 1,
              zoom: 19,
            },
            {
              opacity: 1,
              zoom: 20,
            },
            {
              opacity: 1,
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            any: "urban_area",
            none: [
              "residential",
              "industrial",
              "cemetery",
              "park",
              "medical",
              "sports_ground",
              "beach",
              "construction_site",
            ],
          },
          elements: "geometry",
          stylers: [
            {
              color: "#415676",
              opacity: 1,
              zoom: 0,
            },
            {
              color: "#415676",
              opacity: 1,
              zoom: 1,
            },
            {
              color: "#415676",
              opacity: 1,
              zoom: 2,
            },
            {
              color: "#415676",
              opacity: 1,
              zoom: 3,
            },
            {
              color: "#415676",
              opacity: 1,
              zoom: 4,
            },
            {
              color: "#415676",
              opacity: 1,
              zoom: 5,
            },
            {
              color: "#415676",
              opacity: 1,
              zoom: 6,
            },
            {
              color: "#415676",
              opacity: 1,
              zoom: 7,
            },
            {
              color: "#415676",
              opacity: 1,
              zoom: 8,
            },
            {
              color: "#415676",
              opacity: 1,
              zoom: 9,
            },
            {
              color: "#415676",
              opacity: 1,
              zoom: 10,
            },
            {
              color: "#415676",
              opacity: 1,
              zoom: 11,
            },
            {
              color: "#415676",
              opacity: 1,
              zoom: 12,
            },
            {
              color: "#415676",
              opacity: 1,
              zoom: 13,
            },
            {
              color: "#3d506e",
              opacity: 1,
              zoom: 14,
            },
            {
              color: "#384a66",
              opacity: 1,
              zoom: 15,
            },
            {
              color: "#34445e",
              opacity: 0.67,
              zoom: 16,
            },
            {
              color: "#2f3e56",
              opacity: 0.33,
              zoom: 17,
            },
            {
              color: "#2f3e56",
              opacity: 0,
              zoom: 18,
            },
            {
              color: "#2f3e56",
              opacity: 0,
              zoom: 19,
            },
            {
              color: "#2f3e56",
              opacity: 0,
              zoom: 20,
            },
            {
              color: "#2f3e56",
              opacity: 0,
              zoom: 21,
            },
          ],
        },
        {
          tags: "poi",
          elements: "label.icon",
          stylers: [
            {
              color: "#10233c",
            },
            {
              "secondary-color": "#9ab8e4",
            },
            {
              "tertiary-color": "#adbcd2",
            },
          ],
        },
        {
          tags: "poi",
          elements: "label.text.fill",
          stylers: [
            {
              color: "#b3c2d5",
            },
          ],
        },
        {
          tags: "poi",
          elements: "label.text.outline",
          stylers: [
            {
              color: "#0b0e13",
            },
            {
              opacity: 0.5,
            },
          ],
        },
        {
          tags: "outdoor",
          elements: "label.icon",
          stylers: [
            {
              color: "#10233c",
            },
            {
              "secondary-color": "#9ab8e4",
            },
            {
              "tertiary-color": "#adbcd2",
            },
          ],
        },
        {
          tags: "outdoor",
          elements: "label.text.fill",
          stylers: [
            {
              color: "#b3c2d5",
            },
          ],
        },
        {
          tags: "outdoor",
          elements: "label.text.outline",
          stylers: [
            {
              color: "#0b0e13",
            },
            {
              opacity: 0.5,
            },
          ],
        },
        {
          tags: "park",
          elements: "label.icon",
          stylers: [
            {
              color: "#10233c",
            },
            {
              "secondary-color": "#9ab8e4",
            },
            {
              "tertiary-color": "#adbcd2",
            },
          ],
        },
        {
          tags: "park",
          elements: "label.text.fill",
          stylers: [
            {
              color: "#b3c2d5",
            },
          ],
        },
        {
          tags: "park",
          elements: "label.text.outline",
          stylers: [
            {
              color: "#0b0e13",
            },
            {
              opacity: 0.5,
            },
          ],
        },
        {
          tags: "cemetery",
          elements: "label.icon",
          stylers: [
            {
              color: "#10233c",
            },
            {
              "secondary-color": "#9ab8e4",
            },
            {
              "tertiary-color": "#adbcd2",
            },
          ],
        },
        {
          tags: "cemetery",
          elements: "label.text.fill",
          stylers: [
            {
              color: "#b3c2d5",
            },
          ],
        },
        {
          tags: "cemetery",
          elements: "label.text.outline",
          stylers: [
            {
              color: "#0b0e13",
            },
            {
              opacity: 0.5,
            },
          ],
        },
        {
          tags: "beach",
          elements: "label.icon",
          stylers: [
            {
              color: "#10233c",
            },
            {
              "secondary-color": "#9ab8e4",
            },
            {
              "tertiary-color": "#adbcd2",
            },
          ],
        },
        {
          tags: "beach",
          elements: "label.text.fill",
          stylers: [
            {
              color: "#b3c2d5",
            },
          ],
        },
        {
          tags: "beach",
          elements: "label.text.outline",
          stylers: [
            {
              color: "#0b0e13",
            },
            {
              opacity: 0.5,
            },
          ],
        },
        {
          tags: "medical",
          elements: "label.icon",
          stylers: [
            {
              color: "#10233c",
            },
            {
              "secondary-color": "#9ab8e4",
            },
            {
              "tertiary-color": "#adbcd2",
            },
          ],
        },
        {
          tags: "medical",
          elements: "label.text.fill",
          stylers: [
            {
              color: "#b3c2d5",
            },
          ],
        },
        {
          tags: "medical",
          elements: "label.text.outline",
          stylers: [
            {
              color: "#0b0e13",
            },
            {
              opacity: 0.5,
            },
          ],
        },
        {
          tags: "shopping",
          elements: "label.icon",
          stylers: [
            {
              color: "#10233c",
            },
            {
              "secondary-color": "#9ab8e4",
            },
            {
              "tertiary-color": "#adbcd2",
            },
          ],
        },
        {
          tags: "shopping",
          elements: "label.text.fill",
          stylers: [
            {
              color: "#b3c2d5",
            },
          ],
        },
        {
          tags: "shopping",
          elements: "label.text.outline",
          stylers: [
            {
              color: "#0b0e13",
            },
            {
              opacity: 0.5,
            },
          ],
        },
        {
          tags: "commercial_services",
          elements: "label.icon",
          stylers: [
            {
              color: "#10233c",
            },
            {
              "secondary-color": "#9ab8e4",
            },
            {
              "tertiary-color": "#adbcd2",
            },
          ],
        },
        {
          tags: "commercial_services",
          elements: "label.text.fill",
          stylers: [
            {
              color: "#b3c2d5",
            },
          ],
        },
        {
          tags: "commercial_services",
          elements: "label.text.outline",
          stylers: [
            {
              color: "#0b0e13",
            },
            {
              opacity: 0.5,
            },
          ],
        },
        {
          tags: "food_and_drink",
          elements: "label.icon",
          stylers: [
            {
              color: "#10233c",
            },
            {
              "secondary-color": "#9ab8e4",
            },
            {
              "tertiary-color": "#adbcd2",
            },
          ],
        },
        {
          tags: "food_and_drink",
          elements: "label.text.fill",
          stylers: [
            {
              color: "#b3c2d5",
            },
          ],
        },
        {
          tags: "food_and_drink",
          elements: "label.text.outline",
          stylers: [
            {
              color: "#0b0e13",
            },
            {
              opacity: 0.5,
            },
          ],
        },
        {
          tags: "road",
          elements: "label.icon",
          types: "point",
          stylers: [
            {
              color: "#10233c",
            },
            {
              "secondary-color": "#9ab8e4",
            },
            {
              "tertiary-color": "#adbcd2",
            },
          ],
        },
        {
          tags: "road",
          elements: "label.text.fill",
          types: "point",
          stylers: [
            {
              color: "#9ab8e4",
            },
          ],
        },
        {
          tags: "entrance",
          elements: "label.icon",
          stylers: [
            {
              color: "#10233c",
            },
            {
              "secondary-color": "#9ab8e4",
            },
            {
              hue: "#3671c9",
            },
          ],
        },
        {
          tags: "locality",
          elements: "label.icon",
          stylers: [
            {
              color: "#10233c",
            },
            {
              "secondary-color": "#9ab8e4",
            },
          ],
        },
        {
          tags: "country",
          elements: "label.text.fill",
          stylers: [
            {
              opacity: 0.8,
            },
            {
              color: "#8298ba",
            },
          ],
        },
        {
          tags: "country",
          elements: "label.text.outline",
          stylers: [
            {
              color: "#0b0e13",
            },
            {
              opacity: 0.5,
            },
          ],
        },
        {
          tags: "region",
          elements: "label.text.fill",
          stylers: [
            {
              color: "#8298ba",
            },
            {
              opacity: 0.8,
            },
          ],
        },
        {
          tags: "region",
          elements: "label.text.outline",
          stylers: [
            {
              color: "#0b0e13",
            },
            {
              opacity: 0.5,
            },
          ],
        },
        {
          tags: "district",
          elements: "label.text.fill",
          stylers: [
            {
              color: "#8298ba",
            },
            {
              opacity: 0.8,
            },
          ],
        },
        {
          tags: "district",
          elements: "label.text.outline",
          stylers: [
            {
              color: "#0b0e13",
            },
            {
              opacity: 0.5,
            },
          ],
        },
        {
          tags: {
            any: "admin",
            none: ["country", "region", "locality", "district", "address"],
          },
          elements: "label.text.fill",
          stylers: [
            {
              color: "#8298ba",
            },
          ],
        },
        {
          tags: {
            any: "admin",
            none: ["country", "region", "locality", "district", "address"],
          },
          elements: "label.text.outline",
          stylers: [
            {
              color: "#0b0e13",
            },
            {
              opacity: 0.5,
            },
          ],
        },
        {
          tags: "locality",
          elements: "label.text.fill",
          stylers: [
            {
              color: "#b3c2d5",
              zoom: 0,
            },
            {
              color: "#b3c2d5",
              zoom: 1,
            },
            {
              color: "#b3c2d5",
              zoom: 2,
            },
            {
              color: "#b3c2d5",
              zoom: 3,
            },
            {
              color: "#b3c2d5",
              zoom: 4,
            },
            {
              color: "#b6c4d6",
              zoom: 5,
            },
            {
              color: "#b9c6d8",
              zoom: 6,
            },
            {
              color: "#bbc8d9",
              zoom: 7,
            },
            {
              color: "#becbdb",
              zoom: 8,
            },
            {
              color: "#c1cddc",
              zoom: 9,
            },
            {
              color: "#c4cfde",
              zoom: 10,
            },
            {
              color: "#c4cfde",
              zoom: 11,
            },
            {
              color: "#c4cfde",
              zoom: 12,
            },
            {
              color: "#c4cfde",
              zoom: 13,
            },
            {
              color: "#c4cfde",
              zoom: 14,
            },
            {
              color: "#c4cfde",
              zoom: 15,
            },
            {
              color: "#c4cfde",
              zoom: 16,
            },
            {
              color: "#c4cfde",
              zoom: 17,
            },
            {
              color: "#c4cfde",
              zoom: 18,
            },
            {
              color: "#c4cfde",
              zoom: 19,
            },
            {
              color: "#c4cfde",
              zoom: 20,
            },
            {
              color: "#c4cfde",
              zoom: 21,
            },
          ],
        },
        {
          tags: "locality",
          elements: "label.text.outline",
          stylers: [
            {
              color: "#0b0e13",
            },
            {
              opacity: 0.5,
            },
          ],
        },
        {
          tags: "road",
          elements: "label.text.fill",
          types: "polyline",
          stylers: [
            {
              color: "#b3c2d5",
            },
          ],
        },
        {
          tags: "road",
          elements: "label.text.outline",
          types: "polyline",
          stylers: [
            {
              color: "#0b0e13",
            },
            {
              opacity: 0.5,
            },
          ],
        },
        {
          tags: "road",
          elements: "geometry.fill.pattern",
          types: "polyline",
          stylers: [
            {
              scale: 1,
            },
            {
              color: "#728db1",
            },
          ],
        },
        {
          tags: "road",
          elements: "label.text.fill",
          types: "point",
          stylers: [
            {
              color: "#a2bfe6",
            },
          ],
        },
        {
          tags: "structure",
          elements: "label.text.fill",
          stylers: [
            {
              color: "#486084",
            },
            {
              opacity: 0.5,
            },
          ],
        },
        {
          tags: "structure",
          elements: "label.text.outline",
          stylers: [
            {
              color: "#0b0e13",
            },
            {
              opacity: 0.5,
            },
          ],
        },
        {
          tags: "address",
          elements: "label.text.fill",
          stylers: [
            {
              color: "#486084",
            },
            {
              opacity: 0.9,
              zoom: 0,
            },
            {
              opacity: 0.9,
              zoom: 1,
            },
            {
              opacity: 0.9,
              zoom: 2,
            },
            {
              opacity: 0.9,
              zoom: 3,
            },
            {
              opacity: 0.9,
              zoom: 4,
            },
            {
              opacity: 0.9,
              zoom: 5,
            },
            {
              opacity: 0.9,
              zoom: 6,
            },
            {
              opacity: 0.9,
              zoom: 7,
            },
            {
              opacity: 0.9,
              zoom: 8,
            },
            {
              opacity: 0.9,
              zoom: 9,
            },
            {
              opacity: 0.9,
              zoom: 10,
            },
            {
              opacity: 0.9,
              zoom: 11,
            },
            {
              opacity: 0.9,
              zoom: 12,
            },
            {
              opacity: 0.9,
              zoom: 13,
            },
            {
              opacity: 0.9,
              zoom: 14,
            },
            {
              opacity: 0.9,
              zoom: 15,
            },
            {
              opacity: 0.9,
              zoom: 16,
            },
            {
              opacity: 1,
              zoom: 17,
            },
            {
              opacity: 1,
              zoom: 18,
            },
            {
              opacity: 1,
              zoom: 19,
            },
            {
              opacity: 1,
              zoom: 20,
            },
            {
              opacity: 1,
              zoom: 21,
            },
          ],
        },
        {
          tags: "address",
          elements: "label.text.outline",
          stylers: [
            {
              color: "#0b0e13",
            },
            {
              opacity: 0.5,
            },
          ],
        },
        {
          tags: "landscape",
          elements: "label.text.fill",
          stylers: [
            {
              color: "#8298ba",
              opacity: 1,
              zoom: 0,
            },
            {
              color: "#8298ba",
              opacity: 1,
              zoom: 1,
            },
            {
              color: "#8298ba",
              opacity: 1,
              zoom: 2,
            },
            {
              color: "#8298ba",
              opacity: 1,
              zoom: 3,
            },
            {
              color: "#486084",
              opacity: 0.5,
              zoom: 4,
            },
            {
              color: "#486084",
              opacity: 0.5,
              zoom: 5,
            },
            {
              color: "#486084",
              opacity: 0.5,
              zoom: 6,
            },
            {
              color: "#486084",
              opacity: 0.5,
              zoom: 7,
            },
            {
              color: "#486084",
              opacity: 0.5,
              zoom: 8,
            },
            {
              color: "#486084",
              opacity: 0.5,
              zoom: 9,
            },
            {
              color: "#486084",
              opacity: 0.5,
              zoom: 10,
            },
            {
              color: "#486084",
              opacity: 0.5,
              zoom: 11,
            },
            {
              color: "#486084",
              opacity: 0.5,
              zoom: 12,
            },
            {
              color: "#486084",
              opacity: 0.5,
              zoom: 13,
            },
            {
              color: "#486084",
              opacity: 0.5,
              zoom: 14,
            },
            {
              color: "#486084",
              opacity: 0.5,
              zoom: 15,
            },
            {
              color: "#486084",
              opacity: 0.5,
              zoom: 16,
            },
            {
              color: "#486084",
              opacity: 0.5,
              zoom: 17,
            },
            {
              color: "#486084",
              opacity: 0.5,
              zoom: 18,
            },
            {
              color: "#486084",
              opacity: 0.5,
              zoom: 19,
            },
            {
              color: "#486084",
              opacity: 0.5,
              zoom: 20,
            },
            {
              color: "#486084",
              opacity: 0.5,
              zoom: 21,
            },
          ],
        },
        {
          tags: "landscape",
          elements: "label.text.outline",
          stylers: [
            {
              color: "#0b0e13",
            },
            {
              opacity: 0.5,
              zoom: 0,
            },
            {
              opacity: 0.5,
              zoom: 1,
            },
            {
              opacity: 0.5,
              zoom: 2,
            },
            {
              opacity: 0.5,
              zoom: 3,
            },
            {
              opacity: 0,
              zoom: 4,
            },
            {
              opacity: 0,
              zoom: 5,
            },
            {
              opacity: 0,
              zoom: 6,
            },
            {
              opacity: 0,
              zoom: 7,
            },
            {
              opacity: 0,
              zoom: 8,
            },
            {
              opacity: 0,
              zoom: 9,
            },
            {
              opacity: 0,
              zoom: 10,
            },
            {
              opacity: 0,
              zoom: 11,
            },
            {
              opacity: 0,
              zoom: 12,
            },
            {
              opacity: 0,
              zoom: 13,
            },
            {
              opacity: 0,
              zoom: 14,
            },
            {
              opacity: 0,
              zoom: 15,
            },
            {
              opacity: 0,
              zoom: 16,
            },
            {
              opacity: 0,
              zoom: 17,
            },
            {
              opacity: 0,
              zoom: 18,
            },
            {
              opacity: 0,
              zoom: 19,
            },
            {
              opacity: 0,
              zoom: 20,
            },
            {
              opacity: 0,
              zoom: 21,
            },
          ],
        },
        {
          tags: "water",
          elements: "label.text.fill",
          stylers: [
            {
              color: "#3671c9",
            },
            {
              opacity: 0.8,
            },
          ],
        },
        {
          tags: "water",
          elements: "label.text.outline",
          types: "polyline",
          stylers: [
            {
              color: "#0b0e13",
            },
            {
              opacity: 0.2,
            },
          ],
        },
        {
          tags: {
            any: "road_1",
            none: "is_tunnel",
          },
          elements: "geometry.fill",
          stylers: [
            {
              color: "#516c94",
              scale: 0,
              zoom: 0,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 1,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 2,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 3,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 4,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 5,
            },
            {
              color: "#516c94",
              scale: 2.64,
              zoom: 6,
            },
            {
              color: "#516c94",
              scale: 2.84,
              zoom: 7,
            },
            {
              color: "#516c94",
              scale: 3.13,
              zoom: 8,
            },
            {
              color: "#516c94",
              scale: 3.55,
              zoom: 9,
            },
            {
              color: "#516c94",
              scale: 3.21,
              zoom: 10,
            },
            {
              color: "#516c94",
              scale: 2.72,
              zoom: 11,
            },
            {
              color: "#516c94",
              scale: 2.35,
              zoom: 12,
            },
            {
              color: "#516c94",
              scale: 2.02,
              zoom: 13,
            },
            {
              color: "#506b92",
              scale: 1.81,
              zoom: 14,
            },
            {
              color: "#4f6990",
              scale: 1.69,
              zoom: 15,
            },
            {
              color: "#4e688e",
              scale: 1.66,
              zoom: 16,
            },
            {
              color: "#4d668c",
              scale: 1.31,
              zoom: 17,
            },
            {
              color: "#4b658a",
              scale: 1.08,
              zoom: 18,
            },
            {
              color: "#4a6388",
              scale: 0.93,
              zoom: 19,
            },
            {
              color: "#496286",
              scale: 0.84,
              zoom: 20,
            },
            {
              color: "#486084",
              scale: 0.8,
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            any: "road_1",
          },
          elements: "geometry.outline",
          stylers: [
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 0,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 1,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 2,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 3,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 4,
            },
            {
              color: "#2d3c53",
              scale: 0.9,
              zoom: 5,
            },
            {
              color: "#2d3c53",
              scale: 1.96,
              zoom: 6,
            },
            {
              color: "#2d3c53",
              scale: 1.96,
              zoom: 7,
            },
            {
              color: "#2d3c53",
              scale: 2.02,
              zoom: 8,
            },
            {
              color: "#2d3c53",
              scale: 2.16,
              zoom: 9,
            },
            {
              color: "#2d3c53",
              scale: 2.16,
              zoom: 10,
            },
            {
              color: "#2d3c53",
              scale: 2.04,
              zoom: 11,
            },
            {
              color: "#2d3c53",
              scale: 1.93,
              zoom: 12,
            },
            {
              color: "#2d3c53",
              scale: 1.8,
              zoom: 13,
            },
            {
              color: "#2d3c53",
              scale: 1.71,
              zoom: 14,
            },
            {
              color: "#2d3c53",
              scale: 1.68,
              zoom: 15,
            },
            {
              color: "#2d3c53",
              scale: 1.7,
              zoom: 16,
            },
            {
              color: "#2d3c53",
              scale: 1.38,
              zoom: 17,
            },
            {
              color: "#2d3c53",
              scale: 1.15,
              zoom: 18,
            },
            {
              color: "#2d3c53",
              scale: 1,
              zoom: 19,
            },
            {
              color: "#2d3c53",
              scale: 0.91,
              zoom: 20,
            },
            {
              color: "#2d3c53",
              scale: 0.87,
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            any: "road_2",
            none: "is_tunnel",
          },
          elements: "geometry.fill",
          stylers: [
            {
              color: "#516c94",
              scale: 0,
              zoom: 0,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 1,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 2,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 3,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 4,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 5,
            },
            {
              color: "#516c94",
              scale: 2.64,
              zoom: 6,
            },
            {
              color: "#516c94",
              scale: 2.84,
              zoom: 7,
            },
            {
              color: "#516c94",
              scale: 3.13,
              zoom: 8,
            },
            {
              color: "#516c94",
              scale: 3.55,
              zoom: 9,
            },
            {
              color: "#516c94",
              scale: 3.21,
              zoom: 10,
            },
            {
              color: "#516c94",
              scale: 2.72,
              zoom: 11,
            },
            {
              color: "#516c94",
              scale: 2.35,
              zoom: 12,
            },
            {
              color: "#516c94",
              scale: 2.02,
              zoom: 13,
            },
            {
              color: "#506b92",
              scale: 1.81,
              zoom: 14,
            },
            {
              color: "#4f6990",
              scale: 1.69,
              zoom: 15,
            },
            {
              color: "#4e688e",
              scale: 1.66,
              zoom: 16,
            },
            {
              color: "#4d668c",
              scale: 1.31,
              zoom: 17,
            },
            {
              color: "#4b658a",
              scale: 1.08,
              zoom: 18,
            },
            {
              color: "#4a6388",
              scale: 0.93,
              zoom: 19,
            },
            {
              color: "#496286",
              scale: 0.84,
              zoom: 20,
            },
            {
              color: "#486084",
              scale: 0.8,
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            any: "road_2",
          },
          elements: "geometry.outline",
          stylers: [
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 0,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 1,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 2,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 3,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 4,
            },
            {
              color: "#2d3c53",
              scale: 0.9,
              zoom: 5,
            },
            {
              color: "#2d3c53",
              scale: 1.96,
              zoom: 6,
            },
            {
              color: "#2d3c53",
              scale: 1.96,
              zoom: 7,
            },
            {
              color: "#2d3c53",
              scale: 2.02,
              zoom: 8,
            },
            {
              color: "#2d3c53",
              scale: 2.16,
              zoom: 9,
            },
            {
              color: "#2d3c53",
              scale: 2.16,
              zoom: 10,
            },
            {
              color: "#2d3c53",
              scale: 2.04,
              zoom: 11,
            },
            {
              color: "#2d3c53",
              scale: 1.93,
              zoom: 12,
            },
            {
              color: "#2d3c53",
              scale: 1.8,
              zoom: 13,
            },
            {
              color: "#2d3c53",
              scale: 1.71,
              zoom: 14,
            },
            {
              color: "#2d3c53",
              scale: 1.68,
              zoom: 15,
            },
            {
              color: "#2d3c53",
              scale: 1.7,
              zoom: 16,
            },
            {
              color: "#2d3c53",
              scale: 1.38,
              zoom: 17,
            },
            {
              color: "#2d3c53",
              scale: 1.15,
              zoom: 18,
            },
            {
              color: "#2d3c53",
              scale: 1,
              zoom: 19,
            },
            {
              color: "#2d3c53",
              scale: 0.91,
              zoom: 20,
            },
            {
              color: "#2d3c53",
              scale: 0.87,
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            any: "road_3",
            none: "is_tunnel",
          },
          elements: "geometry.fill",
          stylers: [
            {
              color: "#516c94",
              scale: 0,
              zoom: 0,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 1,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 2,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 3,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 4,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 5,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 6,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 7,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 8,
            },
            {
              color: "#516c94",
              scale: 2.23,
              zoom: 9,
            },
            {
              color: "#516c94",
              scale: 2.33,
              zoom: 10,
            },
            {
              color: "#516c94",
              scale: 1.49,
              zoom: 11,
            },
            {
              color: "#516c94",
              scale: 1.48,
              zoom: 12,
            },
            {
              color: "#516c94",
              scale: 1.23,
              zoom: 13,
            },
            {
              color: "#506b92",
              scale: 1.06,
              zoom: 14,
            },
            {
              color: "#4f6990",
              scale: 0.96,
              zoom: 15,
            },
            {
              color: "#4e688e",
              scale: 0.92,
              zoom: 16,
            },
            {
              color: "#4d668c",
              scale: 0.81,
              zoom: 17,
            },
            {
              color: "#4b658a",
              scale: 0.75,
              zoom: 18,
            },
            {
              color: "#4a6388",
              scale: 0.73,
              zoom: 19,
            },
            {
              color: "#496286",
              scale: 0.75,
              zoom: 20,
            },
            {
              color: "#486084",
              scale: 0.8,
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            any: "road_3",
          },
          elements: "geometry.outline",
          stylers: [
            {
              color: "#516c94",
              scale: 1.03,
              zoom: 0,
            },
            {
              color: "#516c94",
              scale: 1.03,
              zoom: 1,
            },
            {
              color: "#516c94",
              scale: 1.03,
              zoom: 2,
            },
            {
              color: "#516c94",
              scale: 1.03,
              zoom: 3,
            },
            {
              color: "#516c94",
              scale: 1.03,
              zoom: 4,
            },
            {
              color: "#516c94",
              scale: 1.03,
              zoom: 5,
            },
            {
              color: "#516c94",
              scale: 1.03,
              zoom: 6,
            },
            {
              color: "#516c94",
              scale: 1.03,
              zoom: 7,
            },
            {
              color: "#516c94",
              scale: 0.83,
              zoom: 8,
            },
            {
              color: "#2d3c53",
              scale: 2.71,
              zoom: 9,
            },
            {
              color: "#2d3c53",
              scale: 1.76,
              zoom: 10,
            },
            {
              color: "#2d3c53",
              scale: 1.31,
              zoom: 11,
            },
            {
              color: "#2d3c53",
              scale: 1.37,
              zoom: 12,
            },
            {
              color: "#2d3c53",
              scale: 1.21,
              zoom: 13,
            },
            {
              color: "#2d3c53",
              scale: 1.1,
              zoom: 14,
            },
            {
              color: "#2d3c53",
              scale: 1.02,
              zoom: 15,
            },
            {
              color: "#2d3c53",
              scale: 1,
              zoom: 16,
            },
            {
              color: "#2d3c53",
              scale: 0.88,
              zoom: 17,
            },
            {
              color: "#2d3c53",
              scale: 0.81,
              zoom: 18,
            },
            {
              color: "#2d3c53",
              scale: 0.79,
              zoom: 19,
            },
            {
              color: "#2d3c53",
              scale: 0.81,
              zoom: 20,
            },
            {
              color: "#2d3c53",
              scale: 0.87,
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            any: "road_4",
            none: "is_tunnel",
          },
          elements: "geometry.fill",
          stylers: [
            {
              color: "#516c94",
              scale: 0,
              zoom: 0,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 1,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 2,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 3,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 4,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 5,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 6,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 7,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 8,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 9,
            },
            {
              color: "#516c94",
              scale: 1.5,
              zoom: 10,
            },
            {
              color: "#516c94",
              scale: 1.12,
              zoom: 11,
            },
            {
              color: "#516c94",
              scale: 1.25,
              zoom: 12,
            },
            {
              color: "#516c94",
              scale: 1.05,
              zoom: 13,
            },
            {
              color: "#506b92",
              scale: 0.93,
              zoom: 14,
            },
            {
              color: "#4f6990",
              scale: 0.86,
              zoom: 15,
            },
            {
              color: "#4e688e",
              scale: 1.02,
              zoom: 16,
            },
            {
              color: "#4d668c",
              scale: 0.88,
              zoom: 17,
            },
            {
              color: "#4b658a",
              scale: 0.79,
              zoom: 18,
            },
            {
              color: "#4a6388",
              scale: 0.76,
              zoom: 19,
            },
            {
              color: "#496286",
              scale: 0.76,
              zoom: 20,
            },
            {
              color: "#486084",
              scale: 0.8,
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            any: "road_4",
          },
          elements: "geometry.outline",
          stylers: [
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 0,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 1,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 2,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 3,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 4,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 5,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 6,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 7,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 8,
            },
            {
              color: "#516c94",
              scale: 0.72,
              zoom: 9,
            },
            {
              color: "#2d3c53",
              scale: 1.22,
              zoom: 10,
            },
            {
              color: "#2d3c53",
              scale: 1.04,
              zoom: 11,
            },
            {
              color: "#2d3c53",
              scale: 1.17,
              zoom: 12,
            },
            {
              color: "#2d3c53",
              scale: 1.06,
              zoom: 13,
            },
            {
              color: "#2d3c53",
              scale: 0.97,
              zoom: 14,
            },
            {
              color: "#2d3c53",
              scale: 0.92,
              zoom: 15,
            },
            {
              color: "#2d3c53",
              scale: 1.09,
              zoom: 16,
            },
            {
              color: "#2d3c53",
              scale: 0.95,
              zoom: 17,
            },
            {
              color: "#2d3c53",
              scale: 0.86,
              zoom: 18,
            },
            {
              color: "#2d3c53",
              scale: 0.82,
              zoom: 19,
            },
            {
              color: "#2d3c53",
              scale: 0.82,
              zoom: 20,
            },
            {
              color: "#2d3c53",
              scale: 0.86,
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            any: "road_5",
            none: "is_tunnel",
          },
          elements: "geometry.fill",
          stylers: [
            {
              color: "#516c94",
              scale: 0,
              zoom: 0,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 1,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 2,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 3,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 4,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 5,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 6,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 7,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 8,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 9,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 10,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 11,
            },
            {
              color: "#516c94",
              scale: 1.11,
              zoom: 12,
            },
            {
              color: "#516c94",
              scale: 0.84,
              zoom: 13,
            },
            {
              color: "#506b92",
              scale: 0.72,
              zoom: 14,
            },
            {
              color: "#4f6990",
              scale: 0.84,
              zoom: 15,
            },
            {
              color: "#4e688e",
              scale: 0.97,
              zoom: 16,
            },
            {
              color: "#4d668c",
              scale: 0.83,
              zoom: 17,
            },
            {
              color: "#4b658a",
              scale: 0.75,
              zoom: 18,
            },
            {
              color: "#4a6388",
              scale: 0.73,
              zoom: 19,
            },
            {
              color: "#496286",
              scale: 0.74,
              zoom: 20,
            },
            {
              color: "#486084",
              scale: 0.8,
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            any: "road_5",
          },
          elements: "geometry.outline",
          stylers: [
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 0,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 1,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 2,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 3,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 4,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 5,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 6,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 7,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 8,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 9,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 10,
            },
            {
              color: "#516c94",
              scale: 0.4,
              zoom: 11,
            },
            {
              color: "#2d3c53",
              scale: 1.03,
              zoom: 12,
            },
            {
              color: "#2d3c53",
              scale: 0.88,
              zoom: 13,
            },
            {
              color: "#2d3c53",
              scale: 0.79,
              zoom: 14,
            },
            {
              color: "#2d3c53",
              scale: 0.91,
              zoom: 15,
            },
            {
              color: "#2d3c53",
              scale: 1.05,
              zoom: 16,
            },
            {
              color: "#2d3c53",
              scale: 0.9,
              zoom: 17,
            },
            {
              color: "#2d3c53",
              scale: 0.82,
              zoom: 18,
            },
            {
              color: "#2d3c53",
              scale: 0.79,
              zoom: 19,
            },
            {
              color: "#2d3c53",
              scale: 0.81,
              zoom: 20,
            },
            {
              color: "#2d3c53",
              scale: 0.86,
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            any: "road_6",
            none: "is_tunnel",
          },
          elements: "geometry.fill",
          stylers: [
            {
              color: "#516c94",
              scale: 0,
              zoom: 0,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 1,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 2,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 3,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 4,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 5,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 6,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 7,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 8,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 9,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 10,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 11,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 12,
            },
            {
              color: "#516c94",
              scale: 2,
              zoom: 13,
            },
            {
              color: "#506b92",
              scale: 1.13,
              zoom: 14,
            },
            {
              color: "#4f6990",
              scale: 1.11,
              zoom: 15,
            },
            {
              color: "#4e688e",
              scale: 1.16,
              zoom: 16,
            },
            {
              color: "#4d668c",
              scale: 0.93,
              zoom: 17,
            },
            {
              color: "#4b658a",
              scale: 0.8,
              zoom: 18,
            },
            {
              color: "#4a6388",
              scale: 0.75,
              zoom: 19,
            },
            {
              color: "#496286",
              scale: 0.75,
              zoom: 20,
            },
            {
              color: "#486084",
              scale: 0.8,
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            any: "road_6",
          },
          elements: "geometry.outline",
          stylers: [
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 0,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 1,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 2,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 3,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 4,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 5,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 6,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 7,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 8,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 9,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 10,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 11,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 12,
            },
            {
              color: "#2d3c53",
              scale: 1.49,
              zoom: 13,
            },
            {
              color: "#2d3c53",
              scale: 1.09,
              zoom: 14,
            },
            {
              color: "#2d3c53",
              scale: 1.13,
              zoom: 15,
            },
            {
              color: "#2d3c53",
              scale: 1.22,
              zoom: 16,
            },
            {
              color: "#2d3c53",
              scale: 0.99,
              zoom: 17,
            },
            {
              color: "#2d3c53",
              scale: 0.87,
              zoom: 18,
            },
            {
              color: "#2d3c53",
              scale: 0.82,
              zoom: 19,
            },
            {
              color: "#2d3c53",
              scale: 0.82,
              zoom: 20,
            },
            {
              color: "#2d3c53",
              scale: 0.86,
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            any: "road_7",
            none: "is_tunnel",
          },
          elements: "geometry.fill",
          stylers: [
            {
              color: "#516c94",
              scale: 0,
              zoom: 0,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 1,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 2,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 3,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 4,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 5,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 6,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 7,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 8,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 9,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 10,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 11,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 12,
            },
            {
              color: "#516c94",
              scale: 0,
              zoom: 13,
            },
            {
              color: "#506b92",
              scale: 0.8,
              zoom: 14,
            },
            {
              color: "#4f6990",
              scale: 0.69,
              zoom: 15,
            },
            {
              color: "#4e688e",
              scale: 0.78,
              zoom: 16,
            },
            {
              color: "#4d668c",
              scale: 0.71,
              zoom: 17,
            },
            {
              color: "#4b658a",
              scale: 0.69,
              zoom: 18,
            },
            {
              color: "#4a6388",
              scale: 0.7,
              zoom: 19,
            },
            {
              color: "#496286",
              scale: 0.74,
              zoom: 20,
            },
            {
              color: "#486084",
              scale: 0.8,
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            any: "road_7",
          },
          elements: "geometry.outline",
          stylers: [
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 0,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 1,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 2,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 3,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 4,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 5,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 6,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 7,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 8,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 9,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 10,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 11,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 12,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 13,
            },
            {
              color: "#2d3c53",
              scale: 0.84,
              zoom: 14,
            },
            {
              color: "#2d3c53",
              scale: 0.77,
              zoom: 15,
            },
            {
              color: "#2d3c53",
              scale: 0.84,
              zoom: 16,
            },
            {
              color: "#2d3c53",
              scale: 0.78,
              zoom: 17,
            },
            {
              color: "#2d3c53",
              scale: 0.75,
              zoom: 18,
            },
            {
              color: "#2d3c53",
              scale: 0.76,
              zoom: 19,
            },
            {
              color: "#2d3c53",
              scale: 0.79,
              zoom: 20,
            },
            {
              color: "#2d3c53",
              scale: 0.86,
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            any: "road_minor",
            none: "is_tunnel",
          },
          elements: "geometry.fill",
          stylers: [
            {
              color: "#364863",
            },
            {
              scale: 0,
              zoom: 0,
            },
            {
              scale: 0,
              zoom: 1,
            },
            {
              scale: 0,
              zoom: 2,
            },
            {
              scale: 0,
              zoom: 3,
            },
            {
              scale: 0,
              zoom: 4,
            },
            {
              scale: 0,
              zoom: 5,
            },
            {
              scale: 0,
              zoom: 6,
            },
            {
              scale: 0,
              zoom: 7,
            },
            {
              scale: 0,
              zoom: 8,
            },
            {
              scale: 0,
              zoom: 9,
            },
            {
              scale: 0,
              zoom: 10,
            },
            {
              scale: 0,
              zoom: 11,
            },
            {
              scale: 0,
              zoom: 12,
            },
            {
              scale: 0,
              zoom: 13,
            },
            {
              scale: 0,
              zoom: 14,
            },
            {
              scale: 0,
              zoom: 15,
            },
            {
              scale: 0.8,
              zoom: 16,
            },
            {
              scale: 0.8,
              zoom: 17,
            },
            {
              scale: 0.8,
              zoom: 18,
            },
            {
              scale: 0.8,
              zoom: 19,
            },
            {
              scale: 0.8,
              zoom: 20,
            },
            {
              scale: 0.8,
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            any: "road_minor",
          },
          elements: "geometry.outline",
          stylers: [
            {
              opacity: 0,
            },
          ],
        },
        {
          tags: {
            any: "road_unclassified",
            none: "is_tunnel",
          },
          elements: "geometry.fill",
          stylers: [
            {
              color: "#364863",
            },
            {
              scale: 0,
              zoom: 0,
            },
            {
              scale: 0,
              zoom: 1,
            },
            {
              scale: 0,
              zoom: 2,
            },
            {
              scale: 0,
              zoom: 3,
            },
            {
              scale: 0,
              zoom: 4,
            },
            {
              scale: 0,
              zoom: 5,
            },
            {
              scale: 0,
              zoom: 6,
            },
            {
              scale: 0,
              zoom: 7,
            },
            {
              scale: 0,
              zoom: 8,
            },
            {
              scale: 0,
              zoom: 9,
            },
            {
              scale: 0,
              zoom: 10,
            },
            {
              scale: 0,
              zoom: 11,
            },
            {
              scale: 0,
              zoom: 12,
            },
            {
              scale: 0,
              zoom: 13,
            },
            {
              scale: 0,
              zoom: 14,
            },
            {
              scale: 0,
              zoom: 15,
            },
            {
              scale: 0.8,
              zoom: 16,
            },
            {
              scale: 0.8,
              zoom: 17,
            },
            {
              scale: 0.8,
              zoom: 18,
            },
            {
              scale: 0.8,
              zoom: 19,
            },
            {
              scale: 0.8,
              zoom: 20,
            },
            {
              scale: 0.8,
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            any: "road_unclassified",
          },
          elements: "geometry.outline",
          stylers: [
            {
              opacity: 0,
            },
          ],
        },
        {
          tags: {
            all: "is_tunnel",
            none: "path",
          },
          elements: "geometry.fill",
          stylers: [
            {
              color: "#3e5270",
              zoom: 0,
            },
            {
              color: "#3e5270",
              zoom: 1,
            },
            {
              color: "#3e5270",
              zoom: 2,
            },
            {
              color: "#3e5270",
              zoom: 3,
            },
            {
              color: "#3e5270",
              zoom: 4,
            },
            {
              color: "#3e5270",
              zoom: 5,
            },
            {
              color: "#3e5270",
              zoom: 6,
            },
            {
              color: "#3e5270",
              zoom: 7,
            },
            {
              color: "#3e5270",
              zoom: 8,
            },
            {
              color: "#3e5270",
              zoom: 9,
            },
            {
              color: "#3e5270",
              zoom: 10,
            },
            {
              color: "#3e5270",
              zoom: 11,
            },
            {
              color: "#3e5270",
              zoom: 12,
            },
            {
              color: "#3e5270",
              zoom: 13,
            },
            {
              color: "#3a4d6a",
              zoom: 14,
            },
            {
              color: "#364863",
              zoom: 15,
            },
            {
              color: "#364762",
              zoom: 16,
            },
            {
              color: "#354661",
              zoom: 17,
            },
            {
              color: "#354660",
              zoom: 18,
            },
            {
              color: "#34455e",
              zoom: 19,
            },
            {
              color: "#34445d",
              zoom: 20,
            },
            {
              color: "#33435c",
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            all: "path",
            none: "is_tunnel",
          },
          elements: "geometry.fill",
          stylers: [
            {
              color: "#1b2432",
            },
            {
              opacity: 0.5,
              zoom: 0,
            },
            {
              opacity: 0.5,
              zoom: 1,
            },
            {
              opacity: 0.5,
              zoom: 2,
            },
            {
              opacity: 0.5,
              zoom: 3,
            },
            {
              opacity: 0.5,
              zoom: 4,
            },
            {
              opacity: 0.5,
              zoom: 5,
            },
            {
              opacity: 0.5,
              zoom: 6,
            },
            {
              opacity: 0.5,
              zoom: 7,
            },
            {
              opacity: 0.5,
              zoom: 8,
            },
            {
              opacity: 0.5,
              zoom: 9,
            },
            {
              opacity: 0.5,
              zoom: 10,
            },
            {
              opacity: 0.5,
              zoom: 11,
            },
            {
              opacity: 0.5,
              zoom: 12,
            },
            {
              opacity: 0.5,
              zoom: 13,
            },
            {
              opacity: 0.5,
              zoom: 14,
            },
            {
              opacity: 0.5,
              zoom: 15,
            },
            {
              opacity: 0.5,
              zoom: 16,
            },
            {
              opacity: 1,
              zoom: 17,
            },
            {
              opacity: 1,
              zoom: 18,
            },
            {
              opacity: 1,
              zoom: 19,
            },
            {
              opacity: 1,
              zoom: 20,
            },
            {
              opacity: 1,
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            all: "path",
            none: "is_tunnel",
          },
          elements: "geometry.outline",
          stylers: [
            {
              opacity: 0.7,
            },
            {
              color: "#3a4d69",
              zoom: 0,
            },
            {
              color: "#3a4d69",
              zoom: 1,
            },
            {
              color: "#3a4d69",
              zoom: 2,
            },
            {
              color: "#3a4d69",
              zoom: 3,
            },
            {
              color: "#3a4d69",
              zoom: 4,
            },
            {
              color: "#3a4d69",
              zoom: 5,
            },
            {
              color: "#3a4d69",
              zoom: 6,
            },
            {
              color: "#3a4d69",
              zoom: 7,
            },
            {
              color: "#3a4d69",
              zoom: 8,
            },
            {
              color: "#3a4d69",
              zoom: 9,
            },
            {
              color: "#3a4d69",
              zoom: 10,
            },
            {
              color: "#3a4d69",
              zoom: 11,
            },
            {
              color: "#3a4d69",
              zoom: 12,
            },
            {
              color: "#3a4d69",
              zoom: 13,
            },
            {
              color: "#374863",
              zoom: 14,
            },
            {
              color: "#33435c",
              zoom: 15,
            },
            {
              color: "#32425b",
              zoom: 16,
            },
            {
              color: "#32415a",
              zoom: 17,
            },
            {
              color: "#314159",
              zoom: 18,
            },
            {
              color: "#304058",
              zoom: 19,
            },
            {
              color: "#303f57",
              zoom: 20,
            },
            {
              color: "#2f3e56",
              zoom: 21,
            },
          ],
        },
        {
          tags: "road_construction",
          elements: "geometry.fill",
          stylers: [
            {
              color: "#516c94",
            },
          ],
        },
        {
          tags: "road_construction",
          elements: "geometry.outline",
          stylers: [
            {
              color: "#1b2432",
              zoom: 0,
            },
            {
              color: "#1b2432",
              zoom: 1,
            },
            {
              color: "#1b2432",
              zoom: 2,
            },
            {
              color: "#1b2432",
              zoom: 3,
            },
            {
              color: "#1b2432",
              zoom: 4,
            },
            {
              color: "#1b2432",
              zoom: 5,
            },
            {
              color: "#1b2432",
              zoom: 6,
            },
            {
              color: "#1b2432",
              zoom: 7,
            },
            {
              color: "#1b2432",
              zoom: 8,
            },
            {
              color: "#1b2432",
              zoom: 9,
            },
            {
              color: "#1b2432",
              zoom: 10,
            },
            {
              color: "#1b2432",
              zoom: 11,
            },
            {
              color: "#1b2432",
              zoom: 12,
            },
            {
              color: "#1b2432",
              zoom: 13,
            },
            {
              color: "#2d3c53",
              zoom: 14,
            },
            {
              color: "#1b2432",
              zoom: 15,
            },
            {
              color: "#18202d",
              zoom: 16,
            },
            {
              color: "#151c27",
              zoom: 17,
            },
            {
              color: "#121822",
              zoom: 18,
            },
            {
              color: "#0f141c",
              zoom: 19,
            },
            {
              color: "#0c1017",
              zoom: 20,
            },
            {
              color: "#090c11",
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            any: "ferry",
          },
          stylers: [
            {
              color: "#204479",
            },
          ],
        },
        {
          tags: "transit_location",
          elements: "label.icon",
          stylers: [
            {
              hue: "#10233c",
            },
            {
              saturation: -0.42,
            },
          ],
        },
        {
          tags: "transit_location",
          elements: "label.text.fill",
          stylers: [
            {
              color: "#a5bad9",
            },
          ],
        },
        {
          tags: "transit_location",
          elements: "label.text.outline",
          stylers: [
            {
              color: "#0b0e13",
            },
          ],
        },
        {
          tags: "transit_schema",
          elements: "geometry.fill",
          stylers: [
            {
              color: "#a5bad9",
            },
            {
              scale: 0.7,
            },
            {
              opacity: 0.6,
              zoom: 0,
            },
            {
              opacity: 0.6,
              zoom: 1,
            },
            {
              opacity: 0.6,
              zoom: 2,
            },
            {
              opacity: 0.6,
              zoom: 3,
            },
            {
              opacity: 0.6,
              zoom: 4,
            },
            {
              opacity: 0.6,
              zoom: 5,
            },
            {
              opacity: 0.6,
              zoom: 6,
            },
            {
              opacity: 0.6,
              zoom: 7,
            },
            {
              opacity: 0.6,
              zoom: 8,
            },
            {
              opacity: 0.6,
              zoom: 9,
            },
            {
              opacity: 0.6,
              zoom: 10,
            },
            {
              opacity: 0.6,
              zoom: 11,
            },
            {
              opacity: 0.6,
              zoom: 12,
            },
            {
              opacity: 0.6,
              zoom: 13,
            },
            {
              opacity: 0.6,
              zoom: 14,
            },
            {
              opacity: 0.5,
              zoom: 15,
            },
            {
              opacity: 0.4,
              zoom: 16,
            },
            {
              opacity: 0.4,
              zoom: 17,
            },
            {
              opacity: 0.4,
              zoom: 18,
            },
            {
              opacity: 0.4,
              zoom: 19,
            },
            {
              opacity: 0.4,
              zoom: 20,
            },
            {
              opacity: 0.4,
              zoom: 21,
            },
          ],
        },
        {
          tags: "transit_schema",
          elements: "geometry.outline",
          stylers: [
            {
              opacity: 0,
            },
          ],
        },
        {
          tags: "transit_line",
          elements: "geometry.fill.pattern",
          stylers: [
            {
              color: "#8aa0c1",
            },
            {
              opacity: 0,
              zoom: 0,
            },
            {
              opacity: 0,
              zoom: 1,
            },
            {
              opacity: 0,
              zoom: 2,
            },
            {
              opacity: 0,
              zoom: 3,
            },
            {
              opacity: 0,
              zoom: 4,
            },
            {
              opacity: 0,
              zoom: 5,
            },
            {
              opacity: 0,
              zoom: 6,
            },
            {
              opacity: 0,
              zoom: 7,
            },
            {
              opacity: 0,
              zoom: 8,
            },
            {
              opacity: 0,
              zoom: 9,
            },
            {
              opacity: 0,
              zoom: 10,
            },
            {
              opacity: 0,
              zoom: 11,
            },
            {
              opacity: 0,
              zoom: 12,
            },
            {
              opacity: 1,
              zoom: 13,
            },
            {
              opacity: 1,
              zoom: 14,
            },
            {
              opacity: 1,
              zoom: 15,
            },
            {
              opacity: 1,
              zoom: 16,
            },
            {
              opacity: 1,
              zoom: 17,
            },
            {
              opacity: 1,
              zoom: 18,
            },
            {
              opacity: 1,
              zoom: 19,
            },
            {
              opacity: 1,
              zoom: 20,
            },
            {
              opacity: 1,
              zoom: 21,
            },
          ],
        },
        {
          tags: "transit_line",
          elements: "geometry.fill",
          stylers: [
            {
              color: "#8aa0c1",
            },
            {
              scale: 0.4,
            },
            {
              opacity: 0,
              zoom: 0,
            },
            {
              opacity: 0,
              zoom: 1,
            },
            {
              opacity: 0,
              zoom: 2,
            },
            {
              opacity: 0,
              zoom: 3,
            },
            {
              opacity: 0,
              zoom: 4,
            },
            {
              opacity: 0,
              zoom: 5,
            },
            {
              opacity: 0,
              zoom: 6,
            },
            {
              opacity: 0,
              zoom: 7,
            },
            {
              opacity: 0,
              zoom: 8,
            },
            {
              opacity: 0,
              zoom: 9,
            },
            {
              opacity: 0,
              zoom: 10,
            },
            {
              opacity: 0,
              zoom: 11,
            },
            {
              opacity: 0,
              zoom: 12,
            },
            {
              opacity: 1,
              zoom: 13,
            },
            {
              opacity: 1,
              zoom: 14,
            },
            {
              opacity: 1,
              zoom: 15,
            },
            {
              opacity: 1,
              zoom: 16,
            },
            {
              opacity: 1,
              zoom: 17,
            },
            {
              opacity: 1,
              zoom: 18,
            },
            {
              opacity: 1,
              zoom: 19,
            },
            {
              opacity: 1,
              zoom: 20,
            },
            {
              opacity: 1,
              zoom: 21,
            },
          ],
        },
        {
          tags: "water",
          elements: "geometry",
          stylers: [
            {
              color: "#152d51",
              zoom: 0,
            },
            {
              color: "#152d51",
              zoom: 1,
            },
            {
              color: "#152d51",
              zoom: 2,
            },
            {
              color: "#152d51",
              zoom: 3,
            },
            {
              color: "#152d51",
              zoom: 4,
            },
            {
              color: "#152d51",
              zoom: 5,
            },
            {
              color: "#152d51",
              zoom: 6,
            },
            {
              color: "#152d51",
              zoom: 7,
            },
            {
              color: "#142c4e",
              zoom: 8,
            },
            {
              color: "#142a4c",
              zoom: 9,
            },
            {
              color: "#132949",
              zoom: 10,
            },
            {
              color: "#132847",
              zoom: 11,
            },
            {
              color: "#122746",
              zoom: 12,
            },
            {
              color: "#122644",
              zoom: 13,
            },
            {
              color: "#122542",
              zoom: 14,
            },
            {
              color: "#112440",
              zoom: 15,
            },
            {
              color: "#11233e",
              zoom: 16,
            },
            {
              color: "#10223c",
              zoom: 17,
            },
            {
              color: "#10203a",
              zoom: 18,
            },
            {
              color: "#0f1f38",
              zoom: 19,
            },
            {
              color: "#0f1e36",
              zoom: 20,
            },
            {
              color: "#0e1d34",
              zoom: 21,
            },
          ],
        },
        {
          tags: "water",
          elements: "geometry",
          types: "polyline",
          stylers: [
            {
              opacity: 0.4,
              zoom: 0,
            },
            {
              opacity: 0.4,
              zoom: 1,
            },
            {
              opacity: 0.4,
              zoom: 2,
            },
            {
              opacity: 0.4,
              zoom: 3,
            },
            {
              opacity: 0.6,
              zoom: 4,
            },
            {
              opacity: 0.8,
              zoom: 5,
            },
            {
              opacity: 1,
              zoom: 6,
            },
            {
              opacity: 1,
              zoom: 7,
            },
            {
              opacity: 1,
              zoom: 8,
            },
            {
              opacity: 1,
              zoom: 9,
            },
            {
              opacity: 1,
              zoom: 10,
            },
            {
              opacity: 1,
              zoom: 11,
            },
            {
              opacity: 1,
              zoom: 12,
            },
            {
              opacity: 1,
              zoom: 13,
            },
            {
              opacity: 1,
              zoom: 14,
            },
            {
              opacity: 1,
              zoom: 15,
            },
            {
              opacity: 1,
              zoom: 16,
            },
            {
              opacity: 1,
              zoom: 17,
            },
            {
              opacity: 1,
              zoom: 18,
            },
            {
              opacity: 1,
              zoom: 19,
            },
            {
              opacity: 1,
              zoom: 20,
            },
            {
              opacity: 1,
              zoom: 21,
            },
          ],
        },
        {
          tags: "bathymetry",
          elements: "geometry",
          stylers: [
            {
              hue: "#152d51",
            },
          ],
        },
        {
          tags: {
            any: ["industrial", "construction_site"],
          },
          elements: "geometry",
          stylers: [
            {
              color: "#35465f",
              zoom: 0,
            },
            {
              color: "#35465f",
              zoom: 1,
            },
            {
              color: "#35465f",
              zoom: 2,
            },
            {
              color: "#35465f",
              zoom: 3,
            },
            {
              color: "#35465f",
              zoom: 4,
            },
            {
              color: "#35465f",
              zoom: 5,
            },
            {
              color: "#35465f",
              zoom: 6,
            },
            {
              color: "#35465f",
              zoom: 7,
            },
            {
              color: "#35465f",
              zoom: 8,
            },
            {
              color: "#35465f",
              zoom: 9,
            },
            {
              color: "#35465f",
              zoom: 10,
            },
            {
              color: "#35465f",
              zoom: 11,
            },
            {
              color: "#35465f",
              zoom: 12,
            },
            {
              color: "#35465f",
              zoom: 13,
            },
            {
              color: "#314259",
              zoom: 14,
            },
            {
              color: "#2d3d52",
              zoom: 15,
            },
            {
              color: "#2d3c51",
              zoom: 16,
            },
            {
              color: "#2c3b50",
              zoom: 17,
            },
            {
              color: "#2c3b4f",
              zoom: 18,
            },
            {
              color: "#2b3a4e",
              zoom: 19,
            },
            {
              color: "#2b394d",
              zoom: 20,
            },
            {
              color: "#2a384c",
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            any: "transit",
            none: [
              "transit_location",
              "transit_line",
              "transit_schema",
              "is_unclassified_transit",
            ],
          },
          elements: "geometry",
          stylers: [
            {
              color: "#35465f",
              zoom: 0,
            },
            {
              color: "#35465f",
              zoom: 1,
            },
            {
              color: "#35465f",
              zoom: 2,
            },
            {
              color: "#35465f",
              zoom: 3,
            },
            {
              color: "#35465f",
              zoom: 4,
            },
            {
              color: "#35465f",
              zoom: 5,
            },
            {
              color: "#35465f",
              zoom: 6,
            },
            {
              color: "#35465f",
              zoom: 7,
            },
            {
              color: "#35465f",
              zoom: 8,
            },
            {
              color: "#35465f",
              zoom: 9,
            },
            {
              color: "#35465f",
              zoom: 10,
            },
            {
              color: "#35465f",
              zoom: 11,
            },
            {
              color: "#35465f",
              zoom: 12,
            },
            {
              color: "#35465f",
              zoom: 13,
            },
            {
              color: "#324159",
              zoom: 14,
            },
            {
              color: "#2e3c52",
              zoom: 15,
            },
            {
              color: "#2d3b51",
              zoom: 16,
            },
            {
              color: "#2d3a50",
              zoom: 17,
            },
            {
              color: "#2c3a4f",
              zoom: 18,
            },
            {
              color: "#2b394d",
              zoom: 19,
            },
            {
              color: "#2b384c",
              zoom: 20,
            },
            {
              color: "#2a374b",
              zoom: 21,
            },
          ],
        },
        {
          tags: "fence",
          elements: "geometry.fill",
          stylers: [
            {
              color: "#3c4f6d",
            },
            {
              opacity: 0.75,
              zoom: 0,
            },
            {
              opacity: 0.75,
              zoom: 1,
            },
            {
              opacity: 0.75,
              zoom: 2,
            },
            {
              opacity: 0.75,
              zoom: 3,
            },
            {
              opacity: 0.75,
              zoom: 4,
            },
            {
              opacity: 0.75,
              zoom: 5,
            },
            {
              opacity: 0.75,
              zoom: 6,
            },
            {
              opacity: 0.75,
              zoom: 7,
            },
            {
              opacity: 0.75,
              zoom: 8,
            },
            {
              opacity: 0.75,
              zoom: 9,
            },
            {
              opacity: 0.75,
              zoom: 10,
            },
            {
              opacity: 0.75,
              zoom: 11,
            },
            {
              opacity: 0.75,
              zoom: 12,
            },
            {
              opacity: 0.75,
              zoom: 13,
            },
            {
              opacity: 0.75,
              zoom: 14,
            },
            {
              opacity: 0.75,
              zoom: 15,
            },
            {
              opacity: 0.75,
              zoom: 16,
            },
            {
              opacity: 0.45,
              zoom: 17,
            },
            {
              opacity: 0.45,
              zoom: 18,
            },
            {
              opacity: 0.45,
              zoom: 19,
            },
            {
              opacity: 0.45,
              zoom: 20,
            },
            {
              opacity: 0.45,
              zoom: 21,
            },
          ],
        },
        {
          tags: "medical",
          elements: "geometry",
          stylers: [
            {
              color: "#35465f",
              zoom: 0,
            },
            {
              color: "#35465f",
              zoom: 1,
            },
            {
              color: "#35465f",
              zoom: 2,
            },
            {
              color: "#35465f",
              zoom: 3,
            },
            {
              color: "#35465f",
              zoom: 4,
            },
            {
              color: "#35465f",
              zoom: 5,
            },
            {
              color: "#35465f",
              zoom: 6,
            },
            {
              color: "#35465f",
              zoom: 7,
            },
            {
              color: "#35465f",
              zoom: 8,
            },
            {
              color: "#35465f",
              zoom: 9,
            },
            {
              color: "#35465f",
              zoom: 10,
            },
            {
              color: "#35465f",
              zoom: 11,
            },
            {
              color: "#35465f",
              zoom: 12,
            },
            {
              color: "#35465f",
              zoom: 13,
            },
            {
              color: "#314259",
              zoom: 14,
            },
            {
              color: "#2d3d52",
              zoom: 15,
            },
            {
              color: "#2d3c51",
              zoom: 16,
            },
            {
              color: "#2c3b50",
              zoom: 17,
            },
            {
              color: "#2c3b4f",
              zoom: 18,
            },
            {
              color: "#2b3a4e",
              zoom: 19,
            },
            {
              color: "#2b394d",
              zoom: 20,
            },
            {
              color: "#2a384c",
              zoom: 21,
            },
          ],
        },
        {
          tags: "beach",
          elements: "geometry",
          stylers: [
            {
              color: "#35465f",
              opacity: 0.3,
              zoom: 0,
            },
            {
              color: "#35465f",
              opacity: 0.3,
              zoom: 1,
            },
            {
              color: "#35465f",
              opacity: 0.3,
              zoom: 2,
            },
            {
              color: "#35465f",
              opacity: 0.3,
              zoom: 3,
            },
            {
              color: "#35465f",
              opacity: 0.3,
              zoom: 4,
            },
            {
              color: "#35465f",
              opacity: 0.3,
              zoom: 5,
            },
            {
              color: "#35465f",
              opacity: 0.3,
              zoom: 6,
            },
            {
              color: "#35465f",
              opacity: 0.3,
              zoom: 7,
            },
            {
              color: "#35465f",
              opacity: 0.3,
              zoom: 8,
            },
            {
              color: "#35465f",
              opacity: 0.3,
              zoom: 9,
            },
            {
              color: "#35465f",
              opacity: 0.3,
              zoom: 10,
            },
            {
              color: "#35465f",
              opacity: 0.3,
              zoom: 11,
            },
            {
              color: "#35465f",
              opacity: 0.3,
              zoom: 12,
            },
            {
              color: "#35465f",
              opacity: 0.65,
              zoom: 13,
            },
            {
              color: "#314259",
              opacity: 1,
              zoom: 14,
            },
            {
              color: "#2d3d52",
              opacity: 1,
              zoom: 15,
            },
            {
              color: "#2d3c51",
              opacity: 1,
              zoom: 16,
            },
            {
              color: "#2c3b50",
              opacity: 1,
              zoom: 17,
            },
            {
              color: "#2c3b4f",
              opacity: 1,
              zoom: 18,
            },
            {
              color: "#2b3a4e",
              opacity: 1,
              zoom: 19,
            },
            {
              color: "#2b394d",
              opacity: 1,
              zoom: 20,
            },
            {
              color: "#2a384c",
              opacity: 1,
              zoom: 21,
            },
          ],
        },
        {
          tags: {
            all: ["is_tunnel", "path"],
          },
          elements: "geometry.fill",
          stylers: [
            {
              color: "#273549",
            },
            {
              opacity: 0.3,
            },
          ],
        },
        {
          tags: {
            all: ["is_tunnel", "path"],
          },
          elements: "geometry.outline",
          stylers: [
            {
              opacity: 0,
            },
          ],
        },
        {
          tags: "road_limited",
          elements: "geometry.fill",
          stylers: [
            {
              color: "#1b2432",
            },
            {
              scale: 0,
              zoom: 0,
            },
            {
              scale: 0,
              zoom: 1,
            },
            {
              scale: 0,
              zoom: 2,
            },
            {
              scale: 0,
              zoom: 3,
            },
            {
              scale: 0,
              zoom: 4,
            },
            {
              scale: 0,
              zoom: 5,
            },
            {
              scale: 0,
              zoom: 6,
            },
            {
              scale: 0,
              zoom: 7,
            },
            {
              scale: 0,
              zoom: 8,
            },
            {
              scale: 0,
              zoom: 9,
            },
            {
              scale: 0,
              zoom: 10,
            },
            {
              scale: 0,
              zoom: 11,
            },
            {
              scale: 0,
              zoom: 12,
            },
            {
              scale: 0.1,
              zoom: 13,
            },
            {
              scale: 0.2,
              zoom: 14,
            },
            {
              scale: 0.3,
              zoom: 15,
            },
            {
              scale: 0.5,
              zoom: 16,
            },
            {
              scale: 0.6,
              zoom: 17,
            },
            {
              scale: 0.69,
              zoom: 18,
            },
            {
              scale: 0.7,
              zoom: 19,
            },
            {
              scale: 0.74,
              zoom: 20,
            },
            {
              scale: 0.8,
              zoom: 21,
            },
          ],
        },
        {
          tags: "road_limited",
          elements: "geometry.outline",
          stylers: [
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 0,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 1,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 2,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 3,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 4,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 5,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 6,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 7,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 8,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 9,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 10,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 11,
            },
            {
              color: "#516c94",
              scale: 0.9,
              zoom: 12,
            },
            {
              color: "#516c94",
              scale: 0.1,
              zoom: 13,
            },
            {
              color: "#2d3c53",
              scale: 0.2,
              zoom: 14,
            },
            {
              color: "#2d3c53",
              scale: 0.3,
              zoom: 15,
            },
            {
              color: "#2d3c53",
              scale: 0.5,
              zoom: 16,
            },
            {
              color: "#2d3c53",
              scale: 0.6,
              zoom: 17,
            },
            {
              color: "#2d3c53",
              scale: 0.75,
              zoom: 18,
            },
            {
              color: "#2d3c53",
              scale: 0.76,
              zoom: 19,
            },
            {
              color: "#2d3c53",
              scale: 0.79,
              zoom: 20,
            },
            {
              color: "#2d3c53",
              scale: 0.86,
              zoom: 21,
            },
          ],
        },
        {
          tags: "transit_stop",
          elements: "label.icon",
          stylers: [
            {
              color: "#0b0e13",
            },
            {
              "secondary-color": "#a5bad9",
            },
            {
              "tertiary-color": "#adbcd2",
            },
          ],
        },
        {
          tags: "entrance",
          elements: "label.text.fill",
          stylers: [
            {
              color: "#b3c2d5",
            },
            {
              opacity: 1,
            },
          ],
        },
        {
          tags: "entrance",
          elements: "label.text.outline",
          stylers: [
            {
              color: "#0b0e13",
            },
            {
              opacity: 0.5,
            },
          ],
        },
        {
          tags: {
            any: ["food_and_drink", "shopping", "commercial_services"],
          },
          stylers: {
            visibility: "off",
          },
        },
        {
          tags: {
            any: ["traffic_light"],
          },
          stylers: {
            visibility: "off",
          },
        },
        {
          tags: {
            any: ["entrance"],
          },
          stylers: {
            visibility: "off",
          },
        },
        {
          tags: {
            any: ["road"],
            none: [
              "road_1",
              "road_2",
              "road_3",
              "road_4",
              "road_5",
              "road_6",
              "road_7",
            ],
          },
          elements: "label.icon",
          stylers: {
            visibility: "off",
          },
        },
        {
          tags: {
            any: "landcover",
            none: "vegetation",
          },
          stylers: {
            visibility: "off",
          },
        },
      ],
    })
  );
}
